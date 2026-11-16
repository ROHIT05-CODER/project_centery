import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const siteUrl = "https://projectcentery-vugd.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Engineering Projects for Students | Project Center",
    template: "%s | Project Center",
  },
  description:
    "Discover engineering project ideas for students in IoT, ESP32, embedded systems, robotics and AI. Explore project concepts, technologies and enquiry options.",
  applicationName: "Project Center",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Project Center",
    title: "Engineering Projects for Students | Project Center",
    description:
      "Explore student engineering project ideas across IoT, embedded systems, robotics and AI.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Projects for Students | Project Center",
    description:
      "Explore student engineering project ideas across IoT, embedded systems, robotics and AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
