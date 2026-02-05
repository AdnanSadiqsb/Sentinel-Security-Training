interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
}

export default function TestimonialCard({
  name,
  role,
  quote
}: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-6 text-white/80 shadow-glow">
      <p className="text-sm leading-relaxed">“{quote}”</p>
      <div className="mt-4 text-sm font-semibold text-white">
        {name}
      </div>
      <div className="text-xs text-white/60">{role}</div>
    </div>
  );
}
