<script setup>
import { useNavbarStore } from "../stores/useNavbarStore";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
const { t } = useI18n();
const navbarStore = useNavbarStore();
</script>
<template>
  <nav
    :class="{ 'scrolled-navbar': navbarStore.isScrolled }"
    class="d-none d-lg-block full-width-navbar"
  >
    <div class="navbar-content container">
      <router-link :to="{ name: 'home' }">
        <figure class="mb-0">
          <img class="logo rounded" src="/imgs/logo.jpg" alt="logo" />
        </figure>
      </router-link>
      <ul class="d-flex align-items-center gap-4 mb-0">
        <li>
          <router-link :to="{ name: 'home' }">{{ t("home") }}</router-link>
        </li>
        <li>
          <a href="#about">{{ t("about") }}</a>
        </li>
        <li>
          <a href="#">{{ t("menu") }}</a>
        </li>
        <li>
          <a href="#">{{ t("book") }}</a>
        </li>
        <li>
          <a href="#location">{{ t("location") }}</a>
        </li>
        <li>
          <a href="#contact">{{ t("contact") }}</a>
        </li>

        <!-- Language Switcher -->
        <li class="language-switcher">
          <button
            @click="navbarStore.switchLanguage('en')"
            :class="{ active: navbarStore.locale === 'en' }"
          >
            <span class="flag fi fi-gb"></span>
          </button>
        </li>
        <li class="language-switcher">
          <button
            @click="navbarStore.switchLanguage('it')"
            :class="{ active: navbarStore.locale === 'it' }"
          >
            <span class="flag fi fi-it"></span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";
nav.full-width-navbar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  &.scrolled-navbar {
    // Dark transparent background when scrolled
    background-color: #00000053; // Slightly darker when scrolled
  }
}

.navbar-content {
  max-width: 1200px; // Set a max width for content
  margin: 0 auto; // Center the content
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem; // Add some spacing
}
.logo {
  width: 120px;
}

ul {
  li {
    color: $va-text-light;

    a {
      color: $va-text-light;
      font-family: "Urbanist", sans-serif;

      display: inline-block;
      padding: 5px 10px;
      position: relative;
      font-size: 1.3rem;
    }
    a:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: #fff;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    a:hover:after {
      width: 100%;
      left: 0;
    }
    .selected {
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: #fff;
    }
  }
}

/* --------------- Flag Styling --------------- */
.language-switcher {
  button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    color: $va-text-light;

    .flag {
      width: 24px;
      height: 16px;
    }

    &.active {
      display: none;
    }
  }
}
</style>
