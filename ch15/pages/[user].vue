<template>
  <div>
    <h1>{{ $route.params.user }} Main page {{ user }}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae at
      porro repellendus repellat aut neque natus ea quas enim, ipsa tempora
      voluptate praesentium aperiam accusantium voluptas ad, ut ducimus.
      Eveniet.
    </p>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    console.log(route);
    return {
      user: route.params.user,
    };
  },
};
</script>
