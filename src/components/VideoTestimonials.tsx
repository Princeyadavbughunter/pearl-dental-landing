import { patientVideos, site } from "@/config/site";

/**
 * Patient video testimonials.
 *
 * Native <video controls> — no autoplay, no custom player. Playback, volume
 * and fullscreen are the browser's own controls, so nothing here needs to be
 * reimplemented or kept accessible by hand.
 */
export default function VideoTestimonials() {
  return (
    <section id="video-testimonials" className="band border-b border-line bg-white">
      <div className="shell">
        <div className="max-w-[40rem]">
          <p className="eyebrow">In their own words</p>
          <h2 className="h2 mt-4">Patients on their experience at {site.name}.</h2>
          <p className="muted mt-5 max-w-prose">
            Hear directly from people who have been treated here.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {patientVideos.map((video) => (
            <li key={video.src}>
              <div className="figure aspect-video w-full border border-line bg-ink">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
              <p className="mt-3 text-[14px] text-ink-mute">{video.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
