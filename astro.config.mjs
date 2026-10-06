import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// A user-site is served from the domain root. Change only `base` when moving to a project site.
export default defineConfig({
  site: "https://AhmedHamdi101.github.io",
  base: "/",
  output: "static",
  integrations: [sitemap()],
});
