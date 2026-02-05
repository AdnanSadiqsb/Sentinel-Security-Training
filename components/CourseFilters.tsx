"use client";

import { useMemo, useState } from "react";
import courses from "@/content/courses.json";
import CourseCard from "@/components/CourseCard";

const categories = Array.from(new Set(courses.map((course) => course.category)));
const levels = Array.from(new Set(courses.map((course) => course.level)));
const deliveries = Array.from(new Set(courses.map((course) => course.delivery)));

export default function CourseFilters() {
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [delivery, setDelivery] = useState("All");
  const [elcasOnly, setElcasOnly] = useState(false);

  const filtered = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = category === "All" || course.category === category;
      const matchesLevel = level === "All" || course.level === level;
      const matchesDelivery = delivery === "All" || course.delivery === delivery;
      const matchesElcas = !elcasOnly || course.elcasEligible;
      return matchesCategory && matchesLevel && matchesDelivery && matchesElcas;
    });
  }, [category, level, delivery, elcasOnly]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-2xl border border-white/10 bg-navy-900/60 p-6 text-sm text-white/70 shadow-glow md:grid-cols-4">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Category</span>
          <select
            className="w-full rounded-lg border border-white/10 bg-navy-950 px-3 py-2 text-white"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="All">All</option>
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Level</span>
          <select
            className="w-full rounded-lg border border-white/10 bg-navy-950 px-3 py-2 text-white"
            value={level}
            onChange={(event) => setLevel(event.target.value)}
          >
            <option value="All">All</option>
            {levels.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Delivery</span>
          <select
            className="w-full rounded-lg border border-white/10 bg-navy-950 px-3 py-2 text-white"
            value={delivery}
            onChange={(event) => setDelivery(event.target.value)}
          >
            <option value="All">All</option>
            {deliveries.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={elcasOnly}
            onChange={(event) => setElcasOnly(event.target.checked)}
            className="h-4 w-4 rounded border-white/20 bg-navy-950 text-teal-400 focus:ring-teal-400"
          />
          ELCAS eligible only
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
