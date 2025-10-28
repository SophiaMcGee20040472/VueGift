<template>
  <div class="mt-12 px-6 py-8 max-w-6xl mx-auto">
    <h1 class="margin-top1 spacing-content bottom-space text-3xl md:text-4xl font-bold text-gray-400 mb-10">
      Get in <span class="text-pink-500">Touch!</span>
    </h1>
    <div class="grid md:grid-cols-2 gap-12 items-start">
      <div class="bg-white p-8">
        <h3 class="text-2xl font-semibold mb-6 text-pink-500">
          Send us a message
        </h3>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="bottom-space block text-sm font-medium text-gray-00 mb-1">
                First Name
              </label>
              <input
                v-model="form.firstName"
                @input="clearSuccess"
                type="text"
                required
                placeholder="Enter your first name"
                class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 focus:outline-none text-pink-500 placeholder-gray-400"
              />
              <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">
                {{ errors.firstName }}
              </p>
            </div>

            <div>
              <label class="bottom-space block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                v-model="form.lastName"
                @input="clearSuccess"
                type="text"
                required
                placeholder="Enter your last name"
                class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 focus:outline-none text-pink-500 placeholder-gray-400"
              />
              <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">
                {{ errors.lastName }}
              </p>
            </div>
          </div>

          <div>
            <label class="bottom-space block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              v-model="form.email"
              @input="clearSuccess"
              type="email"
              required
              placeholder="Enter your email"
              class=" w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 focus:outline-none text-pink-500 placeholder-gray-500"
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">
              {{ errors.email }}
            </p>
          </div>

          <div>
            <label class="bottom-space block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              v-model="form.message"
              @input="clearSuccess"
              rows="5"
              required
              placeholder="Type your message here..."
              class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 focus:outline-none resize-none text-pink-500 placeholder-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            class="bottom-space w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>

        <transition name="fade">
          <div
            v-if="successMessage"
            class="mt-6 p-4 text-pink-700 bg-pink-100 border border-pink-300 rounded-lg text-center font-medium"
          >
            {{ successMessage }}
          </div>
        </transition>
      </div>

      <div class="space-y-6">
        <h2 class="margin-top2 text-2xl font-semibold text-pink-500 mt-6">
          We’d love to hear from you!
        </h2>
        <p class="text-gray-500 leading-relaxed">
          Here’s where you can find us:
        </p>
        <ul class="space-y-4 text-gray-500">
          <li class="flex items-center gap-3">
            <span class="text-pink-500 text-lg">📍</span>
            <span>123 Gift Lane, Dublin City, Ireland</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="text-pink-500 text-lg">📞</span>
            <span>(123) 456-7890</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="text-pink-500 text-lg">✉️</span>
            <span>giftygifts@vuegifts.com</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});

const errors = reactive({
  firstName: "",
  lastName: "",
  email: "",
});

const successMessage = ref("");

function validateForm() {
  let isValid = true;
  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(form.firstName)) {
    errors.firstName = "First name can only contain letters.";
    isValid = false;
  } else errors.firstName = "";

  if (!nameRegex.test(form.lastName)) {
    errors.lastName = "Last name can only contain letters.";
    isValid = false;
  } else errors.lastName = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    errors.email = "Please enter a valid email address.";
    isValid = false;
  } else errors.email = "";

  return isValid;
}

function handleSubmit() {
  if (!validateForm()) {
    successMessage.value = "";
    return;
  }

  successMessage.value =
    "✔ Message sent successfully! We'll get back to you as soon as possible.";

  form.firstName = "";
  form.lastName = "";
  form.email = "";
  form.message = "";
}

function clearSuccess() {
  if (successMessage.value) successMessage.value = "";
}
</script>

<style scoped>
div {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.margin-top1 {
  margin-top: 100px;
  margin-bottom: 5px;
}
.margin-top2 {
  margin-top: 32px;
  margin-bottom: 5px;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
