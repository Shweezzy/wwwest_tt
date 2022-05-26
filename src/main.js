import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import vuescroll from "vuescroll";
import axios from "axios";
import VueAxios from "vue-axios";

import AOS from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);

Vue.use(vuescroll, {
  ops: {},
  name: "myScroll",
});

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount("#app");
