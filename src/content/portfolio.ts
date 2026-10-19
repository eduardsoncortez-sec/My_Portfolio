export const profile = {
  name: "Eduardson Cortez",
  email: "eduardcortez05@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61590826374392",
  studio: "https://siglatechsolutions.com/",
  // Original graduation photograph supplied by the owner, displayed with CSS framing.
  portrait: "/images/eduardson-graduation-glasses.jpg",
  portraitIsReference: false,
  portraitAlt: "Eduardson Cortez wearing gold-tinted glasses, a black graduation cap and gown, and a gold GK College stole",
  servicingImage: "/images/computer-workshop.png",
  servicingImageAlt: "Illustrative computer servicing workbench with an open desktop PC and assembly tools",
  servicingImageIsIllustration: true,
};

// Add actual work photos here when supplied. No stock images are presented as completed work.
export const workPhotos: { src: string; alt: string; caption: string }[] = [];

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    title: "SiglaTech Solutions",
    slug: "siglatech-solutions",
    category: "Company website",
    description: "The home of my web and technology studio. Websites and custom web applications for businesses, schools, and organizations.",
    image: "/images/siglatech.png",
    url: "https://siglatechsolutions.com/",
    tags: ["Web development", "My studio"],
    label: "Founder-led studio",
    featured: true,
  },
  {
    title: "DataShield PH",
    slug: "datashield-ph",
    category: "Web application · Demo",
    description: "A web-based data privacy management and compliance support system for GK College of Business, Arts, and Technology.",
    image: "/images/datashield.png",
    url: "https://datashield-ph.vercel.app/login",
    tags: ["Data privacy", "Management system"],
    label: "Interactive demo",
    featured: true,
  },
  {
    title: "Eventify",
    slug: "eventify",
    category: "Business website",
    description: "An event sourcing and coordination platform that brings services, suppliers, and inquiries into one experience.",
    image: "/images/eventify.png",
    url: "https://eventify-six-eta.vercel.app/",
    tags: ["Events", "Business"],
    label: "Event services",
    featured: false,
  },
  {
    title: "UPCM Repository",
    slug: "upcm-repository",
    category: "Web system · Prototype",
    description: "A document repository prototype for the UP College of Medicine, designed around access to shared knowledge.",
    image: "/images/upcm-repository.png",
    url: "https://upcm-repository-prototype.vercel.app/#/",
    tags: ["Education", "Prototyping"],
    label: "Prototype",
    featured: false,
  },
  {
    title: "Henry Sy Sr. MSB Guide",
    slug: "henry-sy-building-guide",
    category: "Building guide website",
    description: "A guide for the UPCM Henry Sy Sr. Medical Sciences Building, with room directory, availability, and reservation information.",
    image: "/images/hssh-guide.png",
    url: "https://hssh-msb-cms.vercel.app/",
    tags: ["Building information", "Education"],
    label: "Building guide",
    featured: false,
  },
];

export const services = [
  { icon: "globe", title: "Business Websites", text: "A polished online presence for your business, built to work beautifully on every screen." },
  { icon: "code", title: "Web Systems", text: "Custom web applications that turn everyday workflows into simpler digital experiences." },
  { icon: "chart", title: "Admin Dashboards", text: "Clear interfaces for monitoring, reporting, and managing the information that matters." },
  { icon: "school", title: "School Systems", text: "Purposeful systems for schools, offices, and academic organizations." },
  { icon: "pen", title: "UI/UX Design", text: "Thoughtful layouts and intuitive interfaces that make your product easier to use." },
  { icon: "layers", title: "System Prototyping", text: "Interactive concepts that help you explore an idea before moving into development." },
  { icon: "cpu", title: "Computer Servicing", text: "PC troubleshooting, reformatting, software installation, assembly, and disassembly." },
  { icon: "bolt", title: "Electrical & Security", text: "Hands-on electrical installation and maintenance, with CCTV and power-related technical work." },
] as const;

export const digitalSkills = ["Full-stack development", "Web design", "UI/UX design", "System design", "Admin dashboards", "School systems", "Interactive prototyping", "AI-assisted workflow"];
export const technicalSkills = ["Computer reformatting", "PC troubleshooting", "PC assembly & disassembly", "Electrical installation", "Electrical maintenance", "CCTV technical work", "Solar / power background", "Hands-on field experience"];

export const certifications = [
  { title: "Computer Systems Servicing", level: "NC II", icon: "cpu", image: null as string | null },
  { title: "Electrical Installation & Maintenance", level: "NC II", icon: "bolt", image: null as string | null },
];
