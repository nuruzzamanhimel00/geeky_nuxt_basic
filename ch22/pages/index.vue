<template>
  <div>
    <h1>Home page</h1>
    <h3>Event Number: {{ even(30).join(", ") }}</h3>
    <h3>Odd Number: {{ $odd(30).join(", ") }}</h3>
  </div>
</template>

<script setup>
let { even } = useNuxtApp();
</script>

<style lang="scss" scoped></style>
