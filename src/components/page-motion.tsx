"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive enhancement: content is visible in the server HTML and stays
 * visible without JavaScript or IntersectionObserver. No hidden reveal classes.
 */
export function PageMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window) || !Element.prototype.animate) return;

    const animations = new Map<Element, Animation>();
    const seen = new WeakSet<Element>();
    const groups = [
      ".section-heading",
      ".services-grid > .service-card",
      ".projects-grid > .project-card",
      ".about-grid > *",
      ".skills-grid > .skill-panel",
      ".certifications-grid > .certificate-card",
      ".contact-grid > *",
      ".detail-story > section",
      ".approach-panel",
      ".detail-cta",
    ];
    const targets = groups.flatMap(selector =>
      Array.from(document.querySelectorAll<HTMLElement>(selector))
        .map((element, index) => ({ element, delay: (index % 3) * 65 })),
    );
    const delays = new Map<Element, number>(targets.map(({ element, delay }) => [element, delay]));
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target;
        observer.unobserve(element);
        if (seen.has(element) || preference.matches || element.contains(document.activeElement)) continue;
        seen.add(element);
        const direction = element.matches(".about-visual") ? "-12px 0" :
          element.matches(".about-copy") ? "12px 0" : "0 16px";
        const animation = element.animate(
          [{ opacity: 0.35, translate: direction }, { opacity: 1, translate: "0 0" }],
          { duration: 480, delay: delays.get(element) ?? 0, easing: "cubic-bezier(.2,.7,.2,1)", fill: "backwards" },
        );
        animations.set(element, animation);
        animation.onfinish = () => { animations.delete(element); };
      }
    }, { threshold: 0.08 });

    const cancelAnimations = () => {
      animations.forEach(animation => animation.cancel());
      animations.clear();
    };
    const syncPreference = () => {
      observer.disconnect();
      cancelAnimations();
      if (!preference.matches) {
        targets.forEach(({ element }) => { if (!seen.has(element)) observer.observe(element); });
      }
    };
    // Keyboard focus must never wait for decorative animation to finish.
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Node)) return;
      for (const { element } of targets) {
        if (element.contains(event.target)) {
          seen.add(element);
          observer.unobserve(element);
          animations.get(element)?.cancel();
          animations.delete(element);
        }
      }
    };
    syncPreference();
    preference.addEventListener("change", syncPreference);
    document.addEventListener("focusin", onFocus);
    return () => {
      observer.disconnect();
      cancelAnimations();
      preference.removeEventListener("change", syncPreference);
      document.removeEventListener("focusin", onFocus);
    };
  }, [pathname]);

  return null;
}
