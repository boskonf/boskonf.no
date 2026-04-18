import type { APIRoute } from "astro";

const modules = import.meta.glob("/src/pages/**/*.{astro,md,mdx}", { eager: true });

const isDev = import.meta.env.DEV;
const baseUrl = isDev ? "http://localhost:4321" : "https://boskonf.no";

const urls = Object.keys(modules).map((path) => {
  const relativePath = path.replace("/src/pages/", "").replace(/\.[^.]+$/, "");
  
  if (relativePath === "index") return "";
  
  const langMatch = relativePath.match(/^en\//);
  if (langMatch) {
    return relativePath.replace("en/", "en/");
  }
  
  return relativePath;
}).filter(Boolean).map((path) => `  <url>
    <loc>${baseUrl}/${path}</loc>
  </url>`).join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
  </url>
${urls}
</urlset>`;

export const GET: APIRoute = () => {
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};