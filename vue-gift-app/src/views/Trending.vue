<template>
  <div class="gift-container">
    <header class="margin-top1 flex items-center justify-between mb-6">
      <h2 class="text-2xl text-pink-500">Trending Gifts</h2>
      <div class="space-content flex items-center gap-3">
        <router-link
          to="/cart"
          class="text-sm px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-100 transition flex items-center gap-1"
        >
          🛒 Cart
          <span
            v-if="totalItems > 0"
            class="bg-pink-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full"
          >
            {{ totalItems }}
          </span>
        </router-link>
      </div>
    </header>
    <ul class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="gift in gifts"
        :key="gift.id"
        class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col"
      >
        <img
          :src="gift.image"
          :alt="gift.title"
          class="w-full h-44 object-cover"
        />
        <div class="p-4 flex flex-col flex-1">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-base font-semibold truncate">{{ gift.title }}</h3>
            <span class="text-sm text-gray-500">€{{ gift.price }}</span>
          </div>
          <p class="text-sm text-gray-600 mt-1 line-clamp-2 flex-1">
            {{ gift.desc }}
          </p>
          <div class="mt-4 flex items-center justify-between">
            <span
              class="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded"
            >
              Trending
            </span>
            <button
              @click.stop="handleAddToCart(gift)"
              class="text-xs px-4 py-2 rounded bg-pink-500 text-white hover:bg-pink-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </li>
    </ul>
    <transition name="slide-modal">
      <div
        v-if="addedItem"
        class="fixed top-[120px] right-6 bg-pink-100 text-pink-600 px-6 py-4 rounded-xl shadow-xl z-50 w-64"
      >
        <h4 class="font-semibold text-lg mb-1">Item Added 🛒</h4>
        <p class="text-sm">{{ addedItem }} added to your cart.</p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "../store/cartStore";

const { cart, addToCart } = useCartStore();
const addedItem = ref(null);

const gifts = ref([
  {
    id: 1,
    title: "The Lost Mug",
    desc: "I have it all together I just forgot where I put it.",
    price: 14.99,
    image:
      "https://i.pinimg.com/736x/9c/5a/c1/9c5ac1ecd6e6be2c0f158760ce06b50f.jpg",
  },
  {
    id: 2,
    title: "Cheap Plane Tickets",
    desc: "Fly international flights anywhere in the world for less than you think!",
    price: 199.99,
    image:
      "https://img.freepik.com/free-vector/flat-design-boarding-pass-template_23-2151019606.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 3,
    title: "Retro Speaker",
    desc: "Compact, wireless, and perfect for any occasion.",
    price: 34.99,
    image:
      "https://www.bigsmall.in/cdn/shop/files/IMG_4875_1200x1200.jpg?v=1754992563",
  },
  {
    id: 4,
    title: "Scented Candles",
    desc: "Four relaxing scents for calm and cozy nights.",
    price: 22.49,
    image:
      "https://assets.clevelandclinic.org/transform/LargeFeatureImage/c73ebba1-b95d-4ac1-aa8f-dbffe521befd/scented-candles-174665543",
  },
  {
    id: 5,
    title: "Mini Projector",
    desc: "Portable projector for movies, games, and presentations on the go.",
    price: 59.99,
    image:
      "https://cdn.shopify.com/s/files/1/0262/9838/4432/files/04_809bf598-f806-469b-af00-ede3fa406bc1.png?v=1723088730",
  },
  {
    id: 6,
    title: "Leather Journal Notebook",
    desc: "Handcrafted journal for writing, sketching, and note-taking.",
    price: 24.5,
    image:
      "https://i.etsystatic.com/10467969/r/il/6a3ebe/2913780740/il_570xN.2913780740_f37y.jpg",
  },
]);

function handleAddToCart(gift) {
  addToCart(gift);
  addedItem.value = gift.title;
  setTimeout(() => (addedItem.value = null), 2500);
}

const totalItems = computed(() =>
  cart.value.reduce((sum, item) => sum + item.quantity, 0)
);
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.margin-top1 {
  margin-top: 70px;
  margin-bottom: 5px;
}

.slide-modal-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.slide-modal-enter-active {
  transition: all 0.4s ease-out;
}
.slide-modal-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.slide-modal-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.slide-modal-leave-active {
  transition: all 0.4s ease-in;
}
.slide-modal-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
