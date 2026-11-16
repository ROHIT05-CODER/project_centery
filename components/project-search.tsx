 "use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export function ProjectSearch({ initialCategory, categories }: { initialCategory: string; categories: string[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [difficulty, setDifficulty] = useState("");
  const filtered = useMemo(() => projects.filter(p => {
    const text = `${p.title} ${p.summary} ${p.technologies.join(" ")}`.toLowerCase();
    return (!query || text.includes(query.toLowerCase())) &&
      (!difficulty || p.difficulty === difficulty) &&
      (!category || p.category === category || (category === "Internet of Things" && p.technologies.includes("IoT")) || (category === "ESP32 & ESP8266" && p.technologies.includes("ESP32")));
  }), [query, category, difficulty]);
  return <div className="mt-8"><div className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-[1fr_230px_180px]"><input aria-label="Search projects" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-blue-500" placeholder="Search by project, component or technology..." value={query} onChange={e=>setQuery(e.target.value)}/><select aria-label="Filter by category" className="rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm" value={category} onChange={e=>setCategory(e.target.value)}><option value="">All categories</option>{categories.map(c=><option key={c} value={c}>{c}</option>)}</select><select aria-label="Filter by difficulty" className="rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm" value={difficulty} onChange={e=>setDifficulty(e.target.value)}><option value="">All levels</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></div><p className="mt-4 text-sm text-slate-500">{filtered.length} matching projects</p><div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map(p=><ProjectCard key={p.slug} project={p}/>)}</div>{filtered.length===0 && <div className="py-16 text-center text-slate-500">No matching projects. Try another search or filter.</div>}</div>;
}