import { createRouter, createWebHashHistory } from "vue-router";

import CartView from "@/views/CartView.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/cart", name: "cart", component: CartView },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
