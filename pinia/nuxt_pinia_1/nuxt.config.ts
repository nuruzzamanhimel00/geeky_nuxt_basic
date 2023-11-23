// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
   modules: [

    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        {
          src: "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
          body: true,
        },
        {
          src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
          body: true,
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js",
          body: true,
        },
        { src: "https://awesome-lib.js", body: true },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: "stylesheet", href: "https://awesome-lib.css" },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css",
        },
      ],
      // // please note that this is an area that is likely to change
      // style: [
      //   // <style type="text/css">:root { color: red }</style>
      //   { children: ":root { color: red }", type: "text/css" },
      // ],
      // noscript: [
      //   // <noscript>JavaScript is required</noscript>
      //   { children: "JavaScript is required" },
      // ],
    },
  },
})
