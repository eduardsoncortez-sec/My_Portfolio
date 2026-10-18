"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/content/portfolio";

export function CopyEmail() {
  const [status, setStatus] = useState("");
  async function copy() {
    setStatus("Copying…");
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      await Promise.race([
        navigator.clipboard.writeText(profile.email),
        new Promise<never>((_, reject) => { timer = setTimeout(() => reject(new Error("Clipboard unavailable")), 2000); }),
      ]);
      setStatus("Email copied");
    } catch { setStatus("Please select and copy the email address above."); }
    finally { clearTimeout(timer); }
  }
  return <div className="copy-control"><button onClick={copy} className="copy-button" aria-label="Copy email address">{status === "Email copied" ? <Check size={15} /> : <Copy size={15} />}Copy email</button><span role="status" className="copy-status">{status}</span></div>;
}
