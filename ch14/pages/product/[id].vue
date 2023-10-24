<template>
  <div>
    <h1>Product id: {{ $route.params.id }} page {{ id }}</h1>
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

    definePageMeta({
      validate: async (route) => {
        // Check if the id is made up of digits
        return /^\d+$/.test(route.params.id);
      },
    });

    return {
      id: route.params.id,
    };
  },
};
</script>
