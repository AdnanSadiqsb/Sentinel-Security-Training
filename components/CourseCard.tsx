interface CourseCardProps {
  id: string;
  name: string;
  slug: string;
  price: number;
  level: string;
  delivery: string;
  summary: string;
  elcasEligible: boolean;
}

const formatPrice = (price: number) =>
  price === 0 ? "Free" : `£${price.toLocaleString("en-GB")}`;

export default function CourseCard({
  id,
  name,
  slug,
  price,
  level,
  delivery,
  summary,
  elcasEligible
}: CourseCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-900/60 p-6 shadow-glow transition hover:-translate-y-1 hover:border-teal-400/40">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-teal-400/80">
        <span>{level}</span>
        {elcasEligible ? <span>ELCAS eligible</span> : <span>Standard</span>}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{name}</h3>
      <p className="mt-3 text-sm text-white/70">{summary}</p>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-white/60">
        <span className="rounded-full border border-white/10 px-3 py-1">{delivery}</span>
        <span className="rounded-full border border-white/10 px-3 py-1">{formatPrice(price)}</span>
      </div>
      <div className="mt-auto pt-6">
        <button
          className="snipcart-add-item inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-navy-950"
          data-item-id={id}
          data-item-name={name}
          data-item-price={price}
          data-item-url={`/training/courses/${slug}/`}
          data-item-description={summary}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
