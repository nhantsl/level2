<template>
  <section class="text-center">
    <b class="text-xl">{{ username }}</b><br />
    <b class="text-green-600 text-lg">{{ formattedBalance }}</b>
  </section>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { formatCurrency } from "@/utils/helpers";

   
const props = defineProps({
    username: String,
    balance: Number,
});

const formattedBalance = computed(() => formatCurrency(props.balance));
</script>
