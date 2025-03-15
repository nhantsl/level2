<template>
  <main>
    <section>
      <h5 class="fw-bold">Tin tức mới</h5>
      <div class="row">
        <div
          v-for="(news, index) in newsList"
          :key="index"
          class="col-12 col-md-6"
        >
          <img :src="news.image" :alt="news.title" class="img-fluid w-100" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomeNews",
  props: {
    newsList: Array,
  },
};
</script>
