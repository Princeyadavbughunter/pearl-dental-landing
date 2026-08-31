import { site } from "@/config/site";

export default function StatsSection() {
  return (
    <section id="stats" className="!py-0">
      <div className="bg-gradient-to-br from-[var(--brand-2)] via-[var(--brand)] to-[#a34b00] py-14 text-white">
        <div className="shell">
          <div className="mb-8 text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/70">
              Our Track Record
            </p>
            <h2 className="font-display mt-2 text-2xl tracking-tight md:text-4xl">
              Numbers That Speak for Themselves
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {site.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[18px] border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm"
              >
                <span className="font-display block text-4xl font-extrabold md:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-[13px] font-semibold uppercase tracking-[0.12em] text-white/80">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
