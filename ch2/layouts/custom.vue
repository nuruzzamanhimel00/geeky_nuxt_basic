<template>
  <div>
    <h2>custom layout: section. Nav section.</h2>
    <div>
      <slot></slot>
    </div>
    <footer>custom layout: section. foter section.</footer>
  </div>
</template>

<script>
export default {
  name: "custom",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
