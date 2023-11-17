<!-- Anonymus Middlewate-->
<template>
  <div>
    <h1>Home page</h1>
  </div>
</template>
<!-- Anonymus Middlewate-->
<script setup>
//Anoniymus middleware
definePageMeta({
  middleware: function (to, from) {
    console.log("Anoniymus middleware");
    console.log(to, from);
    // Custom inline middleware
  },
});
</script>

<style lang="scss" scoped></style>
