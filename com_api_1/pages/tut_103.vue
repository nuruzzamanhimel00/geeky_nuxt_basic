<template>
  <div>
    <Navbar />
    <hr />
    <h1>Title: 103 page</h1>
    <h4>My name: {{ name }}</h4>
    <h1>User details</h1>
    <h4>Name: {{ userDetails.name }}</h4>
    <h4>Name: {{ userDetails.age }}</h4>
  </div>
</template>

<script setup>
const name = ref("Nutuzzaman himel");
const userDetails = reactive({
  name: "Himel",
  age: 20,
});

setTimeout(() => {
  name.value = "Change My name after 3 second";
  userDetails.name = "change name";
  userDetails.age = "change 30";
}, 3000);
</script>

<style lang="scss" scoped></style>
