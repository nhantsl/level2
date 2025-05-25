<template>
  <section class="container">
    <h5 class="fw-bold mb-3">Lịch sử làm việc</h5>
    <div v-if="history.length">
      <div
        v-for="(item, index) in history"
        :key="index"
        class="d-flex align-items-center mb-3 p-2 border rounded"
      >
        <img :src="item.icon" class="history-icon me-3" />
        <div class="flex-grow-1">
          <p class="mb-1 fw-semibold">{{ item.title }}</p>
          <p class="mb-0 text-secondary fs-7">{{ item.description }}</p>
        </div>
        <p class="text-success fw-bold">+{{ item.reward }}</p>
      </div>
    </div>
    <p v-else class="text-center text-muted">Chưa có lịch sử giao dịch.</p>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
    history: Array,
});
</script>
