<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <section id="about" class="d-md-flex w-100 p-0 m-0">
    <div class="row m-0">
      <div class="text-about col-12 col-lg-6 px-3 px-lg-0">
        <h2>{{ t("about") }}</h2>
        <p class="body-dark pt-2 pe-md-3">
          {{ t("desc") }}
        </p>
      </div>
      <figure class="mb-0 col-12 col-lg-6 m-0 p-0">
        <img src="/imgs/about.jpg" alt="about imgage" />
      </figure>
    </div>
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
figure {
  height: auto;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 992px) {
    img {
      object-fit: cover;
    }
  }
}
</style>
