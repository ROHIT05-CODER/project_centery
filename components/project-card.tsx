import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { whatsappLink } from "@/lib/whatsapp";

export function ProjectCard({ project }: { project: Project }) {
  const message = `Hello, I am interested in the ${project.title}. Please share the project scope, components, pricing and availability.`;
  return <article className="project-card card group overflow-hidden">
    <Link href={`/projects/${project.slug}`} className="project-image-wrap relative block aspect-[16/10] overflow-hidden" aria-label={`View ${project.title}`}>
      <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="project-image object-cover transition-transform duration-700 group-hover:scale-110"/>
      <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/80 via-transparent to-transparent"/>
      <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-bold tracking-wide text-white backdrop-blur">{project.category}</span>
      <span className="image-arrow absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-slate-900"><ArrowUpRight size={18}/></span>
    </Link>
    <div className="p-5">
      <div className="flex items-center justify-between gap-3"><span className="text-xs font-bold text-blue-600">{project.status}</span><span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">{project.difficulty}</span></div>
      <h3 className="mt-3 text-lg font-extrabold">{project.title}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">{project.technologies.map(t => <span key={t} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">{t}</span>)}</div>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4"><Link className="inline-flex items-center gap-1 text-sm font-bold text-blue-700" href={`/projects/${project.slug}`}>View details <ArrowUpRight size={16}/></Link><a className="text-sm font-bold text-slate-700 hover:text-blue-700" href={whatsappLink(message)} target="_blank" rel="noreferrer">Enquire</a></div>
    </div>
  </article>;
}
