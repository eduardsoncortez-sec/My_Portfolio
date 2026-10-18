import { gzipSync } from "node:zlib";
import { projects } from "../src/content/portfolio.ts";

const origin = process.argv[2] || "http://127.0.0.1:3108";
const routes = ["/", "/start-a-project", ...projects.map(project => `/projects/${project.slug}`)];
const rows = [];
for (const route of routes) {
  const start = performance.now();
  const response = await fetch(new URL(route, origin));
  const html = await response.text();
  const htmlMs = Math.round(performance.now() - start);
  const scripts = [...new Set([...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(match => match[1]))];
  const scriptBytes = await Promise.all(scripts.map(async src => gzipSync(Buffer.from(await (await fetch(new URL(src, origin))).arrayBuffer())).byteLength));
  const result = { route, status: response.status, htmlMs, h1Count: [...html.matchAll(/<h1[\s>]/g)].length, title: html.match(/<title>(.*?)<\/title>/)?.[1], hasDescription: /<meta name="description" content="[^"]+"/.test(html), hasShareImage: html.includes('property="og:image"'), htmlGzipKB: +(gzipSync(html).byteLength / 1024).toFixed(1), initialJSGzipKB: +(scriptBytes.reduce((a, b) => a + b, 0) / 1024).toFixed(1) };
  rows.push(result);
  if (result.status !== 200 || result.h1Count !== 1 || !result.hasDescription || !result.hasShareImage) process.exitCode = 1;
}
const notFound = await fetch(new URL("/projects/unknown-project", origin));
if (notFound.status !== 404) process.exitCode = 1;
console.log(JSON.stringify({ pages: rows, unknownProjectStatus: notFound.status, robots: await (await fetch(new URL("/robots.txt", origin))).text(), sitemap: await (await fetch(new URL("/sitemap.xml", origin))).text(), note: "Local production HTTP check; gzip sizes are calculated estimates, not Lighthouse or field Core Web Vitals." }, null, 2));
