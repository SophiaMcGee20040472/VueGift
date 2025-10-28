<template>
  <nav class="nav">
    <div class="nav-container">
      <div class="nav-inner">
        <!-- Logo -->
        <div class="nav-logo">
          <a href="/" class="nav-logo-link">
            <img
              src="@/assets/logo1.jpg"
              alt="VueGift Logo"
              class="nav-logo-img"
            />
            <span class="nav-logo-text">VueGift</span>
          </a>
        </div>

        <!-- Desktop Links -->
        <div class="nav-links">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            class="nav-link"
            :class="{ 'nav-link-active': activeLink === item.name }"
            @click.prevent="setActive(item.name, item.href)"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <div class="nav-mobile-toggle">
          <button
            @click="toggleMenu"
            type="button"
            class="nav-toggle-btn"
            aria-controls="mobile-menu"
            :aria-expanded="isMenuOpen"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="!isMenuOpen"
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-fade">
      <div v-if="isMenuOpen" id="mobile-menu" class="nav-mobile-menu">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="nav-mobile-link"
          :class="{ 'nav-link-active': activeLink === item.name }"
          @click.prevent="setActive(item.name, item.href)"
        >
          {{ item.name }}
        </a>
      </div>
    </Transition>

    <!-- Breadcrumbs -->
    <div v-if="breadcrumbs.length > 1" class="breadcrumb-container">
      <div class="breadcrumb-inner">
        <nav class="breadcrumb">
          <ol class="breadcrumb-list">
            <li
              v-for="(crumb, index) in breadcrumbs"
              :key="index"
              class="breadcrumb-item"
            >
              <a
                v-if="index !== breadcrumbs.length - 1"
                :href="crumb.href"
                class="breadcrumb-link"
              >
                {{ crumb.name }}
              </a>
              <span v-else class="breadcrumb-current">{{ crumb.name }}</span>
            </li>
          </ol>
          <a href="#" class="breadcrumb-back" @click.prevent="goBack">
            ← Back
          </a>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isMenuOpen = ref(false);
const activeLink = ref("Home");

const navItems = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "Shopping", href: "/trending" },
  { name: "Gifts", href: "/gift-ideas" },
  { name: "Contact", href: "/contact-us" },
  { name: "🛒Cart", href: "/cart" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const setActive = (name, href) => {
  activeLink.value = name;
  isMenuOpen.value = false;
  window.location.href = href;
};

const breadcrumbs = ref([]);

onMounted(() => {
  const pathSegments = window.location.pathname.split("/").filter(Boolean);
  const crumbs = [];

  pathSegments.forEach((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const name =
      segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
    crumbs.push({ name, href });
  });

  breadcrumbs.value = [{ name: "Home", href: "/" }, ...crumbs];
});

const goBack = () => {
  window.history.back();
};
</script>

<style scoped>
.nav {
  background-color: white;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  color: #111827;
}

.nav-logo-img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 8px;
  border-radius: 6px;
}

.nav-logo-text {
  font-size: 1.5rem;
}

.nav-links {
  display: none;
}

.nav-link {
  margin: 0 1rem;
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
}

.nav-link:hover {
  color: #fe019a;
}

.nav-link-active {
  color: #666666;
  font-weight: 600;
}

.nav-mobile-toggle {
  display: block;
}

.nav-toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
}

.nav-icon {
  width: 1.75rem;
  height: 1.75rem;
  color: #111827;
}

.nav-mobile-menu {
  display: flex;
  flex-direction: column;
  background: white;
  border-top: 1px solid #eee;
  padding: 1rem;
}

.nav-mobile-link {
  padding: 0.75rem 0;
  color: #4b5563;
  font-weight: 500;
  text-decoration: none;
}

.nav-mobile-link:hover {
  color: #fe019a;
}

.breadcrumb-container {
  background-color: seashell;
  border-top: 1px solid #eee;
  padding: 0.75rem 0;
}

.breadcrumb-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem; 
}

@media (max-width: 768px) {
  .breadcrumb-inner {
    padding: 0 1rem;
  }
}

@media (min-width: 1200px) {
  .breadcrumb-inner {
    padding:0 2.5rem; 
  }
}

.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.breadcrumb-item::after {
  content: "/";
  margin-left: 0.5rem;
  color: #9ca3af;
}

.breadcrumb-item:last-child::after {
  content: "";
}

.breadcrumb-link {
  color: #fe019a;
  text-decoration: none;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.breadcrumb-current {
  font-weight: 600;
  color: #111827;
}

.breadcrumb-back {
  color: #fe019a;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
}

.breadcrumb-back:hover {
  text-decoration: underline;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
  .nav-mobile-toggle {
    display: none;
  }
}

@media (max-width: 767px) {
  .nav-logo-img {
    width: 32px;
    height: 32px;
  }
  .nav-logo-text {
    font-size: 1.25rem;
  }
}
</style>
