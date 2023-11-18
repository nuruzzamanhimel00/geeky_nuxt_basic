// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true, // VS Code Server options
    vscode: {},
  },
  modules: ["@nuxt/devtools"],
});
