import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CourseCard from "@/components/CourseCard";
import courses from "@/content/courses.json";

export default function TrainingPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Training"
        title="Training Courses"
        description="Our training programmes are designed to support professional development within the security sector. Courses vary by level, focus, and duration, allowing learners to select the most appropriate route for their needs."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courses.slice(0, 3).map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/training/courses/"
          className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-glow"
        >
          Browse Courses
        </Link>
      </div>
    </div>
  );
}
