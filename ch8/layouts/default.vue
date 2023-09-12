<template>
  <div>
    <h2>Default layout: section. Nav section.</h2>
    <div>
      <slot></slot>
    </div>
    <footer>Default layout: section. foter section.</footer>
  </div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
