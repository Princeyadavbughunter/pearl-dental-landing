"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import LeadDialog from "./LeadDialog";

/**
 * Owns the consultation dialog and decides when — if ever — to offer it
 * unprompted.
 *
 * The previous build threw the modal at every visitor 8 seconds after landing,
 * before they had read anything. This waits for a signal that the person is
 * actually engaged, shows the offer at most once per session, and stays quiet
 * for a week after it is dismissed.
 */

type LeadContextValue = { open: () => void };
const LeadContext = createContext<LeadContextValue | null>(null);

export function useLeadDialog() {
  const ctx = useContext(LeadContext);
  if (!ctx) throw new Error("useLeadDialog must be used inside <LeadProvider>");
  return ctx;
}

const DISMISSED_KEY = "pd:lead-dismissed-until";
const SHOWN_KEY = "pd:lead-shown";
const QUIET_DAYS = 7;

/** Engagement gates before an unprompted invitation is acceptable. */
const MIN_DWELL_MS = 25_000;
const MOBILE_SCROLL = 0.55;
const DESKTOP_SCROLL = 0.35;

function suppressed() {
  try {
    if (sessionStorage.getItem(SHOWN_KEY)) return true;
    const until = Number(localStorage.getItem(DISMISSED_KEY) || 0);
    return Date.now() < until;
  } catch {
    // Private mode, or storage blocked: fall back to "don't nag".
    return true;
  }
}

export default function LeadProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const autoOffered = useRef(false);

  const openDialog = useCallback(() => setOpen(true), []);

  const closeDialog = useCallback(() => {
    setOpen(false);
    // Only an auto-offered dialog earns a cooling-off period; closing one the
    // visitor opened themselves shouldn't stop them reopening it.
    if (autoOffered.current) {
      try {
        localStorage.setItem(
          DISMISSED_KEY,
          String(Date.now() + QUIET_DAYS * 864e5),
        );
      } catch {
        /* storage unavailable — nothing to remember */
      }
      autoOffered.current = false;
    }
  }, []);

  useEffect(() => {
    if (suppressed()) return;

    const mountedAt = Date.now();
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    let done = false;

    const offer = () => {
      if (done || suppressed()) return;
      done = true;
      autoOffered.current = true;
      try {
        sessionStorage.setItem(SHOWN_KEY, "1");
      } catch {
        /* ignore */
      }
      setOpen(true);
      cleanup();
    };

    const engagedLongEnough = () => Date.now() - mountedAt > MIN_DWELL_MS;

    const scrolledEnough = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return false;
      const ratio = window.scrollY / max;
      return ratio >= (coarse ? MOBILE_SCROLL : DESKTOP_SCROLL);
    };

    const onScroll = () => {
      if (engagedLongEnough() && scrolledEnough()) offer();
    };

    // Desktop only: leaving through the top of the viewport reads as intent to go.
    const onMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget || e.clientY > 8) return;
      if (engagedLongEnough() || scrolledEnough()) offer();
    };

    function cleanup() {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    if (!coarse) document.addEventListener("mouseout", onMouseOut);
    return cleanup;
  }, []);

  const value = useMemo(() => ({ open: openDialog }), [openDialog]);

  return (
    <LeadContext.Provider value={value}>
      {children}
      <LeadDialog open={open} onClose={closeDialog} />
    </LeadContext.Provider>
  );
}
