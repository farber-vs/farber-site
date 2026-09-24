import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://farber-vs.github.io",
  base: "/farber-site",
  trailingSlash: "always",
  output: "static",
  integrations: [mdx()],
});
