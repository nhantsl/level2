<template>
  <div class="d-flex rounded-4 shadow-0 p-2 mt-2">
    <div class="text-center">
      <img :src="task.icon" class="img-fluid" /><br />
      <p class="badge text-bg-warning text-white m-2">+{{ task.reward }}</p>
    </div>
    <div class="flex-grow-1">
      <p class="fw-semibold mb-0">{{ task.title }}</p>
      <p class="text-secondary mb-0 fs-7">{{ task.description }}</p>
      <div class="d-flex gap-2">
        <div class="progress-bar bg-light">
          <div
            class="progress bg-success"
            :style="{ width: task.progress + '%' }"
          ></div>
        </div>
        <p class="fs-7 text-muted mt-1">{{ task.progress }}%</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WalletTask",
  props: {
    task: Object,
  },
};
</script>
