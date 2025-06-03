import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
