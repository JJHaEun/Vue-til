import Vue from "vue";
import App from "./App.vue";
import router from "@/routes/index";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  // 라우터 최종적으로 인스턴스 연결하기
}).$mount("#app");
