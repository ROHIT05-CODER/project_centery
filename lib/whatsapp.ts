export function whatsappLink(message: string) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!number || number.includes("X")) return `https://wa.me/?text=${encodeURIComponent(message)}`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}