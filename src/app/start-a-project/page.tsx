import type { Metadata } from "next";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";
import { InquiryForm } from "@/components/inquiry-form";
import { profile } from "@/content/portfolio";
import { canonical, socialImages } from "@/lib/site";

export const metadata: Metadata = { title: "Start a Project | Eduardson Cortez", description: "Tell Eduardson about your website, web system, or technical project. Choose a service and prepare a project inquiry by email.", alternates: canonical("/start-a-project"), openGraph: { title: "Start a Project | Eduardson Cortez", description: "Have a website, system, or technical project in mind? Let's start a conversation.", images: socialImages } };

export default function StartProject() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header homePage={false} activeSection="contact" /><main id="main-content" className="inquiry-page container"><Link className="back-link" href="/#contact"><ArrowLeft size={16} />Back to portfolio</Link><div className="inquiry-intro"><p className="eyebrow"><span />LET’S START WITH YOUR IDEA</p><h1>A little detail.<br /><em>A great starting point.</em></h1><p>A website, a useful system, or a technical challenge—tell me what you have in mind.</p></div><InquiryForm /><aside className="inquiry-direct"><Mail size={19} /><span>Prefer a direct conversation? <a href={`mailto:${profile.email}`}>Email me</a> or <a href={profile.facebook} target="_blank" rel="noopener noreferrer">connect on Facebook<span className="sr-only"> (opens in a new tab)</span></a>.</span></aside></main><footer className="simple-footer container">© {new Date().getFullYear()} Eduardson Cortez.</footer></>;
}
