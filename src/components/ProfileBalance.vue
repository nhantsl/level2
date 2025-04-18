<template>
  <section class="text-center">
    <b class="mb-1">{{ userName }}</b
    ><br />
    <b class="text-success fw-bold">{{ formattedBalance }}</b>
  </section>
</template>

<script>
export default {
  name: "ProfileBalance",
  props: {
    userName: String,
    balance: Number,
  },
  computed: {
    formattedBalance() {
      return this.balance?.toLocaleString("vi-VN") + "đ" || "0đ";
    },
  },
};
</script>
