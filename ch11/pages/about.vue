<template>
  <div>
    <h1 class="text-danger">About page</h1>
    <h1 class="text-blue">About page</h1>
  </div>
</template>

<script>
export default {
  name: "about",
  setup() {
    useHead({
      link: [{ rel: "stylesheet", href: "css/about.css" }],
      script: [{ src: "js/about.js", body: true }],
    });
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
