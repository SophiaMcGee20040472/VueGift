// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import Trending from "../views/Trending.vue";
import GiftIdeas from "../views/GiftIdeas.vue";
import Contact from "../views/Contact.vue";
import GiftIdeas from "../views/GiftIdeas.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/categories", component: Categories },
  { path: "/trending", component: Trending },
  { path: "/gift-ideas", component: GiftIdeas },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
