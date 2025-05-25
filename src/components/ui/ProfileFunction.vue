<template>
  <section>
    <ul id="profile-function">
      <li
        v-for="(item, index) in functions"
        :key="index"
        class="sha flex content-center m-2 p-3 rounded-2xl"
      >
        <img :src="item.icon" :alt="item.name" width="40" />
        <p class="m-2 flex-1">{{ item.name }}</p>
        <i class="bi bi-play-fill text-gray-400 pt-2"></i>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    functions: Array,
});
</script>
