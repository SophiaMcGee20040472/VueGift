import { ref, computed, watch } from "vue";

const CART_KEY = "vue_gift_cart";
const cart = ref(JSON.parse(localStorage.getItem(CART_KEY) || "[]"));

export function useCartStore() {
  const addToCart = (gift) => {
    const existingItem = cart.value.find((item) => item.id === gift.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.value.push({ ...gift, quantity: 1 });
    }
  };

  const removeFromCart = (id) => {
    cart.value = cart.value.filter((item) => item.id !== id);
  };

  const clearCart = () => {
    cart.value = [];
  };

  const increaseQuantity = (id) => {
    const item = cart.value.find((i) => i.id === id);
    if (item) item.quantity += 1;
  };

  const decreaseQuantity = (id) => {
    const item = cart.value.find((i) => i.id === id);
    if (item) {
      item.quantity -= 1;
      if (item.quantity <= 0) removeFromCart(id);
    }
  };

  const total = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  watch(
    cart,
    (newCart) => localStorage.setItem(CART_KEY, JSON.stringify(newCart)),
    { deep: true }
  );

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    total,
  };
}
