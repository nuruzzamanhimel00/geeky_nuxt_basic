<template>
  <div>
    <div>
      <hr />
      <h1>User Detaisl component---------------</h1>
      <h4>Name: {{ user.name }}</h4>
      <h4>age: {{ user.age }}</h4>
      <button @click="changeDetials">Change detials</button>
    </div>
    <hr />
    <div>
      <input type="text" ref="ageOf" />
      <button @click.prevent="changeAgeHandler">Change age Template Ref</button>
    </div>
    <br />
    <button @click.prevent="onChangeFNHandler">
      Change First name Custom event
    </button>
  </div>
</template>

<script>
export default {
  name: "UserDetails",
  props: ["userDetails"],
  setup(props, context) {
    const user = reactive(props.userDetails);
    const ageOf = ref(null);
    function changeDetials() {
      user.name = "change name XXXX";
      user.age = "change age 20";
    }

    function changeAgeHandler() {
      user.age = ageOf.value.value;
      console.log(ageOf.value.value);
    }

    function onChangeFNHandler() {
      context.emit("first-name-change", "first name modified...");
    }

    return {
      user,
      changeDetials,
      changeAgeHandler,
      ageOf,
      onChangeFNHandler,
    };
  },
};
</script>
<!-- <script setup></script> -->

<style lang="scss" scoped></style>
