import SectionHeading from "@/components/SectionHeading";
import CourseFilters from "@/components/CourseFilters";

export default function CoursesPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Courses"
        title="Courses"
        description="All courses listed below are available to book online."
      />
      <CourseFilters />
    </div>
  );
}
