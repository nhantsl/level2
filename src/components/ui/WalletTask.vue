<template>
  <router-link to="/people" class="custom-link">
    <div class="flex rounded-xl sha my-2 p-2 py-3 gap-2">
      <div class="content-center text-center w-1/7">
        <img :src="icon" class="mx-auto"/>
        <b class="px-2 py-0.5 rounded text-xs text-white bg-yellow-500">+{{ reward }}</b>
      </div>
      <div class="flex-grow ml-3">
        <b class="">{{ title }}</b>
        <p class="text-gray-500">{{ description }}</p>
        <div class="flex items-center gap-2 mt-1">
          <div class="w-full h-2 bg-gray-200 rounded overflow-hidden">
            <div
              class="h-2 bg-green-500"
              :style="{ width: progress + '%' }"
            ></div>
          </div>
          <p class="text-xs text-gray-400 mt-0.5">{{ progress }}%</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    icon: String,
    reward: String,
    progress: Number,
})
</script>
