<template>
  <main>
    <section>
      <p class="text-2xl font-semibold">Tin tức mới</p>
      <div class="grid lg:grid-cols-2 gap-2 mt-3">
        <div
          v-for="(news, index) in newsList"
          :key="index"
          class=""
        >
          <img :src="news.image" :alt="news.title" class="w-full h-auto" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    newsList: Array,
});
</script>
