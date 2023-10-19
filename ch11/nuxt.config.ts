// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      //globally declear css
      link: [
        { rel: "stylesheet", href: "css/style.css" },
        { rel: "stylesheet", href: "_nuxt/assets/css/test.css" },
      ],
      script: [
        { src: "js/script.js", body: true },
        { src: "_nuxt/assets/js/myscript.js", body: true },
      ],
    },
  },
  // css: [
  //   // CSS file in the project
  //   "~/assets/css/test.css",
  // ],
});
