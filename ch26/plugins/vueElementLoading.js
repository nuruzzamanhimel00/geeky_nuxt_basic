import VueElementLoading from "vue-element-loading";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("vue-element-loading", VueElementLoading);
});
