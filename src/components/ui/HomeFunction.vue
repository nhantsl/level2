<template>
  <main>
    <section class="text-center text-sm">
      <div id="function-list" class="grid grid-cols-3 lg:grid-cols-6 gap-3">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="text-center"
        >
          <img
            :src="feature.icon"
            :alt="feature.name"
            class="cursor-pointer mx-auto"
            @click="handleFeatureClick(feature.name)"
          />
          <p class="pt-1 mx-auto text-xs">{{ feature.name }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const router = useRouter()

defineProps({
  features: {
    type: Array,
    required: true
  }
})

const routeMap = {
  'Rút tiền': '/cash',
  'Cộng đồng': '/people',
  'Nhiệm vụ': '/wallet',
  'Tài khoản': '/profile'
}

const handleFeatureClick = (featureName) => {
  const path = routeMap[featureName]
  if (path) {
    router.push(path)
  } else {
    console.warn(`Chưa định nghĩa đường dẫn cho chức năng: ${featureName}`)
  }
}
</script>
