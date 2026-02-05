import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-teal-400/80">
            Sentinel Security Training
          </p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            Professional security training, delivered with clarity and purpose.
          </h1>
          <p className="max-w-2xl text-base text-white/70">
            We provide structured training programmes designed to prepare individuals for
            responsible roles within the security sector. Our focus is on practical
            understanding, professional standards, and clear outcomes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/training/courses/"
              className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-glow"
            >
              View Courses
            </Link>
            <Link
              href="/training/"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 hover:border-teal-400"
            >
              Browse Training Options
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-white/60">
            <span className="rounded-full border border-white/10 px-3 py-1">
              UK-based training
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Experienced instructors
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Clear expectations
            </span>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-navy-900/60 p-6 shadow-glow">
          <h2 className="text-lg font-semibold text-white">Introduction</h2>
          <p className="mt-4 text-sm text-white/70">
            Our courses support individuals at different stages of their professional
            development. Each programme is designed to be clear, relevant, and grounded in
            real working environments.
          </p>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading eyebrow="Training Areas" title="Training Areas" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Close Protection Training",
            "Event and Venue Safety",
            "Health and Safety Qualifications",
            "Risk Awareness and Assessment",
            "Emergency Care and First Response"
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-navy-900/60 p-6 shadow-glow"
            >
              <p className="text-sm font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
        <Link
          href="/training/courses/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300"
        >
          View All Courses <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="space-y-10">
        <SectionHeading eyebrow="Why Train With Us" title="Why Train With Us" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-6 shadow-glow">
            <h3 className="text-base font-semibold text-white">Clear course structure</h3>
            <p className="mt-3 text-sm text-white/70">
              Each course is outlined in detail, with defined learning outcomes and entry
              requirements.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-6 shadow-glow">
            <h3 className="text-base font-semibold text-white">Practical focus</h3>
            <p className="mt-3 text-sm text-white/70">
              Training is designed to reflect real operational contexts rather than theory alone.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-6 shadow-glow">
            <h3 className="text-base font-semibold text-white">Professional standards</h3>
            <p className="mt-3 text-sm text-white/70">
              We place strong emphasis on responsibility, communication, and appropriate conduct.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading eyebrow="Learner Feedback" title="Learner Feedback" />
        <div className="grid gap-6 md:grid-cols-3">
          <TestimonialCard
            name="Course participant"
            role="Level 3 programme"
            quote="The course content was clear and well structured."
          />
          <TestimonialCard
            name="Course participant"
            role="Level 4 programme"
            quote="Training felt relevant and professionally delivered."
          />
          <TestimonialCard
            name="Course participant"
            role="Level 2 programme"
            quote="A supportive learning environment with clear expectations."
          />
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-navy-900/60 p-10 shadow-glow">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              If you are considering professional training within the security sector,
              explore our courses to find the most suitable option.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/training/courses/"
              className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-glow"
            >
              View Courses
            </Link>
            <Link
              href="/contact/"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 hover:border-teal-400"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
