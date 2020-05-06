import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import util from "./assets/util";
import api from "./assets/api";
import "./assets/less/app.less";

Vue.config.productionTip = process.NODE_ENV === "production";

// 加载自定义插件
function installPlugin(plugin, name) {
  plugin.install = function() {
    Vue.prototype[name] = this;
  };
  Vue.use(plugin);
}
installPlugin(api, "api"); //api注册到全局
installPlugin(util, "util"); //公共函数注册到全局

// 全局事件中心
const bus = new Vue();
installPlugin(bus, "$bus");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
