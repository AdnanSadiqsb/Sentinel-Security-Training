import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy-900">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-lg font-semibold">
            <img
              src="/Assstes/Logo.jpeg"
              alt="Sentinel Security Training logo"
              className="h-10 w-10 rounded-lg object-cover"
            />
            <span>Sentinel Security Training</span>
          </div>
          <p className="text-sm text-white/70">
            Professional training focused on clear outcomes, responsible practice, and
            practical learning.
          </p>
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <p className="text-white">Explore</p>
          <Link href="/training/" className="block hover:text-white">Training</Link>
          <Link href="/training/courses/" className="block hover:text-white">Courses</Link>
          <Link href="/funding/" className="block hover:text-white">Funding</Link>
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <p className="text-white">Contact</p>
          <Link href="/contact/" className="block hover:text-white">
            Send an enquiry
          </Link>
          <p>Monday to Friday, 9:00am – 5:00pm</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/60">
        © 2024 Sentinel Security Training. All rights reserved.
      </div>
    </footer>
  );
}
