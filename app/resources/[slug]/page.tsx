import { notFound } from "next/navigation";
import { resources, getResourceContent } from "@/content/resources";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

  const Content = await getResourceContent(resource.slug);

  return (
    <article className="prose prose-invert max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-teal-400/80">
        Resource
      </p>
      <h1 className="text-4xl text-white">{resource.title}</h1>
      <p className="text-sm text-white/60">
        {resource.date} · {resource.readingTime}
      </p>
      <div className="mt-8 text-white/80">
        <Content />
      </div>
    </article>
  );
}
