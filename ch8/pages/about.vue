<!-- method 1 -->
<!-- <script>
export default {
  name: "about",
  data() {},
  setup() {
    definePageMeta({
      layout: false,
    });
  },
};
</script>
<template>
  <div>
    <NuxtLayout name="custom">
      <h1>this is a About page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam
        libero exercitationem nisi magnam modi praesentium alias! Unde, incidunt
        repellat! Fugiat sed aspernatur hic earum sint odio cum, rerum error!
      </p>
    </NuxtLayout>
  </div>
</template> -->

<!-- method 2 -->
<script>
export default {
  name: "about",
  setup() {
    definePageMeta({
      layout: "custom",
    });
  },
};
</script>

<template>
  <div>
    <h1>this is a About page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam
      libero exercitationem nisi magnam modi praesentium alias! Unde, incidunt
      repellat! Fugiat sed aspernatur hic earum sint odio cum, rerum error!
    </p>
  </div>
</template>
