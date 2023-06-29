<template>
  <div>
    <header>
      <router-link to="/login">Login</router-link> |
      <!-- router-link가 하는 역할 ==> to에 지정된 문자열로 주소를 이동시킴 -->
      <router-link to="signup">Signup</router-link>
    </header>
    <!-- url이 변경되었을때 view가 보이는 부분(즉, 페이지 컴포넌트가 뜨는 부분)은 router-view -->
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style></style>
