<template>
  <div>
    <ul class="nav">
      <li class="nav-item">
        <NuxtLink :to="{ name: 'index' }" class="nav-link">Home</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink
          :to="{ name: 'about' }"
          class="nav-link"
          exactActiveClass="himel-link-active"
          >About</NuxtLink
        >
      </li>
      <li class="nav-item">
        <NuxtLink :to="{ name: 'contact' }" class="nav-link">Contact</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>