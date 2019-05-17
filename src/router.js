import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";
import Signup from "./views/Signup/Signup.vue";
import { FE_PATHS } from "./constants/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: FE_PATHS.HOME,
      name: "home",
      component: Home,
      exact: true
    },
    {
      path: FE_PATHS.SINGUP,
      name: "signup",
      component: Signup,
      exact: true
    }
  ]
});
