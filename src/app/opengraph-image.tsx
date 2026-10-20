import { ImageResponse } from "next/og";

export const alt = "Eduardson Cortez — Full-stack web developer, system designer, cybersecurity enthusiast, and founder of SiglaTech Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "#071521", padding: "70px 85px", color: "#f3f1ec", borderBottom: "8px solid #e8bd70" }}><div style={{ display: "flex", color: "#e8bd70", fontSize: 18, letterSpacing: 5, marginBottom: 30 }}>PERSONAL PORTFOLIO</div><div style={{ display: "flex", fontSize: 86, lineHeight: 1.1 }}>Eduardson Cortez</div><div style={{ display: "flex", fontSize: 36, color: "#e8bd70", marginTop: 22 }}>Web development. Systems. IT.</div><div style={{ display: "flex", fontSize: 21, color: "#b9c7d3", marginTop: 48 }}>Web Developer · System Designer · Founder of SiglaTech Solutions</div></div>, size);
}
