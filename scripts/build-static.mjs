/**
 * Static export build: runs the normal Vite/TanStack build, then flattens the
 * prerendered static site from dist/client into a clean dist/ folder that can
 * be uploaded as-is to any standard web host (cPanel/Apache, Netlify, etc).
 *
 * Result: dist/ contains only index.html, per-page folders, assets/, images/,
 * documents/, favicon.ico, robots.txt, .htaccess and sitemap.xml.
 */
import { spawnSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const client = join(dist, "client");

// 1. Clean previous output
rmSync(dist, { recursive: true, force: true });

// 2. Run the platform build (produces dist/client with every page prerendered)
const build = spawnSync("bun", ["x", "vite", "build"], {
  cwd: root,
  stdio: "inherit",
  env: process.env,
});
if (build.status !== 0 && !existsSync(join(client, "index.html"))) {
  process.exit(build.status ?? 1);
}

if (!existsSync(join(client, "index.html"))) {
  console.error("build-static: dist/client/index.html not found — build failed");
  process.exit(1);
}

// 3. Promote dist/client/* to dist/ and drop server leftovers
const staging = join(root, ".dist-static-tmp");
rmSync(staging, { recursive: true, force: true });
mkdirSync(staging, { recursive: true });
cpSync(client, staging, { recursive: true });
rmSync(dist, { recursive: true, force: true });
cpSync(staging, dist, { recursive: true });
rmSync(staging, { recursive: true, force: true });

// 4. .htaccess — serve prerendered pages, fall back to index.html
writeFileSync(
  join(dist, ".htaccess"),
  `# Embakasi Benedicta Academy — static hosting
Options -Indexes
DirectoryIndex index.html

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  # Serve the prerendered page folder if it exists (e.g. /about -> /about/index.html)
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteCond %{REQUEST_FILENAME}/index.html -f
  RewriteRule ^(.*)$ $1/index.html [L]
  # Serve real files (assets, images, pdfs) directly
  RewriteCond %{REQUEST_FILENAME} -f
  RewriteRule ^ - [L]
  # Everything else falls back to the app shell
  RewriteRule ^ index.html [L]
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\\.(js|css|png|jpe?g|webp|svg|ico|woff2?)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.(html|xml)$">
    Header set Cache-Control "public, max-age=0, must-revalidate"
  </FilesMatch>
</IfModule>
`,
);

// 5. sitemap.xml from the prerendered page folders
const SITE_URL = (process.env.VITE_SITE_URL ?? "https://bloom-forge-verse.lovable.app").replace(
  /\/$/,
  "",
);
const skip = new Set(["assets", "images", "documents"]);
const pages = readdirSync(dist, { withFileTypes: true })
  .filter(
    (e) =>
      e.isDirectory() &&
      !skip.has(e.name) &&
      !e.name.startsWith(".") &&
      existsSync(join(dist, e.name, "index.html")),
  )
  .map((e) => `/${e.name}`)
  .sort();
const urls = ["/", ...pages]
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p === "/" ? "/" : p + "/"}</loc>
    <changefreq>${p === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${p === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
  )
  .join("\n");
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
);

console.log(
  `\nStatic site ready in dist/ — ${pages.length + 1} pages, sitemap.xml and .htaccess included.`,
);
