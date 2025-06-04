<script setup>
import NavbarLG from "../components/NavbarLG.vue";
import NavbarSM from "../components/NavbarSM.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="container h-100 position-relative">
    <NavbarLG class="position-fixed"></NavbarLG>
    <NavbarSM class="d-lg-none"></NavbarSM>
  </div>
  <h2 class="text-center">Coming Soon...</h2>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";
.container {
  background-color: $second;
}
h2 {
  padding-top: 10rem;
}
</style>
