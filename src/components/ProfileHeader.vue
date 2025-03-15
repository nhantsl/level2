<template>
  <header class="profile__header">
    <img
      src="@/assets/img/Union.svg"
      alt="Union Background"
      class="profile__header--union"
    />
    <div class="profile__header--content">
      <div class="d-flex px-3">
        <h5 class="m-auto ps-3">Cá nhân</h5>
        <i class="bi bi-three-dots-vertical"></i>
      </div>
      <div class="m-auto mt-3">
        <img src="@/assets/img/Avatar.svg" alt="Avatar" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "ProfileHeader",
};
</script>

<style scoped>
@import "@/assets/style/global.css";
</style>
