import Vue from "vue";
import App from "./App.vue";
import "./assets/css/default.css";
import Vuelidate from "vuelidate";
import router from "./router";
//import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  router,
  //store,
  render: h => h(App)
}).$mount("#app");
