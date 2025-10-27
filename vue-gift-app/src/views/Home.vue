<template>
  <div
    class="bg-white min-h-screen flex items-center justify-center px-6 py-20"
  >
    <div
      class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12"
    >
      <div class="flex-1">
        <img
          src="https://athlonehampers.ie/wp-content/uploads/2018/11/Christmas-Gift-Hamper.jpg"
          alt="Gift presentation"
          class="w-full rounded-2xl shadow-lg"
        />
      </div>
      <div class="flex-1 text-center lg:text-left">
        <h1 class="general-space space-content text-5xl text-gray-700 font-extrabold mb-12">
          About <span class="text-pink-500">VueGift</span>
        </h1>
        <p class="text-lg text-gray-600 mb-4 leading-relaxed">
          "Finding the perfect gift has never been easier. Whether you're
          celebrating a birthday, anniversary, holiday, or just want to show
          someone you care, our carefully curated collection offers something
          for everyone. From unique and personalized treasures to timeless
          classics, each item is chosen to inspire joy and create lasting
          memories. Explore our wide selection, discover thoughtful surprises,
          and make every occasion truly unforgettable. With just a few clicks,
          you can share love, laughter, and happiness with the people who matter
          most."
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
div {
  animation: fadeIn 0.7s ease-in-out;
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
</style>
