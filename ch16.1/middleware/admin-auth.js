export default defineNuxtRouteMiddleware((to, from) => {
  var inLogin = true;
  //   console.log(!inLogin);
  if (inLogin && to.path === "/login") {
    return navigateTo("/dashboard");
  } else if (!inLogin) {
    return navigateTo("/login");
  }
  //   console.log(from, to);
});
