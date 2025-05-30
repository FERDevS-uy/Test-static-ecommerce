// @ts-check
import { defineConfig } from "astro/config";

const repositoryName = "/Test-static-ecommerce";
const pageData = {
  site: `https://ferdevs-uy.github.io${repositoryName}/`,
  base: repositoryName,
  pageTitle: "Static Ecommerce title",
};

export { pageData as config };

// https://astro.build/config
export default defineConfig({
  site: pageData.site,
  base: pageData.base,
});
