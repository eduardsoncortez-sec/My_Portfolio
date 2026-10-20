"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Copy, Mail } from "lucide-react";
import { profile } from "@/content/portfolio";
import { buildInquiry, projectTypes, validateInquiry, type Inquiry } from "@/lib/inquiry";

const initial: Inquiry = { service: "", name: "", email: "", organization: "", goal: "", timeline: "", budget: "" };

export function InquiryForm() {
  const [step, setStep] = useState(1);
  const [inquiry, setInquiry] = useState<Inquiry>(initial);
  const [errors, setErrors] = useState<ReturnType<typeof validateInquiry>>({});
  const [copyStatus, setCopyStatus] = useState("");
  const [emailOpened, setEmailOpened] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  useEffect(() => { if (firstRender.current) { firstRender.current = false; return; } heading.current?.focus(); }, [step]);
  function update(field: keyof Inquiry, value: string) { setInquiry(current => ({ ...current, [field]: value })); setErrors(current => ({ ...current, [field]: undefined })); setCopyStatus(""); setEmailOpened(false); }
  function review(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validateInquiry(inquiry);
    setErrors(found);
    if (Object.keys(found).length) { document.getElementById(`inquiry-${Object.keys(found)[0]}`)?.focus(); return; }
    setStep(3);
  }
  const draft = buildInquiry(inquiry, profile.email);
  async function copyDraft() {
    setCopyStatus("Copying…");
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      await Promise.race([navigator.clipboard.writeText(`To: ${profile.email}\nSubject: ${draft.subject}\n\n${draft.body}`), new Promise<never>((_, reject) => { timer = setTimeout(() => reject(new Error("Clipboard unavailable")), 2000); })]);
      setCopyStatus("Inquiry copied. Paste it into an email when you’re ready.");
    } catch { setCopyStatus("Copy is unavailable. Select and copy the message shown above."); }
    finally { clearTimeout(timer); }
  }
  return <div className="inquiry-flow" data-step={step}>
    <div className="inquiry-progress-track" aria-hidden="true"><span style={{ transform: `scaleX(${step / 3})` }} /></div>
    <ol className="inquiry-steps" aria-label="Inquiry progress">{["Choose a service", "Your project", "Review & email"].map((label, index) => <li key={label} aria-current={step === index + 1 ? "step" : undefined} className={step >= index + 1 ? "current" : ""}><span>{step > index + 1 ? <Check size={15} /> : index + 1}</span>{label}</li>)}</ol>
    {step === 1 && <section key="service" className="inquiry-panel"><h2 ref={heading} tabIndex={-1}>What can I help you build?</h2><p>Choose the closest match. We can work out the details together.</p><fieldset className="service-options"><legend className="sr-only">Project type</legend>{projectTypes.map((type, index) => <label key={type}><input type="radio" name="service" value={type} checked={inquiry.service === type} onChange={() => update("service", type)} /><span className="service-option"><span className="option-number">0{index + 1}</span><strong>{type}</strong><span className="radio-mark" /></span></label>)}</fieldset><div className="inquiry-actions"><span>About 2 minutes. No obligation.</span><button className="button button-gold" disabled={!inquiry.service} onClick={() => setStep(2)}>Continue<ArrowRight size={16} /></button></div></section>}
    {step === 2 && <form className="inquiry-panel" onSubmit={review} noValidate><h2 ref={heading} tabIndex={-1}>Tell me about your idea.</h2><p><strong>{inquiry.service}</strong> · A few details to start a useful conversation.</p><div className="inquiry-fields">
      <div className="form-field"><label htmlFor="inquiry-name">Your name <span>(required)</span></label><input id="inquiry-name" autoComplete="name" value={inquiry.name} onChange={event => update("name", event.target.value)} required maxLength={80} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <p className="field-error" id="name-error">{errors.name}</p>}</div>
      <div className="form-field"><label htmlFor="inquiry-email">Email address <span>(required)</span></label><input id="inquiry-email" type="email" autoComplete="email" value={inquiry.email} onChange={event => update("email", event.target.value)} required maxLength={120} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <p className="field-error" id="email-error">{errors.email}</p>}</div>
      <div className="form-field full-width"><label htmlFor="inquiry-organization">Business or organization <span>(optional)</span></label><input id="inquiry-organization" autoComplete="organization" value={inquiry.organization} onChange={event => update("organization", event.target.value)} maxLength={100} /></div>
      <div className="form-field full-width"><label htmlFor="inquiry-goal">What should this project help you do? <span>(required)</span></label><textarea id="inquiry-goal" rows={5} value={inquiry.goal} onChange={event => update("goal", event.target.value)} placeholder="Who is it for? What do you need it to do? Are there any features you already have in mind?" required minLength={20} maxLength={700} aria-invalid={Boolean(errors.goal)} aria-describedby={errors.goal ? "goal-error goal-hint" : "goal-hint"} /><div className="field-hint" id="goal-hint">A short, non-confidential overview is enough. <span>{inquiry.goal.length}/700</span></div>{errors.goal && <p className="field-error" id="goal-error">{errors.goal}</p>}</div>
      <div className="form-field"><label htmlFor="inquiry-timeline">Ideal timeline <span>(optional)</span></label><select id="inquiry-timeline" value={inquiry.timeline} onChange={event => update("timeline", event.target.value)}><option value="">Flexible / let’s discuss</option><option>Within a month</option><option>1–3 months</option><option>3+ months</option></select></div>
      <div className="form-field"><label htmlFor="inquiry-budget">Budget range <span>(optional)</span></label><select id="inquiry-budget" value={inquiry.budget} onChange={event => update("budget", event.target.value)}><option value="">Let’s discuss</option><option>Under ₱10,000</option><option>₱10,000–₱30,000</option><option>₱30,000–₱60,000</option><option>₱60,000+</option></select></div>
    </div><p className="form-note">This prepares an email draft. Nothing is submitted or saved by this website.</p><div className="inquiry-actions"><button type="button" className="text-button" onClick={() => setStep(1)}><ArrowLeft size={15} />Change service</button><button className="button button-gold" type="submit">Review inquiry<ArrowRight size={16} /></button></div></form>}
    {step === 3 && <section className="inquiry-panel"><h2 ref={heading} tabIndex={-1}>Your idea, ready to share.</h2><p>Review your message, then open it in your email app or copy it.</p><div className="inquiry-preview"><p><span>TO</span>{profile.email}</p><p><span>SUBJECT</span>{draft.subject}</p><pre tabIndex={0} aria-label="Your inquiry message">{draft.body}</pre></div><div className="review-actions"><a className="button button-gold" href={draft.mailto} onClick={() => setEmailOpened(true)}><Mail size={17} />Open email draft</a><button className="button button-outline" onClick={copyDraft}><Copy size={16} />Copy inquiry</button><button className="text-button" onClick={() => setStep(2)}><ArrowLeft size={15} />Edit details</button></div><p className="form-note">You’ll send the message from your own email app. No email app? Copy the inquiry and email it to {profile.email}.</p><p role="status" className="inquiry-status">{copyStatus || (emailOpened ? "Email draft requested. Finish sending in your email app; this website has not sent your inquiry." : "")}</p></section>}
  </div>;
}
