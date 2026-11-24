"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { ArrowLeft, MessageCircle, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { whatsappLink } from "@/lib/whatsapp";

export function CartPageClient() {
  const { items, removeItem, updateQuantity, clearCart } = useCart();
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const totalItems = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!items.length) return;
    const lines = items.map((item, index) => `${index + 1}. ${item.title} — Qty: ${item.quantity}`).join("\n");
    const message = [
      "PROJECT CENTER — NEW ORDER ENQUIRY",
      "",
      `Name: ${name.trim()}`,
      `College: ${college.trim()}`,
      `Phone: ${phone.trim()}`,
      `City: ${city.trim() || "Not provided"}`,
      "",
      "Requested projects:",
      lines,
      "",
      `Additional requirements: ${notes.trim() || "None"}`,
      "",
      "Please confirm availability, final quotation, delivery timeline and payment instructions. This is an order request, not a completed payment."
    ].join("\n");
    setError("");
    window.location.assign(whatsappLink(message));
  }

  if (!items.length) {
    return <section className="section"><div className="container max-w-2xl text-center">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#f0f1e8] text-[#668c2d]"><ShoppingBag size={30}/></div>
      <h1 className="mt-5 text-3xl font-black">Your order list is empty</h1>
      <p className="mt-3 text-slate-600">Browse the catalogue and add projects you would like a quotation for.</p>
      <Link href="/projects" className="btn btn-primary mt-7">Explore projects</Link>
    </div></section>;
  }

  return <section className="section"><div className="container">
    <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-[#668c2d]"><ArrowLeft size={16}/> Continue browsing</Link>
    <div className="mt-5"><div className="eyebrow">Your selection</div><h1 className="mt-2 text-4xl font-black">Order enquiry</h1><p className="mt-3 max-w-2xl text-slate-600">Review your selected projects and send your request to Project Center on WhatsApp. We will confirm pricing and availability before you pay.</p></div>
    <div className="mt-9 grid items-start gap-8 lg:grid-cols-[1.1fr_.9fr]">
      <div className="space-y-4">
        {items.map(item => <article key={item.slug} className="card flex gap-4 p-4">
          <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-slate-100">
            <Image src={item.image} alt={item.title} fill sizes="112px" className="object-cover"/>
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-extrabold">{item.title}</h2>
            <p className="mt-1 text-xs text-slate-500">Price: quotation after requirement review</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button type="button" aria-label={`Decrease quantity of ${item.title}`} onClick={() => updateQuantity(item.slug, item.quantity - 1)} className="grid h-8 w-8 place-items-center rounded-lg border"><Minus size={14}/></button>
              <span className="min-w-6 text-center text-sm font-bold">{item.quantity}</span>
              <button type="button" aria-label={`Increase quantity of ${item.title}`} onClick={() => updateQuantity(item.slug, item.quantity + 1)} className="grid h-8 w-8 place-items-center rounded-lg border"><Plus size={14}/></button>
              <button type="button" onClick={() => removeItem(item.slug)} className="ml-auto inline-flex items-center gap-1 text-xs font-bold text-red-600"><Trash2 size={14}/> Remove</button>
            </div>
          </div>
        </article>)}
        <button type="button" onClick={clearCart} className="text-sm font-semibold text-slate-500 hover:text-red-600">Clear order list</button>
      </div>

      <form onSubmit={submitOrder} className="card space-y-4 p-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4"><h2 className="text-xl font-black">Student details</h2><span className="rounded-full bg-[#f0f1e8] px-3 py-1 text-xs font-bold">{totalItems} item(s)</span></div>
        <label className="block text-sm font-semibold">Full name<input required maxLength={80} value={name} onChange={event => setName(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 font-normal outline-[#668c2d]" placeholder="Your name"/></label>
        <label className="block text-sm font-semibold">College / Institution<input required maxLength={120} value={college} onChange={event => setCollege(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 font-normal outline-[#668c2d]" placeholder="College name"/></label>
        <label className="block text-sm font-semibold">Contact number<input required type="tel" inputMode="tel" maxLength={20} value={phone} onChange={event => setPhone(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 font-normal outline-[#668c2d]" placeholder="Your WhatsApp number"/></label>
        <label className="block text-sm font-semibold">City (optional)<input maxLength={80} value={city} onChange={event => setCity(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 font-normal outline-[#668c2d]" placeholder="Your city"/></label>
        <label className="block text-sm font-semibold">Requirements / deadline (optional)<textarea rows={3} maxLength={500} value={notes} onChange={event => setNotes(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 font-normal outline-[#668c2d]" placeholder="Tell us your department, project level or expected date..."/></label>
        {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
        <button type="submit" className="btn btn-primary w-full"><MessageCircle size={18}/> Send order request on WhatsApp</button>
        <p className="text-xs leading-5 text-slate-500">No online payment is collected on this website. Project Center will confirm the final quotation, scope, availability and delivery terms with you on WhatsApp.</p>
      </form>
    </div>
  </div></section>;
}
