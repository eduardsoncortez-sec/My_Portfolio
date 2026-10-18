import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Header } from "@/components/header";
import { projects } from "@/content/portfolio";
import { projectDetails } from "@/content/project-details";
import { canonical, socialImages } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  if (!project) return { title: "Project not found" };
  return { title: `${project.title} | Eduardson Cortez`, description: project.description, alternates: canonical(`/projects/${slug}`), openGraph: { title: `${project.title} — Project overview`, description: project.description, type: "website", images: socialImages } };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  if (!project || !projectDetails[slug]) notFound();
  const detail = projectDetails[slug];
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header homePage={false} activeSection="projects" />
    <main id="main-content" className="detail-page"><div className="container">
      <Link className="back-link" href="/#projects"><ArrowLeft size={16} />All projects</Link>
      <div className="detail-heading"><div><p className="eyebrow"><span />PROJECT OVERVIEW</p><h1>{project.title}</h1><p className="detail-description">{project.description}</p></div><a className="button button-gold" href={project.url} target="_blank" rel="noopener noreferrer">{detail.status.toLowerCase().includes("demo") || detail.status.toLowerCase().includes("prototype") ? "Explore demo" : "Visit website"}<ArrowUpRight size={17} /><span className="sr-only"> (opens in a new tab)</span></a></div>
      <dl className="project-facts"><div><dt>MY CONTRIBUTION</dt><dd>{detail.role}</dd></div><div><dt>DESIGNED FOR</dt><dd>{detail.audience}</dd></div><div><dt>PROJECT TYPE</dt><dd>{detail.status}</dd></div></dl>
      <figure className="detail-screenshot"><a href={project.image} target="_blank" rel="noopener noreferrer" aria-label={`Open full screenshot of ${project.title} in a new tab`}><Image src={project.image} alt={detail.screenshotCaption} width={1920} height={975} sizes="(max-width: 800px) 100vw, 1200px" preload /><span className="screenshot-expand">View full screenshot <ArrowUpRight size={16} /></span></a><figcaption>{detail.screenshotCaption}</figcaption></figure>
      <div className="detail-story"><section aria-labelledby="purpose-title"><p className="eyebrow"><span />THE PURPOSE</p><h2 id="purpose-title">Built around<br /><em>a practical need.</em></h2><p>{detail.purpose}</p></section><section aria-labelledby="features-title"><h2 id="features-title">What’s inside</h2><div className="detail-features">{detail.features.map(feature => <article key={feature.title}><Check size={17} /><div><h3>{feature.title}</h3><p>{feature.description}</p></div></article>)}</div></section></div>
      <section className="approach-panel" aria-labelledby="approach-title"><div><p className="eyebrow"><span />DEVELOPMENT APPROACH</p><h2 id="approach-title">Practical thinking.<br /><em>AI-assisted development.</em></h2></div><div><p>{detail.approach}</p>{detail.note && <p className="project-context">{detail.note}</p>}</div></section>
      <section className="detail-cta"><div><h2>Have a similar idea?</h2><p>Let’s talk about what your website or system needs to do.</p></div><Link className="button button-gold" href="/start-a-project">Start a project<ArrowUpRight size={17} /></Link></section>
      <nav aria-label="Project navigation" className="detail-navigation"><Link href="/#projects"><ArrowLeft size={16} />All projects</Link><Link href={`/projects/${next.slug}`}>Next: {next.title}<ArrowRight size={16} /></Link></nav>
    </div></main><footer className="simple-footer container">© {new Date().getFullYear()} Eduardson Cortez. <a href="/#contact">Get in touch <ArrowUpRight size={14} /></a></footer></>;
}
