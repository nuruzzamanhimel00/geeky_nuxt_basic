<template>
  <div>
    <h1>This is home page</h1>
    <h3>User: {{ user }}</h3>
    <h3>studnet: {{ studnet }}</h3>
    <h3>cart: {{ cart }}</h3>
    <h3>man: {{ man }}</h3>
  </div>
</template>

<script setup>
let user = useUser();
let studnet = useStudent();
let cart = useCart();
let man = useMan();
</script>

<style lang="scss" scoped></style>
