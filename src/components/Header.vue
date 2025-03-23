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
  height: 95vh;
  background: url("/imgs/bg-img-1.jpg") no-repeat center;
  background-size: cover;
}
</style>
