<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <section id="about" class="pt-3 d-md-flex">
    <div class="text-about px-2 ps-md-2">
      <h2>{{ t("about") }}</h2>
      <p class="body-dark pt-2 pe-md-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <figure class="mb-0">
      <img src="/imgs/about.jpg" alt="about imgage" />
    </figure>
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
  font-size: 1.2rem;
  line-height: 1.5rem;
}
img {
  width: 100%;
}

@media (min-width: 768px) {
  // .text-about {
  //   //width: 50%;
  //   //  border: 2px solid red;
  // }
  figure {
    height: 290px; /* or set a specific height like 300px */
    display: flex;
    // border: 2px solid blue;
    img {
      height: 100%;
      width: auto;
      object-fit: cover;
    }
  }
}

@media (min-width: 992px) {
  .text-about {
    width: calc(100% / 1.1);
  }
}
</style>
