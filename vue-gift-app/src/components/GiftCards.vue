<template>
  <div class="gift-container ">
    <h2 class="general-space margin-top text-2xl items-center text-pink-500 ">Gift Ideas</h2>
    <div class="gift-grid bg-white">
      <div v-for="card in cards" :key="card.title" class="gift-card">
        <div class="gift-image-wrapper">
          <img :src="card.image" :alt="card.alt" class="gift-image" />
        </div>
        <div class="gift-content">
          <div class="gift-category text-pink-500">
            {{ card.category }}
          </div>
          <a href="#" class="gift-title">
            {{ card.title }}
          </a>
          <p class="gift-description">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    category: "Gift Ideas",
    title: "Creative Gift Wrapping Techniques",
    description:
      "Discover unique ways to wrap your gifts and make them stand out this holiday season.",
    image:
      "https://images.pexels.com/photos/842876/pexels-photo-842876.jpeg?cs=srgb&dl=pexels-wordsurfer-842876.jpg&fm=jpg",
    alt: "Gift wrapping",
  },
  {
    category: "Personalized Gifts",
    title: "How to Create Personalized Gifts",
    description:
      "Learn how to add a personal touch to your gifts and make them unforgettable.",
    image: "https://travelmag.com/wp-content/uploads/2021/11/FlightGift.png",
    alt: "Personalized gifts",
  },
  {
    category: "DIY Gifts",
    title: "Easy DIY Gift Ideas for Any Occasion",
    description:
      "Find simple and creative DIY gift ideas that anyone can make at home.",
    image:
      "https://www.burrensmokehouse.com/wp-content/uploads/2022/02/Luxury-Hamper-Web-cc.jpg",
    alt: "DIY gifts",
  },
];
</script>
