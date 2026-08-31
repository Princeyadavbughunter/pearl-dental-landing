import Image from "next/image";

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  return (
    <section id="visit-photos" className="surface-soft">
      <div className="shell">
        <div className="mb-12 text-center">
          <p className="eyebrow">Inside the Clinic</p>
          <h2 className="section-title mt-3">
            Our <span className="text-gradient-brand">Anna Nagar East</span> practice
          </h2>
          <div className="rule-brand mt-6" />
          <p className="section-lede mx-auto max-w-3xl">
            A modern, fully equipped dental clinic designed for your comfort. 
            State-of-the-art equipment with the warmth of a patient-first approach.
          </p>
        </div>

        {/* Full-width clinic hero image */}
        <div className="mb-8 overflow-hidden rounded-[22px] border border-line">
          <div className="relative h-72 w-full md:h-[480px]">
            <Image
              src="/hero.png"
              alt="Pearl Dental Clinic — Anna Nagar East, Chennai"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-display text-2xl font-bold drop-shadow-lg">Pearl Dental Clinic</h3>
              <p className="text-sm text-white/90 drop-shadow">101/1, F Block, 3rd Street, Anna Nagar East, Chennai</p>
            </div>
          </div>
        </div>

        {/* Award image + info grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          <div className="card relative overflow-hidden !p-0">
            <div className="relative h-64 md:h-72">
              <Image
                src="/award.jpg"
                alt="Pearl Dental Clinic Award Certificate"
                fill
                className="object-contain p-4"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-5 border-t border-line">
              <h3 className="font-display text-lg">Award for Clinical Excellence</h3>
              <p className="mt-2 text-sm text-[var(--text-mute)]">
                Recognised for outstanding contributions to implant dentistry and patient care.
              </p>
            </div>
          </div>

          <div className="card flex flex-col justify-center">
            <h3 className="font-display text-xl mb-6">Why Visit Pearl Dental?</h3>
            <ul className="space-y-4">
              {[
                { icon: "🏥", title: "Modern, Sterile Environment", desc: "DCI & IDA standard sterilisation with state-of-the-art anesthesia monitoring" },
                { icon: "📍", title: "Prime Location", desc: "101/1, F Block, 3rd Street, Anna Nagar East — near Valliammal School" },
                { icon: "⏰", title: "Convenient Timings", desc: "Mon–Sat: 9:30 AM–1:00 PM and 4:00 PM–8:00 PM" },
                { icon: "🅿️", title: "Easy Access", desc: "Behind Hotel Bhalaji Bhavan, with parking available nearby" },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h4 className="text-sm font-bold">{item.title}</h4>
                    <p className="text-sm text-[var(--text-mute)]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button onClick={onBookAppointment} className="btn btn-brand text-lg">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
