<template>
  <div>
    <Navbar />
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
