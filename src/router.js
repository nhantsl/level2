import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Wallet from "./views/Wallet.vue";
import People from "./components/People.vue";
import Profile from "./views/Profile.vue";
import Cash from "./components/Cash.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login, meta: { hideNav: true } },
  { path: "/home", component: Home },
  { path: "/wallet", component: Wallet },
  { path: "/people", component: People, meta: { hideNav: true } },
  { path: "/profile", component: Profile },
  { path: "/cash", component: Cash, meta: { hideNav: true } },
  { path: "/:pathMatch(.*)*", redirect: "/login" },
  { path: "/register", component: Register, meta: { hideNav: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
