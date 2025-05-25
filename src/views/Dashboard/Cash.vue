<template>
  <CashHeader
    :cardNumber="userStore.cardNumberDisplay"
    :pending="pendingAmount"
    :withdrawn="withdrawnAmount"
    :userImage="userStore.userImage"
  />
  <CashMethods :methods="methods" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/store/modules/user'

import CashHeader from "@/components/layout/CashHeader.vue"
import CashMethods from "@/components/ui/CashMethods.vue"

// Icons
import viettelPayIcon from "@/assets/img/Viettel Pay.svg"
import momoIcon from "@/assets/img/Momo.svg"
import cardIcon from "@/assets/img/image 13.svg"
import otherIcon from "@/assets/img/image 14.svg"

const userStore = useUserStore()

const pendingAmount = ref(100000)
const withdrawnAmount = ref(200000)

const methods = [
  { name: "Viettel Pay", icon: viettelPayIcon },
  { name: "MoMo", icon: momoIcon },
  { name: "Thẻ cào", icon: cardIcon },
  { name: "Tên khác", icon: otherIcon },
]

onMounted(() => {
  userStore.initUser()
})
</script>
