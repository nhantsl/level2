<template>
  <section class="container">
    <WalletTask v-for="(task, index) in tasks" :key="index" :task="task" />
  </section>
</template>

<script>
import WalletTask from "./WalletTask.vue";

export default {
  name: "WalletList",
  components: { WalletTask },
  props: {
    tasks: Array,
  },
};
</script>
