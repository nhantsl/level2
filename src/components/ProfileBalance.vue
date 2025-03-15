<template>
  <section class="text-center">
    <b class="mb-1">{{ userName }}</b
    ><br />
    <b class="text-success fw-bold">{{ balance }}</b>
  </section>
</template>

<script>
export default {
  name: "ProfileBalance",
  props: {
    userName: String,
    balance: String,
  },
};
</script>
