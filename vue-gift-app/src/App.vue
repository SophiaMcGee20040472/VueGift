<template>
  <header>
    <MainMenu />
    <Home v-if="isHome" />
    <Trending v-else-if="isTrending" />
    <Contact v-else-if="isContact" />
    <Categories v-else-if="isCategories" />
    <Cart v-else-if="isCart" />
    <GiftIdeas v-else-if="isGiftIdeas" />
    <div v-else>
      <p>Page not found.</p>
    </div>
  </header>
  <main></main>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import MainMenu from "./components/MainMenu.vue";
import Home from "./views/Home.vue";
import Trending from "./views/Trending.vue";
import Contact from "./views/Contact.vue";
import Categories from "./views/Categories.vue";
import GiftIdeas from "./views/GiftIdeas.vue";
import Cart from "./views/Cart.vue";

const route = useRoute();

const isHome = computed(() => route.path === "/");
const isTrending = computed(() => route.path === "/trending");
const isContact = computed(() => route.path === "/contact-us");
const isCategories = computed(() => route.path === "/categories");
const isGiftIdeas = computed(() => route.path === "/gift-ideas");
const isCart = computed(() => route.path === "/cart");
</script>
