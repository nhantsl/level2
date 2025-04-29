<template>
  <section class="text-center">
    <b class="mb-1">{{ username }}</b
    ><br />
    <b class="text-success fw-bold">{{ formattedBalance }}</b>
  </section>
</template>

<script>
export default {
  name: "ProfileBalance",
  props: {
    username: String,
    balance: Number,
  },
  computed: {
    formattedBalance() {
      return this.balance?.toLocaleString("vi-VN") + "đ" || "0đ";
    },
  },
};
</script>
