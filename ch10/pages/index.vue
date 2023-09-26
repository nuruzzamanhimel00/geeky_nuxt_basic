<template>
  <div>
    <ClientOnly>
      <Logo />
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>Loading comments...</p>
      </template>
    </ClientOnly>
    <h1>Index page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maxime
      illum aperiam rem animi error unde vel. Reiciendis, quas sed? Blanditiis
      voluptatum quas quo optio quis placeat dicta delectus vero!
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
