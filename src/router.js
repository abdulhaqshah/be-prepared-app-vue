import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";
import Signup from "./views/Signup/Signup.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      exact: true
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
      exact: true
    }
  ]
});
