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
  <header class="bg-head-container">
    <Hamburger
      class="position-absolute z-3 top-0 end-0 d-lg-none"
      :isOpen="isNavOpen"
      @toggle="toggleNavbar"
    ></Hamburger>
    <transition name="slide">
      <NavbarSM
        v-if="isNavOpen"
        class="position-absolute z-2 top-0 start-0 end-0"
      ></NavbarSM>
    </transition>
    <div class="container d-flex h-100">
      <div class="p-3 w-50">
        <figure>
          <img class="logo rounded" src="/imgs/logo.jpg" alt="logo" />
        </figure>
      </div>
      <div
        class="d-flex flex-column p-3 w-50 justify-content-end align-items-end"
      >
        <WhatsappBtn></WhatsappBtn>
      </div>
    </div>
  </header>
  <h1 class="p-2">Test Title</h1>
  <h2 class="p-2">Test Subtitle</h2>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";
.bg-head-container {
  height: 85vh;
  background: url("/imgs/bg-img-1.jpg") no-repeat center;
  background-size: cover;
  .logo {
    width: 6rem;
  }

  .whapp {
    background-color: #00000053;
    width: 5rem;
    height: 5rem;

    #whatsapp-icon {
      fill: $va-text-light;
      width: 100%;
    }
    .fth {
      width: 2.5rem;
    }
    .svg-txt {
      margin-top: 0.8rem;
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

  @media (min-width: 992px) {
    .logo {
      width: 200px;
    }
  }
}
</style>
