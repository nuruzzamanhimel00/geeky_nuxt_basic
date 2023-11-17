<template>
  <div>
    <h1>Yearly Reward</h1>
    <p>{{ reward * 12 }}</p>
  </div>
</template>

<script setup>
const reward = useReward();
</script>

<style lang="scss" scoped></style>
