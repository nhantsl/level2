<template>
  <section class="container">
    <ul id="profile-function" class="list-group gap-2">
      <li
        v-for="(item, index) in functions"
        :key="index"
        class="list-group-item shadow-0 d-flex align-items-center"
      >
        <img :src="item.icon" :alt="item.name" width="40" />
        <p class="m-2 flex-grow-1">{{ item.name }}</p>
        <i class="bi bi-play-fill text-body-tertiary pe-2"></i>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ProfileFunction",
  props: {
    functions: Array,
  },
};
</script>
