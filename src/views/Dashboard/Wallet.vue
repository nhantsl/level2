<template>
  <WalletHeader :username="userStore.username" :userImage="userStore.userImage" />
  <main>
    <WalletTabs />
    <WalletTask
      v-for="(task, index) in tasks"
      :key="index"
      :title="task.title"
      :description="task.description"
      :icon="task.icon"
      :reward="task.reward"
      :progress="task.progress"
    />
    <WalletAd :adBanner="banner" />
    <WalletJobs :jobs="lowPriceJobs" />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/store/modules/user'
const userStore = useUserStore()
onMounted(() => {
  userStore.initUser()
})

import WalletHeader from "@/components/layout/WalletHeader.vue"
import WalletTabs from "@/components/ui/WalletTabs.vue"
import WalletTask from "@/components/ui/WalletTask.vue"
import WalletAd from "@/components/ui/WalletAd.vue"
import WalletJobs from "@/components/ui/WalletJobs.vue"

import bannerImage from "@/assets/img/banner1.svg"
import likeIcon from "@/assets/img/like-1.svg"
import shareIcon from "@/assets/img/Share.svg"
import newsImage from "@/assets/img/tintuc1.svg"

const banner = bannerImage
const tasks = [
  { title: "Like bài viết", description: "Thành Dũng vừa cập nhật", icon: likeIcon, reward: "350đ", progress: 25 },
  { title: "Share bài viết", description: "Thành Dũng vừa cập nhật", icon: shareIcon, reward: "500đ", progress: 50 },
]
const lowPriceJobs = [{ image: newsImage }, { image: newsImage }]
</script>
