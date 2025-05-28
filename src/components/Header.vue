<script setup>
import NavbarSM from "./NavbarSM.vue";
import NavbarLG from "./NavbarLG.vue";
</script>

<template>
  <header class="bg-head-container position-relative">
    <div class="container h-100 position-relative">
      <NavbarLG class="position-fixed"></NavbarLG>
      <NavbarSM class="d-lg-none"></NavbarSM>
    </div>
  </header>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";

.bg-head-container {
  height: 90vh;
  overflow: hidden;
}

.bg-head-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/imgs/sunset.jpg") no-repeat center;
  background-size: cover;
  // background-position: 50% 80%;
  opacity: 0;
  animation: fadeInBg 2s ease-in-out forwards;
  z-index: -1; /* keep it behind the content */
}

@keyframes fadeInBg {
  to {
    opacity: 1;
  }
}

@media (min-width: 992px) {
  .bg-head-container::before {
    background-position: 50% 70%;
  }
}
</style>
