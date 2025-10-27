import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import Trending from "../views/Trending.vue";
import GiftIdeas from "../views/GiftIdeas.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/trending",
    name: "Trending",
    component: Trending,
  },
  {
    path: "/gift-ideas",
    name: "GiftIdeas",
    component: GiftIdeas,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
