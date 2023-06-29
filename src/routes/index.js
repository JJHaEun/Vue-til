import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import SignupPage from "@/views/SignupPage.vue";

Vue.use(VueRouter);
// Vue.use 는 플러그인을 초기화(실행) 하기 위해 사용함.

export default new VueRouter({
  routes: [
    { path: "/login", component: LoginPage },
    {
      path: "/signup",
      component: SignupPage,
    },
  ],
  //  route라는 속성은  VueRouter에 의해 제어되는 페이지(라우팅의)정보를 담는 배열 속성이다.
}); // 라우터 인스턴스 만들기
