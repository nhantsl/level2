<template>
  <section class="container">
    <div class="d-flex">
      <h5>Việc giá thấp</h5>
      <p class="ms-auto">Xem thêm</p>
    </div>
    <div class="d-flex overflow-auto">
      <img
        v-for="(job, index) in jobs"
        :key="index"
        :src="job.image"
        alt=""
        class="img-fluid w-100"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "WalletJobs",
  props: {
    jobs: Array,
  },
};
</script>
