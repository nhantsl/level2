<template>
  <nav-app />
  <router-view />
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    NavApp: Nav,
  },
};
</script>
