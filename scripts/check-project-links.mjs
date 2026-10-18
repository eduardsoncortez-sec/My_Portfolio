import { projects } from "../src/content/portfolio.ts";

const results = await Promise.all(projects.map(async project => {
  try {
    const response = await fetch(project.url, { signal: AbortSignal.timeout(20000), redirect: "follow" });
    const html = await response.text();
    return { project: project.title, url: project.url, status: response.status, finalUrl: response.url, title: html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "Client-rendered page" };
  } catch (error) { return { project: project.title, url: project.url, error: error.message }; }
}));
console.log(JSON.stringify(results, null, 2));
if (results.some(result => result.error || result.status >= 400)) process.exitCode = 1;
