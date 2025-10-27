<template>
  <div class="gift-container">
    <h2 class="general-space margin-top text-2xl items-center text-pink-500">
      Gift Categories
    </h2>

    <div
      class="grid grid-cols-2 sm:grid-cols- md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
    >
      <div
        v-for="card in cards"
        :key="card.title"
        class="gift-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <div class="gift-image-wrapper w-full h-32 overflow-hidden">
          <img
            :src="card.image"
            :alt="card.alt"
            class="gift-image w-full h-full object-cover"
          />
        </div>
        <div class="gift-content p-3">
          <div
            class="gift-category text-xs text-pink-500 font-semibold uppercase mb-1"
          >
            {{ card.category }}
          </div>
          <a
            href="#"
            class="gift-title block text-sm font-bold hover:underline text-gray-800"
          >
            {{ card.title }}
          </a>
          <p class="gift-description text-xs text-gray-600 mt-1 line-clamp-2">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    category: "Gift Ideas",
    title: "Creative Gifts for every occasions",
    description: "Discover gifts that stand out.",
    image:
      "https://kimandcarrie.com/wp-content/uploads/2022/04/reusable-flight-attendant-goodie-bags.png",
    alt: "Gift wrapping",
  },
  {
    category: "Personalized",
    title: "How to Create Personalized Gifts",
    description:
      "Learn how to add a personal touch to your gifts and make them unforgettable.",
    image: "https://i.ebayimg.com/images/g/P6YAAOSwDkJfXTN3/s-l1200.jpg",
    alt: "Personalized gifts",
  },
  {
    category: "DIY Gifts",
    title: "Easy DIY Gift Ideas for Any Occasion",
    description: "Find Creative DIY gift ideas that anyone can make at home.",
    image:
      "https://cdn.shopify.com/s/files/1/2690/0106/files/il_fullxfull.5481853980_iqdd_480x480.jpg?v=1719998612",
    alt: "DIY gifts",
  },
  {
    category: "Luxury Gifts",
    title: "Elegant Hampers and Gourmet Treats",
    description:
      "Explore curated hampers filled with premium delicacies for special occasions.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMKBSZ26nr9ZGuwER3G2H1NluIDTcXLgvQw&s",
    alt: "Luxury gifts",
  },
  {
    category: "Eco-Friendly",
    title: "Sustainable Gift Options",
    description:
      "Choose thoughtful, eco-friendly gifts that help protect our planet.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSmEleOjP1MeJ38iAo3PEOIpZ7nqBZkrBlJA&s",
    alt: "Eco gifts",
  },
  {
    category: "Experience Gifts",
    title: "Unforgettable Gift Experiences",
    description:
      "Give the gift of memories with experience-based presents for all interests.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    alt: "Experience gifts",
  },
];
</script>

<style scoped>
.gift-container {
  max-width: 1400px;
  margin: 0 auto;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
