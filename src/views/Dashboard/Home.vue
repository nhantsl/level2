<template>
  <HeaderComponent
    :username="userStore.username"
    :balance="userStore.cardNumberDisplay"
    :banners="banners"
    :userImage="userStore.userImage"
  />
  <FeatureList :features="features" />
  <NewsList :newsList="newsList" />
</template>

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/store/modules/user'

import HeaderComponent from "@/components/layout/HomeHeader.vue"
import FeatureList from "@/components/ui/HomeFunction.vue"
import NewsList from "@/components/ui/HomeNews.vue"

// Assets
import bannerImage from "@/assets/img/banner.svg"
import inviteIcon from "@/assets/img/Mời bạn.svg"
import supportIcon from "@/assets/img/Hỗ trợ.svg"
import withdrawIcon from "@/assets/img/Rút tiền.svg"
import communityIcon from "@/assets/img/Cộng đồng.svg"
import taskIcon from "@/assets/img/Nhiệm vụ.svg"
import accountIcon from "@/assets/img/Tài khoản.svg"
import newsImage from "@/assets/img/tintuc.svg"
import newsImage2 from "@/assets/img/tintuc2.svg"

const userStore = useUserStore()

const banners = [
  bannerImage,
  bannerImage,
  bannerImage,
]

const features = [
  { name: "Mời bạn", icon: inviteIcon },
  { name: "Hỗ trợ", icon: supportIcon },
  { name: "Rút tiền", icon: withdrawIcon },
  { name: "Cộng đồng", icon: communityIcon },
  { name: "Nhiệm vụ", icon: taskIcon },
  { name: "Tài khoản", icon: accountIcon },
]

const newsList = [
  { title: "News 1", image: newsImage },
  { title: "News 2", image: newsImage2 },
  { title: "News 3", image: newsImage },
]

onMounted(() => {
  userStore.initUser()
})
</script>
