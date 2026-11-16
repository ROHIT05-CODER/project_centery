import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Project Center",
  description:
    "Learn about Project Center, a student-focused engineering project discovery platform covering IoT, embedded systems, robotics and technical project guidance.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Project Center",
    description:
      "A student-focused platform to explore engineering project ideas and technical domains.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <section className="section"><div className="container max-w-4xl"><div className="eyebrow">About Project Center</div><h1 className="mt-3 text-4xl font-black">Practical engineering ideas, clearly explained.</h1><p className="mt-6 text-lg leading-8 text-slate-600">Project Center is planned as an engineering project discovery and enquiry platform for students, colleges and innovation teams.</p><div className="mt-10 grid gap-5 md:grid-cols-2">{[["Who We Are","An engineering project and technical solutions centre. Business history and credentials can be added when verified."],["What We Do","Project discovery, prototyping support, embedded systems, IoT, robotics and technical documentation."],["Technical Expertise","Arduino, ESP32, embedded development, sensors, hardware integration and software concepts."],["Our Process","Understand requirements, confirm scope, discuss feasibility, share a quotation and agree on delivery."]].map(([h,p])=><div className="card p-6" key={h}><h2 className="font-extrabold">{h}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{p}</p></div>)}</div></div></section>;
}
