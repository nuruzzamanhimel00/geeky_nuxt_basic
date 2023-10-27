export default defineNuxtRouteMiddleware((to, from) => {
  //   console.log(from, to);
  var inLogin = false;
  //   console.log(!inLogin);
  if (!inLogin && to.path !== "/login") {
    return navigateTo("/login");
  } else if (inLogin && to.path === "/login") {
    console.log("else if");
    return navigateTo("/dashboard");
  }
  //   return navigateTo("/dashboard");
  //   console.log(from, to);
});
