<template>
  <nav class="navbar fixed bottom-0 inset-x-0 items-center bg-white sha">
    <div class="flex justify-around py-2">
      <router-link
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="nav-link text-center"
      >
        <img
          :src="isActive(item.path) ? item.activeIcon : item.inactiveIcon"
          :alt="item.label"
          
          class="mx-auto"
        />
        <p class="text-xs">{{ item.label }}</p>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

import homeActive from '@/assets/img/Home-1.svg'
import homeInactive from '@/assets/img/Home.svg'
import walletActive from '@/assets/img/Wallet-1.svg'
import walletInactive from '@/assets/img/Wallet.svg'
import peopleActive from '@/assets/img/3 User-1.svg'
import peopleInactive from '@/assets/img/3 User.svg'
import profileActive from '@/assets/img/Profile-1.svg'
import profileInactive from '@/assets/img/Profile.svg'

const route = useRoute()

const navItems = [
  {
    path: '/home',
    label: 'Home',
    activeIcon: homeActive,
    inactiveIcon: homeInactive
  },
  {
    path: '/wallet',
    label: 'Kiếm tiền',
    activeIcon: walletActive,
    inactiveIcon: walletInactive
  },
  {
    path: '/people',
    label: 'Cộng đồng',
    activeIcon: peopleActive,
    inactiveIcon: peopleInactive
  },
  {
    path: '/profile',
    label: 'Cá nhân',
    activeIcon: profileActive,
    inactiveIcon: profileInactive
  }
]

const isActive = (path) => route.path === path
</script>

<style scoped>
@import "@/assets/style/global.css";

.nav-link.router-link-active {
  color: rgb(207, 48, 102);
}
</style>
