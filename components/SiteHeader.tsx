import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Training", href: "/training/" },
  { label: "Courses", href: "/training/courses/" },
  { label: "Funding", href: "/funding/" },
  { label: "About", href: "/about/" },
  { label: "Resources", href: "/resources/" },
  { label: "Contact", href: "/contact/" }
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold">
          <img
            src="/Assstes/Logo.jpeg"
            alt="Sentinel Security Training logo"
            className="h-10 w-10 rounded-lg object-cover"
          />
          <span>Sentinel Security Training</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/80 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/training/courses/"
            className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-teal-400 hover:text-white lg:inline-flex"
          >
            View Courses
          </Link>
          <Link
            href="/training/"
            className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-teal-400 hover:text-white lg:inline-flex"
          >
            Browse Training Options
          </Link>
          <button
            className="snipcart-checkout relative inline-flex items-center gap-2 rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-navy-950 shadow-glow"
            aria-label="Open cart"
          >
            <span>Cart</span>
            <span className="snipcart-count snipcart-items-count">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
