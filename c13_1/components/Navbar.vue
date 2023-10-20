<template>
  <div>
    <ul class="nav">
      <li class="nav-item">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink
          to="/about"
          class="nav-link"
          exactActiveClass="himel-link-active"
          >About</NuxtLink
        >
      </li>
      <li class="nav-item">
        <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
      </li>
      <li class="nav-item">
        <MyNuxtLink to="/contact" class="nav-link">Custom Contact</MyNuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink to="http://10.253.253.244/" target="_blank" class="nav-link"
          >Google</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-active,
.my-new-active-link {
  background: red;
  color: #fff;
  font-weight: bold;
}
</style>
