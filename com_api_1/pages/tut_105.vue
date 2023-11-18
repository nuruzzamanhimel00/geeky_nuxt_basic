<template>
  <div>
    <Navbar />
    <hr />
    <h1>Title: 103 page</h1>
    <h4>My name: {{ name }}</h4>
    <h1>User details</h1>
    <h4>Name: {{ userDetails.name }}</h4>
    <h4>age: {{ userDetails.age }}</h4>
    <hr />
    <button @click.prevent="changeNameHandler">Change name</button>
  </div>
</template>

<script setup>
const name = ref("Nutuzzaman himel");
const userDetails = reactive({
  name: "Himel",
  age: 20,
});
function changeNameHandler() {
  name.value = "Change My name after 3 second HangesHangesHangesHanges";
  userDetails.name = "change name HangesHangesHangesHanges";
}
console.log(isRef(name));
console.log(isReactive(userDetails));
setTimeout(() => {
  name.value = "Change My name after 3 second";
  userDetails.name = "change name";
  userDetails.age = "change 30";
}, 3000);
</script>

<style lang="scss" scoped></style>
