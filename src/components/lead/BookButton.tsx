"use client";

import { useLeadDialog } from "./LeadProvider";

/**
 * The only client-side island most sections need. Keeping the trigger in its
 * own component lets every surrounding section stay a server component.
 */
export default function BookButton({
  children = "Book a consultation",
  className = "btn btn-primary",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { open } = useLeadDialog();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
