<template>
  <section class="flex justify-between gap-3 mt-3">
    <div class="profile__bank flex-1 sha">
      <img
        src="@/assets/img/Tiền chờ duyệt.svg"
        width="40"
        alt="Pending Money"
      />
      <div class="fs-7">
        <p class="text-gray-500">Tiền chờ duyệt</p>
        <p class="text-purple-600 font-semibold">
          {{ formattedPendingMoney }}
        </p>
      </div>
    </div>
    <div class="profile__bank flex-1 sha">
      <img src="@/assets/img/icon.svg" width="40" alt="Needs Revision" />
      <div class="fs-7">
        <p class="text-gray-500">Cần làm lại</p>
        <p class="text-red-500 font-semibold">{{ formattedNeedRevision }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { formatCurrency } from "@/utils/helpers";
    
const props = defineProps({
    pendingMoney: Number,
    needRevision: Number,
  });

const formattedPendingMoney = computed(() => formatCurrency(props.pendingMoney));
const formattedNeedRevision = computed(() => formatCurrency(props.needRevision));

</script>
