<template>
  <nav
    class="navbar navbar-light bg-light fixed-bottom"
    :class="{ 'hide-nav': isHidden }"
  >
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
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const isHidden = ref(false);
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      isHidden.value = currentScroll > lastScrollTop;
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { isHidden };
  },
};
</script>

<style scoped>
@import "@/assets/style/global.css";
.nav-link.router-link-active {
  font-weight: bold;
  color: rgb(207, 48, 102);
}
.hide-nav {
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
}
</style>
