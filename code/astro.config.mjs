// @ts-check
import { defineConfig } from "astro/config";

const repositoryName = "/Test-static-ecommerce";
const url = `https://ferdevs-uy.github.io${repositoryName}/`
  
const pageData = {
  site: url,
  base: repositoryName,
  pageTitle: "Static Ecommerce title",
};

export { pageData as config };

// https://astro.build/config
export default defineConfig({
  site: url,
  base: repositoryName,
});
