<script setup>
import { store } from "../store";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useNavbarStore } from "../stores/useNavbarStore";
import Hamburger from "./Hamburger.vue";
import { RouterLink } from "vue-router";

const isNavOpen = ref(false);
const { t } = useI18n();
const navbarStore = useNavbarStore();
//nav bar fns
const toggleNavbar = () => {
  isNavOpen.value = !isNavOpen.value;
};

const closeNavbar = () => {
  isNavOpen.value = false;
};
</script>

<template>
  <nav
    :class="{ 'scrolled-navbar': navbarStore.isScrolled, open: isNavOpen }"
    class="d-flex justify-content-between align-items-start position-fixed start-0 end-0 px-3 pt-2"
  >
    <router-link :to="{ name: 'home' }">
      <figure class="">
        <img class="logo rounded" src="/imgs/logo.jpg" alt="logo" />
      </figure>
    </router-link>

    <Hamburger
      class="d-lg-none postion-absolute top-0 end-0 z-3"
      :isOpen="isNavOpen"
      @toggle="toggleNavbar"
    ></Hamburger>
    <transition name="slide">
      <ul
        v-if="isNavOpen"
        class="d-flex flex-column align-items-start gap-3 position-absolute z-1 top-0 start-0 end-0 h-100 pe-3"
      >
        <li @click="closeNavbar">
          <router-link :to="{ name: 'home' }">{{ t("home") }}</router-link>
        </li>
        <li @click="closeNavbar">
          <a href="#about">{{ t("about") }}</a>
        </li>
        <li @click="closeNavbar">
          <router-link :to="{ name: 'menu' }"> {{ t("menu") }}</router-link>
        </li>
        <li @click="closeNavbar">
          <a :href="store.whatsappUrl" target="blank">{{ t("book") }}</a>
        </li>
        <li @click="closeNavbar">
          <a href="#location">{{ t("location") }}</a>
        </li>
        <li @click="closeNavbar">
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
          <button
            @click="navbarStore.switchLanguage('it')"
            :class="{ active: navbarStore.locale === 'it' }"
          >
            <span class="flag fi fi-it"></span>
          </button>
        </li>
      </ul>
    </transition>
  </nav>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";

nav {
  color: $second;
  z-index: 8;
  &.scrolled-navbar {
    // Dark transparent background when scrolled
    background-color: $prime-transparent;
  }
  &.open {
    height: 100vh;
  }
  .logo {
    width: 5rem;
  }
  ul {
    background-color: $prime-transparent;
    padding-top: 60px;
    width: 100%;

    li {
      font-size: 2rem;
      a {
        color: $dark-text;
        font-family: "Urbanist", sans-serif;
      }
    }
  }

  .no-bg {
    background-color: transparent;
  }

  /* --------------- Flag Styling --------------- */
  .language-switcher {
    display: flex;
    gap: 10px;
    margin-top: 20px;

    button {
      background: none;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      // color: $va-text-light;

      .flag {
        width: 24px;
        height: 16px;
      }

      &.active {
        display: none;
      }
    }
  }

  /* ---------------  navbar sm transition*/

  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
  .slide-enter-to,
  .slide-leave-from {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
