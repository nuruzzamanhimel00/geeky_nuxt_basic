<!-- with variable -->
<script setup>
const months = ["January", "February", "March", "April", "May", "June", "July"];
const blogCat = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Jquery",
  "Vue",
  "Laravel",
];
const random = Math.floor(Math.random() * months.length);
const randomBlogCat = Math.floor(Math.random() * blogCat.length);
// console.log(random, months[random]);
const user = ref(months[random]);
const postId = ref(10);
const blogCatName = ref(blogCat[randomBlogCat]);
const folderDynamic = ref("admin");
</script>

<template>
  <div>
    <ul class="nav">
      <li class="nav-item">
        <NuxtLink :to="{ name: 'index' }" class="nav-link">Home</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink
          :to="{ name: 'blog' }"
          class="nav-link"
          exactActiveClass="himel-link-active"
          >Blog</NuxtLink
        >
      </li>
      <li class="nav-item">
        <NuxtLink :to="{ name: 'about' }" class="nav-link">about</NuxtLink>
      </li>

      <li class="nav-item">
        <NuxtLink to="http://10.253.253.244/" target="_blank" class="nav-link"
          >Google</NuxtLink
        >
      </li>

      <li class="nav-item">
        <NuxtLink
          :to="{ name: 'user', params: { user: user } }"
          class="nav-link"
          >User</NuxtLink
        >
      </li>
      <li class="nav-item">
        <NuxtLink
          :to="{ name: 'post-id', params: { id: postId } }"
          class="nav-link"
          >Post ID</NuxtLink
        >
      </li>
      <li class="nav-item">
        <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink :to="`/blog/post-${blogCatName}`" class="nav-link"
          >Blog Post Category</NuxtLink
        >
      </li>
      <li class="nav-item">
        <NuxtLink :to="`/user-${folderDynamic}`" class="nav-link"
          >User Type</NuxtLink
        >
      </li>
      <li class="nav-item">
        <NuxtLink :to="`/user-${folderDynamic}/${postId}`" class="nav-link"
          >User Type ID</NuxtLink
        >
      </li>
    </ul>
    <hr />
  </div>
</template>

<style scoped>
.router-link-active,
.my-new-active-link {
  background: red;
  color: #fff;
  font-weight: bold;
}
</style>
