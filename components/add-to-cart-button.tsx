"use client";

import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import type { Project } from "@/lib/projects";

export function AddToCartButton({ project, compact = false }: { project: Project; compact?: boolean }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem({ slug: project.slug, title: project.title, image: project.image });
    setAdded(true);
  }

  return (
    <button type="button" onClick={handleAdd} className={compact ? "inline-flex items-center gap-2 rounded-lg border border-[#cbd8c8] px-3 py-2 text-sm font-bold text-[#062f31] hover:bg-[#f0f1e8]" : "btn btn-primary"}>
      {added ? <Check size={17} /> : <ShoppingBag size={17} />}
      {added ? "Added to order" : "Add to order"}
    </button>
  );
}
