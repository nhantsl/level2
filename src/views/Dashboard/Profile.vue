<template>
  <ProfileHeader :userImage="userStore.userImage"/>
  <main class="pt-8">
    <ProfileBalance :username="userStore.username" :balance="userStore.cardNumberDisplay" />
    <ProfileBankInfo :pendingMoney="250000000" :needRevision="350000" />
    <ProfileFunction :functions="functions" />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/store/modules/user'
const userStore = useUserStore()
onMounted(() => {
  userStore.initUser()
})

import ProfileHeader from "@/components/layout/ProfileHeader.vue"
import ProfileBalance from "@/components/ui/ProfileBalance.vue"
import ProfileBankInfo from "@/components/ui/ProfileBankInfo.vue"
import ProfileFunction from "@/components/ui/ProfileFunction.vue"

import settingIcon from "@/assets/img/Setting.svg"
import manageIcon from "@/assets/img/qunalytk.svg"
import cashSettingIcon from "@/assets/img/qldongtien.svg"
import cashHistoryIcon from "@/assets/img/lichsudongtien.svg"
import cashVerifyIcon from "@/assets/img/doisoatdongtien.svg"
import activityLogIcon from "@/assets/img/nhatkyhaotdong.svg"

const functions = [
  { name: "Cài đặt tài khoản", icon: settingIcon },
  { name: "Quản lý tài khoản", icon: manageIcon },
  { name: "Cài đặt dòng tiền", icon: cashSettingIcon },
  { name: "Lịch sử dòng tiền", icon: cashHistoryIcon },
  { name: "Đối soát dòng tiền", icon: cashVerifyIcon },
  { name: "Nhật ký hoạt động", icon: activityLogIcon },
]
</script>
