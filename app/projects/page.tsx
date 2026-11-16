import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects, categories } from "@/lib/projects";
import { ProjectSearch } from "@/components/project-search";

export const metadata: Metadata = {
  title: "Engineering Projects for Students",
  description:
    "Browse engineering project ideas for students in IoT, ESP32, embedded systems, robotics, electronics and AI. Filter the catalogue by project category and technology.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Engineering Projects for Students",
    description:
      "Browse student project ideas across IoT, embedded systems, robotics, electronics and AI.",
    url: "/projects",
    type: "website",
  },
};

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const params = await searchParams;
  const selected = params.category ?? "";
  const filtered = selected ? projects.filter(p => p.category === selected || (selected === "Internet of Things" && p.technologies.includes("IoT")) || (selected === "ESP32 & ESP8266" && p.technologies.includes("ESP32"))) : projects;
  return <section className="section"><div className="container"><div className="eyebrow">Project catalogue</div><h1 className="mt-3 text-4xl font-black">Explore engineering projects</h1><p className="mt-3 max-w-2xl leading-7 text-slate-600">Search project ideas, compare technologies and open a project to review its current information.</p><ProjectSearch initialCategory={selected} categories={categories}/><div className="mt-8 flex items-center justify-between text-sm text-slate-500"><span>{filtered.length} sample projects</span><span>Catalogue content is editable</span></div><div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map(p=><ProjectCard key={p.slug} project={p}/>)}</div></div></section>;
}
