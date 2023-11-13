<script setup>
const { id } = useRoute().params;
console.log(id);
const {
  data: product,
  pending,
  error,
  refresh,
} = await useAsyncData("pro", () =>
  $fetch(`https://fakestoreapi.com/products/${id}`)
);

// console.log("product:", product);
// console.log("error:", error);
// console.log("pending:", pending);
</script>
<template>
  <div>
    <h1>Single Product</h1>
    <h3 v-if="error">Error: {{ error }}</h3>
    <h2 v-if="pending">Loadin pending............</h2>
    <table style="width: 100%" v-if="product">
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
