import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Wallet from "./views/Wallet.vue";
import People from "./components/People.vue";
import Profile from "./views/Profile.vue";
import Cash from "./components/Cash.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/wallet", component: Wallet },
  { path: "/people", component: People, meta: { hideNav: true } },
  { path: "/profile", component: Profile },
  { path: "/cash", component: Cash, meta: { hideNav: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
