<template>
  <nav class="navbar navbar-light bg-light fixed-bottom">
    <div class="container d-flex justify-content-around">
      <router-link class="nav-link text-center" to="/home">
        <img
          :src="isActive('/home') ? homeActive : homeInactive"
          alt="Home"
          width="24"
        />
        <p class="fs-7 m-0">Home</p>
      </router-link>
      <router-link class="nav-link text-center" to="/wallet">
        <img
          :src="isActive('/wallet') ? walletActive : walletInactive"
          alt="Wallet"
          width="24"
        />
        <p class="fs-7 m-0">Kiếm tiền</p>
      </router-link>
      <router-link class="nav-link text-center" to="/people">
        <img
          :src="isActive('/people') ? peopleActive : peopleInactive"
          alt="Cộng đồng"
          width="24"
        />
        <p class="fs-7 m-0">Cộng đồng</p>
      </router-link>
      <router-link class="nav-link text-center" to="/profile">
        <img
          :src="isActive('/profile') ? profileActive : profileInactive"
          alt="Cá nhân"
          width="24"
        />
        <p class="fs-7 m-0">Cá nhân</p>
      </router-link>
    </div>
  </nav>
</template>

<script>
import homeActive from '@/assets/img/Home-1.svg';
import homeInactive from '@/assets/img/Home.svg';
import walletActive from '@/assets/img/Wallet-1.svg';
import walletInactive from '@/assets/img/Wallet.svg';
import peopleActive from '@/assets/img/3 User-1.svg';
import peopleInactive from '@/assets/img/3 User.svg';
import profileActive from '@/assets/img/Profile-1.svg';
import profileInactive from '@/assets/img/Profile.svg';

export default {
  name: "Nav",
  computed: {
    // Kiểm tra đường dẫn hiện tại
    isActive() {
      return (path) => this.$route.path === path;
    }
  },
  data() {
    return {
      homeActive,
      homeInactive,
      walletActive,
      walletInactive,
      peopleActive,
      peopleInactive,
      profileActive,
      profileInactive
    };
  }
};
</script>

<style scoped>
@import "@/assets/style/global.css";
.nav-link.router-link-active {
  color: rgb(207, 48, 102);
}
</style>
