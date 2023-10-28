<template>
  <div>
    <!--Add navbar as well-->
    <NuxtPage />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "admin-auth",
});
</script>

<style lang="scss" scoped></style>
