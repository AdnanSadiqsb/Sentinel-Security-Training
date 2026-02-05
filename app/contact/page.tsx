import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Contact"
        title="Contact"
        description="If you have questions about our training courses, enrolment, or funding options, please get in touch."
      />
      <div className="grid gap-8 rounded-2xl border border-white/10 bg-navy-900/60 p-6 text-sm text-white/70 shadow-glow md:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-white">Enquiry Topics</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
                <span>Course information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
                <span>Funding guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
                <span>Enrolment support</span>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-white">Business Hours</p>
            <p className="text-white/70">Monday to Friday, 9:00am – 5:00pm</p>
          </div>
        </div>
        <form
          className="space-y-4"
          action="mailto:enquiries@sentinelsecuritytraining.co.uk"
          method="post"
          encType="text/plain"
        >
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">Name</span>
            <input
              type="text"
              name="name"
              className="mt-2 w-full rounded-lg border border-white/10 bg-navy-950 px-3 py-2 text-white"
              required
            />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">Email</span>
            <input
              type="email"
              name="email"
              className="mt-2 w-full rounded-lg border border-white/10 bg-navy-950 px-3 py-2 text-white"
              required
            />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">Message</span>
            <textarea
              name="message"
              rows={4}
              className="mt-2 w-full rounded-lg border border-white/10 bg-navy-950 px-3 py-2 text-white"
              placeholder="Share your training needs and preferred dates."
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-glow"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
