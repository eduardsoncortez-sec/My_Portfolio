export const projectTypes = ["Business website", "Web system / dashboard", "School system", "Design / prototype", "Computer / electrical services", "Not sure yet"] as const;
export type Inquiry = { service: string; name: string; email: string; organization: string; goal: string; timeline: string; budget: string };

export function validateInquiry(inquiry: Inquiry) {
  const errors: Partial<Record<keyof Inquiry, string>> = {};
  if (!(projectTypes as readonly string[]).includes(inquiry.service)) errors.service = "Choose a service to continue.";
  if (!inquiry.name.trim()) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email.trim())) errors.email = "Enter a valid email address.";
  if (inquiry.goal.trim().length < 20) errors.goal = "Tell me a little more about your idea (at least 20 characters).";
  return errors;
}

export function buildInquiry(inquiry: Inquiry, recipient: string) {
  const subject = `Project inquiry: ${inquiry.service}`;
  const body = ["Hello Eduardson,", "", "I’d like to discuss a project.", "", `Service: ${inquiry.service}`, `Name: ${inquiry.name.trim()}`, `Email: ${inquiry.email.trim()}`, `Organization: ${inquiry.organization.trim() || "Not specified"}`, `Timeline: ${inquiry.timeline || "Flexible / let's discuss"}`, `Budget: ${inquiry.budget || "Let's discuss"}`, "", "What I have in mind:", inquiry.goal.trim(), "", "Thank you!"].join("\n");
  return { subject, body, mailto: `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` };
}
