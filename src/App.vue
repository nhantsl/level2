<template>
  <!-- Chỉ hiển thị NavApp nếu không có meta.hideNav trong route -->
  <nav-app v-if="!$route.meta.hideNav" />
  
  <!-- Hiển thị các component theo router-view -->
  <router-view />
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    NavApp: Nav, // Đảm bảo Nav được import và sử dụng chính xác
  },
};
</script>

<style scoped>
/* Thêm kiểu dáng cho App nếu cần */
</style>
