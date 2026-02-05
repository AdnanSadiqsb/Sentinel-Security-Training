import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function FundingPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Funding and Support"
        title="Funding and Support"
        description="Certain courses may be eligible for external funding, including ELCAS. Where funding applies, we aim to provide clear and accurate guidance."
      />
      <div className="grid gap-6 rounded-2xl border border-white/10 bg-navy-900/60 p-6 text-sm text-white/70 shadow-glow">
        <h2 className="text-lg font-semibold text-white">Typical Process</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
            <span>Confirm eligibility</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
            <span>Select an eligible course</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
            <span>Submit funding documentation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
            <span>Confirm enrolment and attendance</span>
          </li>
        </ul>
        <p>
          If you are unsure whether funding applies to your circumstances, please contact us
          for advice.
        </p>
      </div>
      <Link
        href="/contact/"
        className="inline-flex rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-glow"
      >
        Enquire About Funding
      </Link>
    </div>
  );
}
