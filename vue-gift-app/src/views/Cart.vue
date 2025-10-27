<template>
  <section
    class="margin-top gift-container max-w-3xl mx-auto bg-white rounded-2xl border border-white"
  >
    <div class="spacing-content mt-12 px-6 py-8 max-w-6xl mx-auto">
      <h2
        class="text-3xl font-bold mb-8 text-pink-700 flex items-center justify-center"
      >
        <span>Your Cart 🛒</span>
      </h2>
      <div
        v-if="cart.length === 0"
        class="text-gray-500 text-center py-16 border border-dashed border-white rounded-xl"
      >
        <p class="text-lg mb-3">Your cart is empty.</p>
        <router-link
          to="/trending"
          class="text-pink-600 font-medium underline hover:text-pink-700 transition"
        >
          Browse gifts
        </router-link>
      </div>
      <ul v-else class="space-y-6">
        <li
          v-for="item in cart"
          :key="item.id"
          class="p-5 bg-white border-white transition-all duration-200"
        >
          <div
            class="grid gap-6 items-center text-center sm:text-left justify-items-center sm:justify-items-start sm:grid-cols-[auto_1fr_auto]"
          >
            <div class="flex justify-center sm:justify-start">
              <img
                :src="item.image"
                class="w-24 h-24 rounded-lg object-cover border border-gray-200"
                alt="Product image"
              />
            </div>
            <div class="flex flex-col justify-between items-center sm:items-start">
              <div class="w-full mb-2">
                <h3
                  class="font-semibold bottom-space text-gray-800 text-base leading-tight truncate"
                >
                  {{ item.title }}
                </h3>
                <p class="text-sm text-gray-500 mt-1">
                  €{{ item.price }} × {{ item.quantity }}
                </p>
              </div>
              <div
                class="flex items-center justify-center sm:justify-start mt-3 space-x-6"
              >
                <button
                  @click="decreaseQuantity(item.id)"
                  class="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 text-gray-700 font-semibold transition"
                >
                  −
                </button>

                <span
                  class="font-semibold text-gray-800 text-base tracking-wide w-8 text-center"
                >
                  {{ item.quantity }}
                </span>
                <button
                  @click="increaseQuantity(item.id)"
                  class="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 text-gray-700 font-semibold transition"
                >
                  +
                </button>
              </div>
            </div>
            <div class="flex justify-center sm:justify-end items-center mt-4 sm:mt-0">
              <button
                @click="removeFromCart(item.id)"
                class="text-red-500 text-sm hover:underline whitespace-nowrap font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      </ul>
      <div
        v-if="cart.length"
        class="mt-14 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 text-center sm:text-left"
      >
        <p class="text-xl font-semibold text-gray-800">
          Total:
          <span class="text-pink-600 font-bold ml-1">
            €{{ total.toFixed(2) }}
          </span>
        </p>

        <button
          @click="clearCart"
          class="bg-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-700 transition-all duration-200"
        >
          Checkout →
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCartStore } from "../store/cartStore";

const {
  cart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  total,
} = useCartStore();
</script>
