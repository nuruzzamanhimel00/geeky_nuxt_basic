<template>
  <div>
    <Navbar />
    <hr />
    <h1>Title: 102 page</h1>
    <h4>My name: {{ name }}</h4>
  </div>
</template>

<script setup>
const name = ref("Nutuzzaman himel");

setTimeout(() => {
  name.value = "Change My name after 3 second";
}, 3000);
</script>

<style lang="scss" scoped></style>
