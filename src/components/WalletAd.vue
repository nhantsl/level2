<template>
  <section class="container">
    <h5>Quảng cáo</h5>
    <img :src="adBanner" alt="Quảng cáo banner" class="img-fluid w-100" />
  </section>
</template>

<script>
export default {
  name: "WalletAd",
  props: {
    adBanner: String,
  },
};
</script>
