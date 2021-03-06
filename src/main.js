import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import vuescroll from "vuescroll";
import axios from "axios";
import VueAxios from "vue-axios";
import AOS from "aos";
import Vuesax from "vuesax";

import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);
Vue.use(Vuesax, {
  // options here
});

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
