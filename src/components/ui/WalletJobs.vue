<template>
  <section>
    <div class="flex">
      <b class="text-lg">Việc giá thấp</b>
      <p class="ml-auto">Xem thêm</p>
    </div>
    <div class="flex overflow-auto">
      <img
        v-for="(job, index) in jobs"
        :key="index"
        :src="job.image"
        alt=""
        class="img-fluid w-100"
      />
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
    jobs: Array,
});
</script>
