<template>
  <div>
    <h1>Home pages</h1>
    <Navbar />
    <hr />
    <AdminCardProduct />
    <hr />
    <AdminCardLaptop />
    <hr />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
      architecto deserunt ut odit facere provident itaque eligendi illum nisi
      amet? Impedit cum iure corrupti alias earum voluptatum soluta quo cumque.
    </p>
    <hr />
    <button @click="show = !show">Show & hide Nokia</button>
    <LazyNokia v-if="show" />
  </div>
</template>

<script>
export default {
  setup() {
    var show = ref(false);
    return {
      show,
    };
  },
};
</script>

<style lang="scss" scoped></style>
