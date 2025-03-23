<script setup>
import { ref } from "vue";
import WhatsappBtn from "./WhatsappBtn.vue";
import NavbarSM from "./NavbarSM.vue";
import Hamburger from "./Hamburger.vue";
const isNavOpen = ref(false);
const toggleNavbar = () => {
  isNavOpen.value = !isNavOpen.value;
};
</script>

<template>
  <header class="bg-head-container position-relative">
    <div class="container h-100 position-relative">
      <div
        class="position-fixed d-flex justify-content-between mt-2 p-2 z-3 w-100"
      >
        <figure class="">
          <img class="logo rounded" src="/imgs/logo.jpg" alt="logo" />
        </figure>
        <Hamburger
          class="d-lg-none"
          :isOpen="isNavOpen"
          @toggle="toggleNavbar"
        ></Hamburger>
      </div>
    </div>
    <transition name="slide">
      <NavbarSM
        v-if="isNavOpen"
        class="position-absolute z-2 top-0 start-0 end-0"
      ></NavbarSM>
    </transition>
  </header>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";
.bg-head-container {
  height: 95vh;
  background: url("/imgs/bg-img-1.jpg") no-repeat center;
  background-size: cover;
  .logo {
    width: 4rem;
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
  div a WhatsappBtn {
    cursor: pointer;
  }
  @media (min-width: 992px) {
    .logo {
      width: 200px;
    }
  }
}
</style>
