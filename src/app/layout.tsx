import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3107"),
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
  twitter: { card: "summary_large_image" },
  title: "Eduardson Cortez | Web Developer & System Designer",
  description: "Founder of SiglaTech Solutions. Websites, web systems, and digital solutions, backed by 10 years of hands-on electrical and technical experience. Explore my work and get in touch.",
  openGraph: {
    title: "Eduardson Cortez — Digital skills. Real-world experience.",
    description: "Web developer, system designer, and founder of SiglaTech Solutions. Explore my projects and technical background.",
    type: "website",
    locale: "en_PH",
    siteName: "Eduardson Cortez — Personal Portfolio",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
