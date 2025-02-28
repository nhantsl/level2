import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Wallet from "./components/Wallet.vue";
import People from "./components/People.vue";
import Profile from "./components/Profile.vue";
import Cash from "./components/Cash.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/wallet", component: Wallet },
  { path: "/people", component: People },
  { path: "/profile", component: Profile },
  { path: "/cash", component: Cash },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
