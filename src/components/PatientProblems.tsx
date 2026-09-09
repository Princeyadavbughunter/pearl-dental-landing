import BookButton from "./lead/BookButton";
import { patientProblems } from "@/config/site";

/**
 * Problem recognition — the section that lets a visitor find themselves on the
 * page before being sold anything.
 *
 * Every line maps to a service the clinic states it provides (Drive: Services
 * offered). It is set as a plain two-column list on a tinted ground, with no
 * icons: the sentences are the content, and an icon per row would only add
 * decoration.
 */
export default function PatientProblems() {
  return (
    <section id="is-this-you" className="band border-b border-line bg-teal-50/60">
      <div className="shell">
        <div className="max-w-[44rem]">
          <p className="eyebrow">Is this you?</p>
          <h2 className="h2 mt-4">
            Most people who come to Pearl Dental have been told{" "}
            <em className="not-italic text-teal-700">no</em> somewhere else.
          </h2>
          <p className="muted mt-5 max-w-prose">
            Complex cases are the practice&apos;s focus rather than its exception. If one
            of these describes your situation, it is worth a conversation.
          </p>
        </div>

        <ul className="mt-12 grid gap-x-12 border-t border-line sm:grid-cols-2">
          {patientProblems.map((item) => (
            <li key={item.title} className="border-b border-line py-6">
              <h3 className="text-[17px] font-medium leading-snug">{item.title}</h3>
              <p className="muted mt-2 max-w-prose !text-[14px]">{item.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <BookButton className="btn btn-primary">Ask about your case</BookButton>
          <p className="text-[14px] text-ink-mute">
            What is possible can only be confirmed after an examination.
          </p>
        </div>
      </div>
    </section>
  );
}
