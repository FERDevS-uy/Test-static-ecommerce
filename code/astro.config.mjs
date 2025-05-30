// @ts-check
import { defineConfig } from "astro/config";

const repositoryName = "/Test-static-ecommerce";
const url = `https://ferdevs-uy.github.io${repositoryName}/`;

// https://astro.build/config
export default defineConfig({
  site: url,
  base: repositoryName,
});
