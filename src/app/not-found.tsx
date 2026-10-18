import Link from "next/link";
import { Header } from "@/components/header";

export default function NotFound() {
  return <><Header homePage={false} /><main className="container not-found"><p className="eyebrow"><span />PAGE NOT FOUND</p><h1>Let’s get you<br /><em>back on track.</em></h1><p>This page is unavailable. Explore the portfolio or start a project conversation.</p><Link href="/#projects" className="button button-gold">Explore my projects</Link></main></>;
}
