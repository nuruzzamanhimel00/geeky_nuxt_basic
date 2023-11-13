<script setup>
import { faker } from "@faker-js/faker";

// const { id } = useRoute().params;
// console.log(id);
const newProduct = ref();
const newPending = ref();
const newError = ref();
const newRefresh = ref();
async function addProductHandler() {
  const formData = {
    title: faker.person.fullName(),
    price: 13.5,
    description: faker.company.catchPhraseDescriptor(),
    image: "https://i.pravatar.cc",
    category: "electronic",
  };
  const options = {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { data, pending, error, refresh } = await useAsyncData("prod", () =>
    $fetch(`https://fakestoreapi.com/products`, options)
  );

  newPending.value = pending.value;
  newProduct.value = data.value;
  newError.value = error.value;
}
</script>
<template>
  <div>
    <a href="" @click.prevent="addProductHandler">Add Product</a>
    <h1>Single Product</h1>
    <h3 v-if="newError">Error: {{ newError }}</h3>
    <h2 v-if="newPending">Loadin pending............</h2>
    <table style="width: 100%" v-if="newProduct">
      <thead>
        <tr>
          <th>No</th>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Descrption</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{{ 1 }}</th>
          <th>
            <img
              :src="newProduct.image"
              alt=""
              class="img-fluid"
              width="100"
              height="100"
            />
          </th>
          <th>{{ newProduct.title }}</th>
          <th>{{ newProduct.price }}</th>
          <th>{{ newProduct.description }}</th>
          <td>
            <NuxtLink to="/products">Back</NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
