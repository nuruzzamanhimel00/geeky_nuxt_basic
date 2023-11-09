<template>
  <div>
    <h1>Home page</h1>
    <p>Rendom renty: {{ randomEntry() }}</p>
    <p>1) {{ myname() }} 2) {{ age() }} 3) {{ dataPass("hello word") }}</p>
    <p>Even number : {{ evenNumber(10) }}</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
