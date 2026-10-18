"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/content/portfolio";

export function Brand() {
  return <a href="/#home" className="brand" aria-label="Eduardson Cortez, home"><span className="monogram" aria-hidden="true">E<span>C</span></span><span className="brand-name">EDUARDSON CORTEZ<small>PERSONAL PORTFOLIO</small></span></a>;
}

export function Header({ homePage = true, activeSection = "home" }: { homePage?: boolean; activeSection?: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(activeSection);

  useEffect(() => {
    if (!homePage) return;
    let frame = 0;
    const update = () => {
      const sections = navigation.map(({ href }) => document.querySelector(href)).filter((section): section is Element => Boolean(section)).sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
      const reached = sections.filter(section => section.getBoundingClientRect().top <= 180);
      if (reached.length) setActive(reached[reached.length - 1].id);
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [homePage]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); document.getElementById("menu-toggle")?.focus(); }
    };
    if (open) window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return <header className="site-header"><div className="container header-inner">
    <Brand />
    <nav aria-label="Main navigation" className="desktop-nav">{navigation.map(({ label, href }) => <a key={href} href={homePage ? href : `/${href}`} className={active === href.slice(1) ? "active" : ""} aria-current={active === href.slice(1) ? "location" : undefined}>{label}</a>)}</nav>
    <a href="/start-a-project" className="button button-gold header-cta">Start a project <ArrowUpRight size={16} /></a>
    <button id="menu-toggle" className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X /> : <Menu />}</button>
  </div>
  {open && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">{navigation.map(({ label, href }) => <a key={href} href={homePage ? href : `/${href}`} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}<a href="/start-a-project">Start a project<ArrowUpRight size={16} /></a></nav>}
  </header>;
}
