import Link from "next/link";
import { ArrowUpRight, Cpu } from "lucide-react";
import type { Project } from "@/lib/projects";
import { whatsappLink } from "@/lib/whatsapp";

export function ProjectCard({ project }: { project: Project }) {
  const message = `Hello, I am interested in the ${project.title}. Please share the project scope, components, pricing and availability.`;
  return <article className="card overflow-hidden">
    <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50 text-blue-700">
      <div className="text-center"><Cpu size={42} className="mx-auto"/><p className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-500">Project image placeholder</p></div>
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between gap-3"><span className="text-xs font-bold text-blue-600">{project.category}</span><span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">{project.difficulty}</span></div>
      <h3 className="mt-3 text-lg font-extrabold">{project.title}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">{project.technologies.map(t => <span key={t} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">{t}</span>)}</div>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4"><Link className="inline-flex items-center gap-1 text-sm font-bold text-blue-700" href={`/projects/${project.slug}`}>View details <ArrowUpRight size={16}/></Link><a className="text-sm font-bold text-slate-700 hover:text-blue-700" href={whatsappLink(message)} target="_blank" rel="noreferrer">Enquire</a></div>
    </div>
  </article>;
}