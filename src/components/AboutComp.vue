<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <section id="about" class="pt-3 d-md-flex">
    <div class="text-about px-2 ps-md-2">
      <h2>{{ t("about") }}</h2>
      <p class="body-dark pt-2 pe-md-3">
        {{ t("desc") }}
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
  color: $second;
}
h1 {
  font-family: "Cormorant Garamond", serif;
  font-size: 3rem;
  color: $dark-text;
}
p {
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: $dark-text;
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
    height: 400px; /* or set a specific height like 300px */
    display: flex;
    // border: 2px solid blue;
    img {
      height: 100%;
      width: auto;
      object-fit: cover;
    }
  }
}

// @media (min-width: 992px) {
//   .text-about {
//     width: calc(100% / 1.1);
//   }
// }
</style>
