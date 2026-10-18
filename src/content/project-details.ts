export type ProjectDetail = {
  purpose: string;
  audience: string;
  role: string;
  status: string;
  features: { title: string; description: string }[];
  approach: string;
  screenshotCaption: string;
  note?: string;
};

// Content is grounded in the owner's brief, supplied screenshots, and linked project pages.
// Do not add unverified technology stacks, outcome metrics, or client endorsements.
export const projectDetails: Record<string, ProjectDetail> = {
  "siglatech-solutions": {
    purpose: "Give businesses, schools, and organizations a clear introduction to my web and technology studio, the work it offers, and how to begin a project conversation.",
    audience: "Businesses, schools & organizations",
    role: "Founder · Website development",
    status: "Studio website",
    features: [
      { title: "Service overview", description: "An introduction to websites and custom web applications, organized around what a potential client needs." },
      { title: "Work showcase", description: "Project previews that let visitors explore examples before starting a conversation." },
      { title: "Process & pricing", description: "An outline of the working process and starting points for discussing project scope." },
      { title: "Project inquiries", description: "A direct path from exploring services to explaining a project idea." },
    ],
    approach: "AI-assisted web development, presented through a clear service hierarchy and a project-focused layout. The site brings my founder role and development work into one studio presence.",
    screenshotCaption: "SiglaTech Solutions homepage — service introduction and featured work.",
  },
  "datashield-ph": {
    purpose: "Explore how a school privacy office can organize data privacy records, requests, assessments, and incidents in one web-based workspace.",
    audience: "GK College privacy office · Demonstration",
    role: "Web development · System design",
    status: "Interactive demonstration",
    features: [
      { title: "Privacy dashboard", description: "An overview of processing records, consents, requests, and incidents using demonstration data." },
      { title: "Records & consent", description: "Modules for records of processing activities, consent management, and data subject requests." },
      { title: "Incidents & assessments", description: "Demonstration workflows for security incidents, breach handling, and privacy impact assessments." },
      { title: "Reporting & administration", description: "Reports, audit logs, and user-management screens for exploring the proposed workspace." },
    ],
    approach: "AI-assisted full-stack development and system design. The project organizes privacy activities into focused modules, with a demonstration account so visitors can explore the interface using fictional information.",
    screenshotCaption: "DataShield PH login — an entry point to the demonstration workspace.",
    note: "This is a demonstration with fictional data and simulated access. It is not evidence of regulatory compliance or a production deployment.",
  },
  eventify: {
    purpose: "Help visitors explore event services and communicate what they need for an event through a coordinated online experience.",
    audience: "People planning events",
    role: "Website development · Interface design",
    status: "Event services website",
    features: [
      { title: "Service discovery", description: "An introduction to event sourcing and coordination, including the independent suppliers involved." },
      { title: "Visual service showcase", description: "Image-led presentation of services such as catering, helping visitors understand the offering." },
      { title: "Work & packages", description: "Dedicated navigation for exploring work, reviews, and available packages." },
      { title: "Event planning entry point", description: "A prominent Plan your event action that starts the visitor’s inquiry journey." },
    ],
    approach: "AI-assisted web development with an image-led interface. The presentation connects the event offering with clear navigation and a prominent inquiry entry point.",
    screenshotCaption: "Eventify homepage — event services and the catering supplier showcase.",
  },
  "upcm-repository": {
    purpose: "Present a document repository concept for the UP College of Medicine, giving faculty and staff a way to explore a proposed shared knowledge space.",
    audience: "Faculty & staff · Prototype",
    role: "System prototyping · Interface development",
    status: "Interactive prototype",
    features: [
      { title: "Repository entry screen", description: "An institutional landing and sign-in interface for the proposed knowledge space." },
      { title: "Role-based demo entry", description: "Faculty, staff, and admin demonstration entry points are shown on the sign-in screen." },
      { title: "Document workspace concept", description: "A proposed place for documents and shared resources in an academic setting." },
      { title: "Clear prototype labeling", description: "Simulated access and sample accounts distinguish the prototype from a live institutional service." },
    ],
    approach: "AI-assisted prototyping and system design, focused on presenting a proposed repository experience. Demo entry points help communicate the different roles without claiming live institutional authentication.",
    screenshotCaption: "UPCM Repository prototype — welcome screen and role-based demo entry points.",
    note: "This is an interactive prototype using sample accounts and simulated access.",
  },
  "henry-sy-building-guide": {
    purpose: "Bring room information, availability, reservation guidance, and building resources into an accessible guide for the UPCM Henry Sy Sr. Medical Sciences Building.",
    audience: "Building visitors & academic community",
    role: "Website development · Information design",
    status: "Building guide website",
    features: [
      { title: "Room directory", description: "Floor-by-floor information with room details, capacity, and available images." },
      { title: "Availability & reservations", description: "Entry points to room availability and the requirements for reserving a venue." },
      { title: "Building essentials", description: "House rules, safety information, Wi-Fi access, and wayfinding resources." },
      { title: "Mobile access", description: "A mobile scanning entry point and task-based navigation for visitors on the go." },
    ],
    approach: "AI-assisted web development organized around visitor tasks: find a room, check availability, understand reservation requirements, and locate essential building information.",
    screenshotCaption: "Henry Sy Sr. Medical Sciences Building guide — homepage and room discovery actions.",
  },
};
