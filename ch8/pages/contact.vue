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
      layout: "false",
    });
  },
};
</script>

<template>
  <div>
    <NuxtLayout name="custom">
      <template #logo>
        <h1>MyLOGO</h1>
      </template>
      <h1>this is a Contact page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam
        libero exercitationem nisi magnam modi praesentium alias! Unde, incidunt
        repellat! Fugiat sed aspernatur hic earum sint odio cum, rerum error!
      </p>
      <template #socalmedia>
        <ul>
          <li>facebook</li>
          <li>facebook 1</li>
          <li>facebook 2</li>
          <li>facebook 3</li>
        </ul>
      </template>
    </NuxtLayout>
  </div>
</template>
