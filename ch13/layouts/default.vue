<template>
  <div>
    <h2>Default layout: section. Nav section.</h2>
    <Navbar />
    <slot name="logo"></slot>
    <div>
      <slot></slot>
    </div>
    <slot name="socalmedia"></slot>
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
