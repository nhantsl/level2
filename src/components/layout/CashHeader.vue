<template>
  <header class="cash__header rounded-b-2xl bg p-4 text-white h-55">
    <div class="flex items-center">
      <router-link to="/home" class="custom-link">
        <i class="bi bi-arrow-left-short text-4xl"></i>
      </router-link>
      <h5 class="mx-auto pr-10 text-lg font-semibold">Rút tiền</h5>
    </div>
    <div class="flex justify-between mt-7">
      <div>
        <p class="mb-0 font-light text-xl">Số dư</p>
        <p class="text-xl font-semibold">{{ formattedCardNumber }}</p>
      </div>
      <div class="ml-auto">
        <img :src="userImage" alt="Avatar" width="48" />
      </div>
    </div>

    <div class="cash__details rounded-2xl mt-5 text-center sha p-3">
      <div class="flex justify-around p-2">
        <div>
          <i class="bi bi-circle-fill text-yellow-400 fs-7"></i> Chờ rút
          <h6>{{ formattedPending }}</h6>
        </div>
        <div class="w-px h-11 bg-gray-300 mt-1"></div>
        <div>
          <i class="bi bi-circle-fill text-green-500 fs-7"></i> Đã rút
          <h6>{{ formattedWithdrawn }}</h6>
        </div>
      </div>
      <div>
        <hr class="text-gray-300 h-px mt-3 mx-auto w-9/10"/>
      </div>
      <p class="text-xs italic text-gray-500 mt-2">
        Thứ 7, Chủ nhật không làm việc nên sẽ rút tiền lâu hơn
      </p>
      <span class="inline-block align-middle bg text-white rounded-xl w-9/10 p-2 mt-4">
        Lịch sử rút tiền
      </span>
    </div>
  </header>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { formatVnd, formatCurrency } from "@/utils/helpers";

const props = defineProps({
  cardNumber: Number,
  pending: Number,
  withdrawn: Number,
  userImage: String,
});

// Dùng computed kết hợp helper format tiền
const formattedCardNumber = computed(() => formatVnd(props.cardNumber));
const formattedPending = computed(() => formatCurrency(props.pending));
const formattedWithdrawn = computed(() => formatCurrency(props.withdrawn));
</script>
