import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cpu, Lightbulb, ShieldCheck, Wrench, Sparkles } from "lucide-react";
import { categories, projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { whatsappLink } from "@/lib/whatsapp";

const domains = [
  { name: "Embedded Systems", note: "Microcontrollers & smart hardware", icon: Cpu, tone: "blue" },
  { name: "Robotics", note: "Autonomous machines & automation", icon: Wrench, tone: "cyan" },
  { name: "AI & Innovation", note: "Intelligent real-world solutions", icon: Lightbulb, tone: "amber" },
  { name: "Technical Guidance", note: "From concept to prototype", icon: ShieldCheck, tone: "violet" },
];

export default function HomePage() {
  return <>
    <section className="hero-3d relative isolate overflow-hidden bg-[#062f31] py-20 text-white md:py-28">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="container relative grid items-center gap-14 md:grid-cols-[1.08fr_.92fr]">
        <div className="hero-copy">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/10 px-3 py-1.5 text-xs font-bold tracking-[.16em] text-lime-200 uppercase"><Sparkles size={14}/> Engineering project hub</div>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.04] tracking-tight md:text-6xl lg:text-7xl">Ideas become <span className="hero-gradient-text">real-world</span> engineering.</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">Explore practical projects across IoT, embedded systems, robotics, AI and automation. Find a concept, understand the technology and discuss your requirements with our team.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link className="btn btn-primary" href="/projects">Explore projects <ArrowRight size={18}/></Link><a className="btn border border-white/20 text-white hover:bg-white/10" href={whatsappLink("Hello Project Center, I would like project guidance.")} target="_blank" rel="noreferrer">Talk to our team</a></div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400"><span>✓ Student & college focused</span><span>✓ Hardware and software domains</span><span>✓ Direct project enquiries</span></div>
        </div>
        <div className="hero-visual" aria-label="Abstract three-dimensional engineering technology illustration">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="core-cube"><div className="cube-face cube-front"><Cpu size={54}/><span>PROJECT<br/>CENTER</span></div><div className="cube-face cube-top"/><div className="cube-face cube-side"/></div>
          <div className="float-chip chip-a"><span className="chip-dot"/> IoT / ESP32</div><div className="float-chip chip-b"><span className="chip-dot"/> ROBOTICS</div><div className="float-chip chip-c"><span className="chip-dot"/> AI + EMBEDDED</div>
          <div className="visual-caption"><span className="caption-line"/> DESIGN · BUILD · INNOVATE</div>
        </div>
      </div>
    </section>

    <section className="section"><div className="container"><div className="max-w-2xl"><div className="eyebrow">Explore by domain</div><h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Engineering starts with curiosity.</h2><p className="mt-3 leading-7 text-slate-600">Browse project areas and discover ideas that match your department, interests and technical goals.</p></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{domains.map((d,i)=>{const Icon=d.icon;return <div key={d.name} className="domain-card card p-5"><div className="flex items-center justify-between"><span className="text-xs font-bold text-blue-600">0{i+1}</span><Icon className="text-blue-600" size={23}/></div><h3 className="mt-7 font-extrabold">{d.name}</h3><p className="mt-1 text-sm text-slate-500">{d.note}</p></div>})}</div></div></section>

    <section className="section bg-[#f5f4ed]"><div className="container"><div className="flex flex-wrap items-end justify-between gap-4"><div><div className="eyebrow">Selected concepts</div><h2 className="mt-3 text-3xl font-black">Explore featured projects</h2><p className="mt-2 text-sm text-slate-600">Project imagery and technical details help you compare ideas.</p></div><Link href="/projects" className="text-sm font-bold text-blue-700">View all projects <ArrowUpRight className="inline" size={16}/></Link></div><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.filter(p=>p.featured).map(p=><ProjectCard key={p.slug} project={p}/>)}</div></div></section>

    <section className="section"><div className="container"><div className="text-center"><div className="eyebrow">A clear path forward</div><h2 className="mt-3 text-3xl font-black">From discovery to project enquiry</h2><p className="mx-auto mt-3 max-w-2xl text-slate-600">Understand the concept first. Then discuss scope, components and implementation requirements.</p></div><div className="mt-10 grid gap-5 md:grid-cols-4">{["Browse project categories","Explore technical details","Discuss your requirements","Connect through WhatsApp"].map((s,i)=><div className="card process-card p-6" key={s}><div className="text-3xl font-black text-blue-600">0{i+1}</div><h3 className="mt-5 font-bold">{s}</h3></div>)}</div></div></section>
    <section className="pb-20"><div className="container"><div className="rounded-3xl bg-[#042426] px-7 py-10 text-white md:flex md:items-center md:justify-between md:px-12"><div><div className="text-xs font-bold uppercase tracking-[.16em] text-lime-300">Have a project in mind?</div><h2 className="mt-3 text-2xl font-black md:text-3xl">Let’s turn your idea into a working prototype.</h2><p className="mt-2 text-sm text-slate-300">Tell us your department, project domain and requirements.</p></div><a className="btn btn-primary mt-6 md:mt-0" href={whatsappLink("Hello Project Center, I want to discuss a project idea.")} target="_blank" rel="noreferrer">Start an enquiry <ArrowRight size={18}/></a></div></div></section>
  </>;
}
