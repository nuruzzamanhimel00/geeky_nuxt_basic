<template>
  <div>
    <Navbar />
    <hr />
    <h1>Title: 109 page</h1>
    <h4>My name: {{ name }}</h4>
    <h1>User details</h1>
    <h4>Name: {{ userDetails.name }}</h4>
    <h4>age: {{ userDetails.age }}</h4>
    <hr />
    <button @click.prevent="changeNameHandler">Change name</button>
    <hr />
    <h1>FUllname:</h1>
    <div>
      <h2>Full name: {{ fullName }}</h2>
      <input type="text" @input="changeFirstName" placeholder="First name" />
      &nbsp;
      <input type="text" @input="changeLastName" placeholder="Last name" />
      &nbsp;
    </div>
    <UserDetails :user-details="userDetails" />
  </div>
</template>

<script setup>
const name = ref("Nutuzzaman himel");
const userDetails = reactive({
  name: "Himel",
  age: 20,
});

const firstName = ref("");
const lastName = ref("");
function changeNameHandler() {
  name.value = "Change My name after 3 second HangesHangesHangesHanges";
  userDetails.name = "change name HangesHangesHangesHanges";
}
function changeFirstName(event) {
  firstName.value = event.target.value;
}
function changeLastName(event) {
  lastName.value = event.target.value;
}

const fullName = computed(() => {
  return firstName.value + " " + lastName.value;
});

console.log(isRef(name));
console.log(isReactive(userDetails));
setTimeout(() => {
  name.value = "Change My name after 3 second";
  userDetails.name = "change name";
  userDetails.age = "change 30";
}, 3000);
</script>

<style lang="scss" scoped></style>
