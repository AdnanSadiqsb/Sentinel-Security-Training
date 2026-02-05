interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.3em] text-teal-400/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm text-white/70 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
