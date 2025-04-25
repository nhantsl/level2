<template>
  <main>
    <section class="text-center fs-7">
      <div id="function-list" class="row row-cols-3 row-cols-lg-6 g-3">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="col text-center"
        >
          <img
            :src="feature.icon"
            :alt="feature.name"
            class="img-fluid"
            @click="handleFeatureClick(feature.name)"
          />
          <p class="pt-1">{{ feature.name }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomeFunction',
  props: {
    features: Array,
  },
  methods: {
    handleFeatureClick(featureName) {
      switch (featureName) {
        case 'Rút tiền':
          this.Cash()
          break
        case 'Cộng đồng':
          this.People()
          break
        case 'Nhiệm vụ':
          this.NhiemVu()
          break
        case 'Tài khoản':
          this.Profile()
          break
      }
    },
    Cash() {
      this.$router.push('/cash')
    },
    People() {
      this.$router.push('/people')
    },
    NhiemVu() {
      this.$router.push('/wallet')
    },
    Profile() {
      this.$router.push('/profile')
    },
  },
}
</script>
