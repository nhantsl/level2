<template>
  <WalletHeader userName="Dũng" :avatar="require('@/assets/img/avatar1.svg')" />
  <main>
    <WalletTabs @tabChanged="handleTabChange" />
    <WalletList v-if="activeTab === 'tasks'" :tasks="tasks" />
    <template v-if="activeTab === 'tasks'">
      <WalletAd :adBanner="require('@/assets/img/banner1.svg')" />
      <WalletJobs :jobs="lowPriceJobs" />
    </template>
    <WalletHistory v-if="activeTab === 'history'" :history="history" />
  </main>
</template>

<script>
import WalletHeader from "@/components/WalletHeader.vue";
import WalletTabs from "@/components/WalletTabs.vue";
import WalletList from "@/components/WalletList.vue";
import WalletHistory from "@/components/WalletHistory.vue";
import WalletAd from "@/components/WalletAd.vue";
import WalletJobs from "@/components/WalletJobs.vue";

export default {
  name: "WalletView",
  components: {
    WalletHeader,
    WalletTabs,
    WalletList,
    WalletHistory,
    WalletAd,
    WalletJobs,
  },
  data() {
    return {
      activeTab: "tasks",
      tasks: [
        {
          title: "Like bài viết",
          description: "Thành Dũng vừa cập nhật",
          icon: require("@/assets/img/like-1.svg"),
          reward: "350đ",
          progress: 25,
        },
        {
          title: "Share bài viết",
          description: "Thành Dũng vừa cập nhật",
          icon: require("@/assets/img/Share.svg"),
          reward: "500đ",
          progress: 50,
        },
      ],
      history: [
        {
          title: "Hoàn thành nhiệm vụ Like bài viết",
          description: "Bạn đã nhận được tiền thưởng",
          icon: require("@/assets/img/like-1.svg"),
          reward: "350đ",
        },
        {
          title: "Hoàn thành nhiệm vụ Share bài viết",
          description: "Bạn đã nhận được tiền thưởng",
          icon: require("@/assets/img/Share.svg"),
          reward: "500đ",
        },
      ],
      lowPriceJobs: [
        { image: require("@/assets/img/tintuc1.svg") },
        { image: require("@/assets/img/tintuc1.svg") },
      ],
    };
  },
  methods: {
    handleTabChange(tab) {
      this.activeTab = tab;
    },
  },
};
</script>
