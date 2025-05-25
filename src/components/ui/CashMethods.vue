<template>
  <main class="h-150 pt-30">
    <h5 class="font-bold text-xl mt-5">Chọn phương thức rút</h5>
    <div class="flex text-center h-40 flex-wrap gap-3 font-semibold justify-center">
      <div
        class="sha mt-5 w-3/7 p-2 py-4 rounded-xl "
        v-for="(method, index) in methods"
        :key="index"
      >
        <img :src="method.icon" :alt="method.name" width="80" class="mx-auto"/>
        <p class="mt-2">{{ method.name }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    methods: Array,
});
</script>
