<script setup>
const {
  data: products,
  pending,
  error,
  refresh,
} = await useFetch(`https://fakestoreapi.com/products`);

function refreshHandler() {
  // refresh();
  // refreshNuxtData();
  // clearNuxtData();
}
// console.log("products:", products);
// console.log("error:", error);
// console.log("pending:", pending);
</script>
<template>
  <div>
    <h1>Product page</h1>
    <a href="" @click.prevent="refreshHandler" style="margin: 10px 10px"
      >Refresh product</a
    >
    <h3 v-if="error">Error: {{ error }}</h3>
    <h2 v-if="pending">Loadin pending............</h2>
    <table style="width: 100%" v-if="products">
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
        <tr v-for="(product, key) in products" :key="product.id">
          <th>{{ key + 1 }}</th>
          <th>
            <img
              :src="product.image"
              alt=""
              class="img-fluid"
              width="100"
              height="100"
            />
          </th>
          <th>{{ product.title }}</th>
          <th>{{ product.price }}</th>
          <th>{{ product.description }}</th>
          <td>
            <NuxtLink
              :to="{
                name: 'products-id',
                params: {
                  id: product.id,
                },
              }"
            >
              View
            </NuxtLink>
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
