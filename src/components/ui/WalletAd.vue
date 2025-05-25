<template>
  <section class="container">
    <b class="text-lg">Quảng cáo</b>
    <img :src="adBanner" alt="Quảng cáo banner" class="w-full" />
  </section>
</template>

<script setup>
defineProps ({
  adBanner: String,
})
</script>
