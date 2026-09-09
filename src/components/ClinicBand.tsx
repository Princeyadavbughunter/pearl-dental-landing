import Image from "next/image";
import { site } from "@/config/site";

/**
 * A full-bleed photograph of the clinic's own reception, breaking the column
 * rhythm entirely. This is the physical proof behind the "one clinic" claim
 * made in the hero, so it earns the width and carries no cards or buttons.
 */
export default function ClinicBand() {
  return (
    <section id="clinic" aria-label="Inside the clinic" className="relative bg-teal-900">
      <div className="relative h-[58vw] max-h-[620px] min-h-[300px] w-full">
        <Image
          src="/clinic/reception-wide.jpg"
          alt={`The reception at ${site.name}, Anna Nagar East, Chennai`}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "55% 50%" }}
        />
        <div aria-hidden className="scrim absolute inset-0" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="shell pb-7 sm:pb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-200">
              Anna Nagar East
            </p>
            <h2 className="h2 mt-3 max-w-[22ch] text-white">
              One clinic. Diagnosis to final crown.
            </h2>
            <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-white/80">
              Imaging, planning, surgery, root canals and prosthetics all happen here —
              nothing is sent out halfway through your treatment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
