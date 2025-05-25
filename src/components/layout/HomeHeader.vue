<template>
  <header class="home__header rounded-b-xl bg">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img
          :src="userImage"
          class="w-10"
          alt="Avatar"
        />
        <div class="text-white text-base/6 ml-3">
          <p class="text-xl font-semibold">{{ username }}</p>
          <p class="">Số dư: {{ formattedBalance }}</p>
        </div>
      </div>
      <img src="/src/assets/img/Notification.svg" alt="bell" />
    </div>
    <Swiper
      :modules="[Pagination, Autoplay]"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 5000 }"
      :loop="true"
      class="custom-swiper w-full"
    >
      <SwiperSlide v-for="(img, i) in banners" :key="i">
        <img :src="img" class="w-full mb-3" />
      </SwiperSlide>
    </Swiper>
  </header>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { formatCurrency } from '@/utils/helpers'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'


const props = defineProps({
  username: String,
  balance: Number,
  banners: Array,
  userImage: String,
})

const formattedBalance = computed(() => formatCurrency(props.balance))

</script>
