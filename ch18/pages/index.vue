<template>
  <div>
    <h1>Home page</h1>
    <h2>Count: {{ count }}</h2>
    <button @click.prevent="incrementHandler">Increment</button>
    <hr />
    <h1>Monthly Rewards:-</h1>
    <MonthyReward />
    <hr />
    <h1>Yearly Rewards:-</h1>
    <YearlyReward />
  </div>
</template>

<script setup>
const count = useState("count", () => 0);
function incrementHandler() {
  count.value++;
  console.log(count);
}
</script>

<style lang="scss" scoped></style>
