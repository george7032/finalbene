// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/academics" },
      { path: "/academics/junior" },
      { path: "/academics/kindergarten" },
      { path: "/academics/primary" },
      { path: "/academics/senior" },
      { path: "/admissions" },
      { path: "/boarding" },
      { path: "/child-safeguarding" },
      { path: "/contact" },
      { path: "/facilities" },
      { path: "/gallery" },
      { path: "/news" },
      { path: "/parent-information" },
      { path: "/park" },
      { path: "/privacy" },
      { path: "/programs" },
      { path: "/school-life" },
      { path: "/terms" },
    ],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
