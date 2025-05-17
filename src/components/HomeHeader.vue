<template>
  <header class="home__header rounded-bottom-3 bg">
    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex">
        <img
          :src="userImage"
          class="img-fluid ms-2"
          alt="Avatar"
          width="32"
        />
        <div class="text-white ms-3">
          <h6 class="mb-0">{{ username }}</h6>
          <p class="fs-7 mb-0">Số dư: {{ formattedBalance }}</p>
        </div>
      </div>
      <img src="../assets/img/Notification.svg" alt="bell" />
    </div>

    <div class="carousel slide" id="carouselExampleIndicators">
      <div class="carousel-inner">
        <div
          v-for="(image, index) in banners"
          :key="index"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img :src="image" class="img-fluid w-100" alt="Promotional banner" />
        </div>
      </div>

      <div class="carousel-indicators">
        <button
          class="custom-indicator"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          class="active custom-indicator"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          class="custom-indicator"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    username: String,
    balance: Number,
    banners: Array,
    userImage: String,
  },
  computed: {
    formattedBalance() {
      return this.balance?.toLocaleString("vi-VN") + "đ" || "0đ";
    },
  },
};
</script>
