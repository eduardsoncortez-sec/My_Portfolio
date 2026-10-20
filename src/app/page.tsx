import Image from "next/image";
import type { Metadata } from "next";
import { canonical } from "@/lib/site";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Award, BarChart3, BriefcaseBusiness, Check, Code2, Cpu, Globe2, GraduationCap, Layers3, Mail, PenTool, ShieldCheck, Wrench } from "lucide-react";
import { Header, Brand } from "@/components/header";
import { CopyEmail } from "@/components/copy-email";
import { profile, projects, services, skillGroups, certifications, navigation, workPhotos } from "@/content/portfolio";

const icons = { globe: Globe2, code: Code2, chart: BarChart3, school: GraduationCap, pen: PenTool, layers: Layers3, cpu: Cpu, shield: ShieldCheck };

export const metadata: Metadata = { alternates: canonical("/") };

function Facebook({ size = 24 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8z" /></svg>;
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span />{children}</p>; }
function SectionHeading({ eyebrow, title, accent, text }: { eyebrow: string; title: string; accent?: string; text?: string }) {
  return <div className="section-heading"><div><Eyebrow>{eyebrow}</Eyebrow><h2>{title} {accent && <em>{accent}</em>}</h2></div>{text && <p className="section-intro">{text}</p>}</div>;
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return <article className={`project-card ${project.featured ? "featured" : ""}`}>
    <Link href={`/projects/${project.slug}`} className="project-image-link" aria-label={`Explore ${project.title} project details`}>
      <div className="browser-bar" aria-hidden="true"><span /><span /><span /><small>{new URL(project.url).hostname}</small><ArrowUpRight size={12} /></div>
      <div className="project-image"><Image src={project.image} alt={`${project.title} website screenshot`} width={1920} height={975} sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 600px" /></div>
      <span className="project-open"><ArrowUpRight size={22} /></span>
    </Link>
    <div className="project-info"><p className="project-category"><span>{project.category}</span><span className="project-number">0{index + 1}</span></p>
      <h3><Link href={`/projects/${project.slug}`}>{project.title}<ArrowUpRight size={20} /></Link></h3>
      <p>{project.description}</p><div className="project-bottom"><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Link href={`/projects/${project.slug}`} className="project-link" aria-label={`View details: ${project.title}`}>Project details <ArrowRight size={15} /></Link><a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link demo-link" aria-label={`Live demo: ${project.title} (opens in a new tab)`}>Live site <ArrowUpRight size={14} /></a></div>
    </div>
  </article>;
}

export default function Home() {
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Header />
    <main id="main-content">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy"><Eyebrow>DEVELOPER. DESIGNER. PROBLEM SOLVER.</Eyebrow>
            <p className="hello">Hello, I’m</p>
            <h1 id="hero-title">Eduardson<br /><em>Cortez.</em></h1>
            <p className="hero-role"><span>Full-Stack Web Developer</span><span>System Designer</span><span>Cybersecurity Enthusiast</span></p>
            <p className="hero-description">I design and develop modern websites, custom web applications, and digital systems for businesses, schools, and organizations. My work focuses on creating practical, secure, and user-friendly solutions through modern technologies and AI-assisted development.</p>
            <div className="hero-actions"><a href="#projects" className="button button-gold">View my work <ArrowUpRight size={18} /></a><Link href="/start-a-project" className="button button-outline">Start a project <ArrowRight size={17} /></Link></div>
            <a className="founder-line" href={profile.studio} target="_blank" rel="noopener noreferrer"><span className="founder-mark"><BriefcaseBusiness size={15} /></span>Founder of <strong>SiglaTech Solutions</strong><ArrowUpRight size={14} /></a>
          </div>
          <div className="hero-visual portrait-composition">
            <span className="portrait-orbit" aria-hidden="true" />
            <div className="hero-mockups" aria-hidden="true">{[projects[0], projects[1]].map((project, index) => <div key={project.slug} className={`hero-mockup mockup-${index}`}><div className="mockup-toolbar"><i /><i /><i /><span>{project.title}</span></div><div className="mockup-screen"><Image src={project.image} alt="" width={640} height={325} sizes="280px" /></div></div>)}</div>
            <div className={`portrait-window ${profile.portraitIsReference ? "from-reference" : "original-photo"}`}><Image src={profile.portrait} alt={profile.portraitAlt} width={1088} height={1448} preload sizes="(max-width: 700px) 100vw, 600px" /></div>
            <div className="portrait-caption"><span className="small-star">✦</span><span>Thoughtful systems.<br /><em>Practical IT solutions.</em></span></div>
            <span className="visual-index" aria-hidden="true">IDEAS INTO REAL SOLUTIONS — EC</span>
          </div>
        </div>
        <div className="container hero-footer"><span>WEBSITES. SYSTEMS. PRACTICAL IT SOLUTIONS.</span><a href="#services">Explore what I do <ArrowDown size={15} /></a></div>
      </section>

      <div className="credentials-strip"><div className="container credentials-inner"><div><Code2 /><span>AI-assisted<small>Full-stack development</small></span></div><div><Layers3 /><span>Thoughtful systems<small>From concept to interface</small></span></div><div><Award /><span>Computer Systems Servicing<small>NC II Certification</small></span></div><div><ShieldCheck /><span>Cybersecurity<small>Foundations & privacy projects</small></span></div></div></div>

      <section id="services" className="section services-section"><div className="container">
        <SectionHeading eyebrow="WHAT I DO" title="Good ideas deserve" accent="great execution." text="From a first impression online to a system that makes everyday work easier. Here’s how I can help." />
        <div className="services-grid">{services.map((service, index) => { const Icon = icons[service.icon]; return <article className="service-card" key={service.title}><div className="service-top"><Icon size={26} strokeWidth={1.5} /><span>0{index + 1}</span></div><h3>{service.title}</h3><p>{service.text}</p></article>; })}</div>
        <p className="section-note"><span />Have something specific in mind? <a href="#contact">Let’s talk about it <ArrowRight size={14} /></a></p>
      </div></section>

      <section id="projects" className="section projects-section"><div className="container">
        <SectionHeading eyebrow="SELECTED WORK" title="Ideas made" accent="real." text="A selection of websites and web systems I’ve built, from business platforms to institutional prototypes." />
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
        <p className="project-footnote">Explore the purpose, features, and approach behind each project. Demo and prototype projects are labeled above.</p>
      </div></section>

      <section id="about" className="section about-section"><div className="container about-grid">
        <div className="about-visual"><div className="workshop-image"><Image src={profile.servicingImage} alt={profile.servicingImageAlt} width={1536} height={1024} sizes="(max-width: 800px) 100vw, 550px" />{profile.servicingImageIsIllustration && <span className="illustration-label">Illustrative image</span>}</div><div className="about-image-caption"><Wrench size={22} /><span>Practical skills.<br /><strong>A problem-solving mindset.</strong></span><span className="caption-line" /></div></div>
        <div className="about-copy"><Eyebrow>THE PERSON BEHIND THE WORK</Eyebrow><h2>Practical thinking.<br /><em>Purposeful technology.</em></h2><p>I’m Eduardson Cortez, a full-stack web developer, system designer, cybersecurity enthusiast, and the founder of <a href={profile.studio} target="_blank" rel="noopener noreferrer">SiglaTech Solutions</a>.</p><p>I build websites and web systems for businesses, schools, and organizations. My experience with computer troubleshooting, reformatting, and PC assembly helps me approach technical problems with patience and attention to detail.</p><p>I use an AI-assisted development workflow to turn ideas into working interfaces and systems. My interest in cybersecurity and data privacy also informs projects such as DataShield PH, a demonstration of privacy-management workflows.</p><div className="about-signoff"><span className="signature">Eduardson Cortez</span><span>FOUNDER · BUILDER · PROBLEM SOLVER</span></div></div>
      </div></section>

      {workPhotos.length > 0 && <section className="section work-photos-section"><div className="container"><SectionHeading eyebrow="HANDS-ON WORK" title="From the" accent="workbench." /><div className="work-photo-grid">{workPhotos.map(photo => <figure key={photo.src}><Image src={photo.src} alt={photo.alt} width={1200} height={900} sizes="(max-width: 640px) 100vw, 600px" /><figcaption>{photo.caption}</figcaption></figure>)}</div></div></section>}

      <section id="skills" className="section skills-section"><div className="container">
        <SectionHeading eyebrow="SKILLS & BACKGROUND" title="Built around" accent="information technology." text="Web development, systems thinking, security foundations, and practical computer support." />
        <div className="skills-grid">{skillGroups.map(group => { const Icon = icons[group.icon]; return <article className="skill-panel" key={group.title}><div className="skill-panel-heading"><Icon /><div><p>{group.label}</p><h3>{group.title}</h3></div></div><ul>{group.skills.map(skill => <li key={skill}><Check size={15} />{skill}</li>)}</ul></article>; })}</div>
      </div></section>

      <section id="certifications" className="section certifications-section"><div className="container">
        <SectionHeading eyebrow="CERTIFICATIONS" title="Trained. Certified." accent="Always building." text="Formal technical training that complements practical experience." />
        <div className="certifications-grid">{certifications.map(cert => { const Icon = Cpu; return <article key={cert.title} className="certificate-card"><div className="certificate-icon"><Icon size={30} strokeWidth={1.4} /></div><div><span className="certificate-label">TESDA NATIONAL CERTIFICATE</span><h3>{cert.title} <span>{cert.level}</span></h3><p>Technical Education and Skills Development Authority</p>{cert.image && <a href={cert.image} target="_blank" rel="noopener noreferrer" className="certificate-preview" aria-label={`View ${cert.title} certificate in a new tab`}><Image src={cert.image} alt={`${cert.title} ${cert.level} certificate`} width={480} height={340} sizes="260px" /><span>View certificate <ArrowUpRight size={14} /></span></a>}</div><Award className="certificate-seal" size={24} /></article>; })}</div>
      </div></section>

      <section id="contact" className="section contact-section"><div className="container contact-grid"><div><Eyebrow>LET’S BUILD SOMETHING GREAT</Eyebrow><h2>Your next idea.<br /><em>Let’s make it happen.</em></h2><p>A website, a web system, or a technical challenge.<br />Tell me what you have in mind.</p><Link href="/start-a-project" className="button button-gold contact-cta">Start a project <ArrowUpRight size={18} /></Link></div><div className="contact-options"><div className="contact-card"><Mail size={23} /><div><span>EMAIL ME</span><a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={18} /></a><CopyEmail /></div></div><div className="contact-card"><Facebook size={23} /><div><span>LET’S CONNECT</span><a href={profile.facebook} target="_blank" rel="noopener noreferrer">Find me on Facebook<ArrowUpRight size={18} /></a><p>Message me about your project.</p></div></div><p className="contact-small">Direct conversations. Thoughtful solutions.</p></div></div></section>
    </main>
    <footer className="site-footer"><div className="container"><div className="footer-main"><Brand /><nav aria-label="Footer navigation">{navigation.filter(item => ["About", "Projects", "Contact"].includes(item.label)).map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><div className="footer-social"><a href={`mailto:${profile.email}`} aria-label="Email Eduardson"><Mail size={19} /></a><a href={profile.facebook} target="_blank" rel="noopener noreferrer" aria-label="Eduardson on Facebook"><Facebook size={18} /></a></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Eduardson Cortez. All rights reserved.</p><a href="#home">Back to top <ArrowUpRight size={14} /></a></div></div></footer>
  </>;
}
