<template>
  <nav class="navbar navbar-light bg-light fixed-bottom">
    <div class="container d-flex justify-content-around">
      <router-link
        class="nav-link text-center"
        to="/home"
        v-slot="{ isActive }"
      >
        <img
          :src="
            isActive
              ? require('@/assets/img/Home-1.svg')
              : require('@/assets/img/Home.svg')
          "
          alt="Home"
          width="24"
        />
        <p class="fs-7 m-0">Home</p>
      </router-link>
      <router-link
        class="nav-link text-center"
        to="/wallet"
        v-slot="{ isActive }"
      >
        <img
          :src="
            isActive
              ? require('@/assets/img/Wallet-1.svg')
              : require('@/assets/img/Wallet.svg')
          "
          alt="Wallet"
          width="24"
        />
        <p class="fs-7 m-0">Kiếm tiền</p>
      </router-link>
      <router-link
        class="nav-link text-center"
        to="/people"
        v-slot="{ isActive }"
      >
        <img
          :src="
            isActive
              ? require('@/assets/img/3 User-1.svg')
              : require('@/assets/img/3 User.svg')
          "
          alt="Cộng đồng"
          width="24"
        />
        <p class="fs-7 m-0">Cộng đồng</p>
      </router-link>
      <router-link
        class="nav-link text-center"
        to="/profile"
        v-slot="{ isActive }"
      >
        <img
          :src="
            isActive
              ? require('@/assets/img/Profile-1.svg')
              : require('@/assets/img/Profile.svg')
          "
          alt="Cá nhân"
          width="24"
        />
        <p class="fs-7 m-0">Cá nhân</p>
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
  color: rgb(207, 48, 102);
}
</style>
