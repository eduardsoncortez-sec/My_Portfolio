import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import { PageMotion } from "@/components/page-motion";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3107"),
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
  twitter: { card: "summary_large_image" },
  title: "Eduardson Cortez | Full-Stack Web Developer, System Designer & Cybersecurity Enthusiast",
  description: "Full-stack web developer, system designer, cybersecurity enthusiast, and founder of SiglaTech Solutions. Explore websites, custom web systems, and IT projects built with an AI-assisted workflow.",
  openGraph: {
    title: "Eduardson Cortez — Web Development, Systems & IT",
    description: "Full-stack web developer, system designer, cybersecurity enthusiast, and founder of SiglaTech Solutions. Explore my projects and IT background.",
    type: "website",
    locale: "en_PH",
    siteName: "Eduardson Cortez — Personal Portfolio",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}<PageMotion /></body></html>;
}
