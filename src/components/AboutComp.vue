<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <section id="about" class="pt-3">
    <h2>{{ t("about") }}</h2>
    <p class="body-dark">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </section>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";

h2 {
  font-size: 2.5rem;
  color: $va-prime;
}
h1 {
  font-family: "Cormorant Garamond", serif;
  font-size: 3rem;
}
p {
  font-size: 1rem;
  line-height: 1.5rem;
}
</style>
