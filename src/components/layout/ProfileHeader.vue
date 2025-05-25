<template>
  <header class="profile__header">
    <img
      src="@/assets/img/Union.svg"
      alt="Union Background"
      class="profile__header--union"
    />
    <div class="profile__header--content">
      <div class="flex px-3">
        <h5 class="mx-auto pl-4 text-lg">Cá nhân</h5>
        <i class="bi bi-three-dots-vertical"></i>
      </div>
      <img :src="userImage" alt="Avatar" width="70" class="mx-auto mt-6" />
    </div>
  </header>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  userImage: String,
})
</script>

<style scoped>
@import "@/assets/style/global.css";
</style>
