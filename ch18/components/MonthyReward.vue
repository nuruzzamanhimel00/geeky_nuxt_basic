<template>
  <div>
    <h1>Monthly Reward</h1>
    <p>{{ reward }}</p>
    <button @click="rewardIncrement">Reward</button>
  </div>
</template>

<script setup>
const reward = useReward();
function rewardIncrement() {
  reward.value++;
}
</script>

<style lang="scss" scoped></style>
