import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { resources } from "@/content/resources";

export default function ResourcesPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Resources"
        title="Resources"
        description="Articles and guidance covering training pathways, qualifications, and professional standards within the security sector."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {resources.map((resource) => (
          <Link
            key={resource.slug}
            href={`/resources/${resource.slug}/`}
            className="rounded-2xl border border-white/10 bg-navy-900/60 p-6 shadow-glow transition hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
            <p className="mt-2 text-sm text-white/70">{resource.excerpt}</p>
            <p className="mt-4 text-xs text-white/50">
              {resource.date} · {resource.readingTime}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
