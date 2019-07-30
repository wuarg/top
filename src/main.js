import Vue from "vue";
import App from "./App";
import router from "./router";
import "@/styles/index.styl";
import "@/permission.js"; //路由守卫
import store from "./store";
import utils from "@/utils/index.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.use(utils);
import "lib-flexible";
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
