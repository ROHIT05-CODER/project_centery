import type { Metadata } from "next";
import { CartPageClient } from "@/components/cart-page-client";

export const metadata: Metadata = {
  title: "Your Order | Project Center",
  description: "Review selected student engineering projects and send an order enquiry to Project Center.",
  robots: { index: false, follow: true },
};

export default function CartPage() {
  return <CartPageClient />;
}
