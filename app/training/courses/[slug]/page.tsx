import { notFound } from "next/navigation";
import Link from "next/link";
import courses from "@/content/courses.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const formatPrice = (price: number) =>
  price === 0 ? "Free" : `£${price.toLocaleString("en-GB")}`;

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-teal-400/80">Course</p>
        <h1 className="text-4xl font-semibold text-white">{course.name}</h1>
        <p className="max-w-2xl text-base text-white/70">{course.summary}</p>
      </div>

      <div className="grid gap-6 rounded-2xl border border-white/10 bg-navy-900/60 p-6 shadow-glow md:grid-cols-2">
        <div className="space-y-3 text-sm text-white/70">
          <p className="font-semibold text-white">Learning Outcomes</p>
          <ul className="space-y-2">
            {course.outcomes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-teal-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <p className="font-semibold text-white">Course Details</p>
          <p>
            <span className="font-semibold text-white">Duration:</span> {course.duration}
          </p>
          <p>
            <span className="font-semibold text-white">Delivery:</span> {course.delivery}
          </p>
          <p>
            <span className="font-semibold text-white">Location:</span> {course.location}
          </p>
        </div>
      </div>

      <div className="grid gap-6 rounded-2xl border border-white/10 bg-navy-900/60 p-6 shadow-glow md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4 text-sm text-white/70">
          <div>
            <p className="font-semibold text-white">Who the Course Is For</p>
            <p>{course.whoFor}</p>
          </div>
          <div>
            <p className="font-semibold text-white">Certification</p>
            <p>{course.certification}</p>
          </div>
          <div>
            <p className="font-semibold text-white">Funding</p>
            <p>{course.fundingNote}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-navy-950 p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Course fee</p>
            <p className="mt-2 text-2xl font-semibold text-white">{formatPrice(course.price)}</p>
          </div>
          <button
            className="snipcart-add-item inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-navy-950"
            data-item-id={course.id}
            data-item-name={course.name}
            data-item-price={course.price}
            data-item-url={`/training/courses/${course.slug}/`}
            data-item-description={course.summary}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/training/courses/"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 hover:border-teal-400"
        >
          Back to catalogue
        </Link>
        <Link
          href="/contact/"
          className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-glow"
        >
          Speak to admissions
        </Link>
      </div>
    </div>
  );
}
