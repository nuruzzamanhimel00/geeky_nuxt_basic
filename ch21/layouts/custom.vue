<template>
  <div>
    <slot name="header"></slot>
    <Navbar />
    <slot name="content"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>