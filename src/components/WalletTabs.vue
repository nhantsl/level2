<template>
  <section class="container">
    <div class="btn-group d-flex gap-3">
      <p
        class="btn"
        :class="{ 'color shadow-0 rounded-pill': activeTab === 'tasks' }"
        @click="changeTab('tasks')"
      >
        Danh sách công việc
      </p>
      <p
        class="btn"
        :class="{
          'text-secondary shadow-0 rounded-pill': activeTab === 'history',
        }"
        @click="changeTab('history')"
      >
        Lịch sử làm việc
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "WalletTabs",
  data() {
    return {
      activeTab: "tasks",
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
      this.$emit("tabChanged", tab);
    },
  },
};
</script>
