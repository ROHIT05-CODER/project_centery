import Link from "next/link";
import { MessageCircle, Zap } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container flex h-[76px] items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3 font-extrabold tracking-tight">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white"><Zap size={22} /></span>
          <span className="text-xl">PROJECT<span className="text-blue-600">CENTER</span><span className="block text-[10px] font-semibold tracking-[.22em] text-slate-500">ENGINEERING • INNOVATION</span></span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
          <Link href="/">Home</Link><Link href="/projects">All Projects</Link><Link href="/#categories">Categories</Link><Link href="/#how-it-works">How It Works</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
        </nav>
        <a className="btn btn-primary text-sm" href={whatsappLink("Hello Project Center, I would like to know more about your engineering projects.")} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a>
      </div>
    </header>
  );
}