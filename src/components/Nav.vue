<template>
  <nav class="navbar navbar-light bg-light fixed-bottom">
    <div class="container d-flex justify-content-around">
      <router-link class="nav-link text-center" to="/">
        <i class="bi bi-house-door-fill fs-5"></i>
        <p class="fs-7 m-0">Home</p>
      </router-link>
      <router-link class="nav-link text-center" to="/wallet">
        <i class="bi bi-wallet-fill fs-5"></i>
        <p class="fs-7 m-0">Kiếm tiền</p>
      </router-link>
      <router-link class="nav-link text-center" to="/people">
        <i class="bi bi-people-fill fs-5"></i>
        <p class="fs-7 m-0">Cộng đồng</p>
      </router-link>
      <router-link class="nav-link text-center" to="/profile">
        <i class="bi bi-person-fill fs-5"></i>
        <p class="fs-7 m-0">Cá Nhân</p>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
@import "@/assets/style/global.css";
.nav-link.router-link-active {
  font-weight: bold;
  color: rgb(207, 48, 102);
}
</style>
