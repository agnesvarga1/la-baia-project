<script setup>
import { ref } from "vue";
import { store } from "../store";
import Hamburger from "./Hamburger.vue";
const isNavOpen = ref(false);
const toggleNavbar = () => {
  isNavOpen.value = !isNavOpen.value;
};
</script>

<template>
  <nav
    class="d-flex justify-content-between align-items-start position-fixed start-0 end-0 p-3 h-100"
  >
    <figure class="">
      <img class="logo rounded" src="/imgs/logo.jpg" alt="logo" />
    </figure>
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
        <li v-for="link in store.navLinkList">
          <a href="">{{ link }}</a>
        </li>
      </ul>
    </transition>
  </nav>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";

nav {
  color: $va-text-light;
  .logo {
    width: 5rem;
  }
  ul {
    background-color: #baaea3d5;
    padding-top: 60px;
    width: 100%;
    li {
      font-size: 2rem;
      a {
        color: $va-text-light;
      }
    }
  }

  .no-bg {
    background-color: transparent;
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
