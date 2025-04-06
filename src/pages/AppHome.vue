<script setup>
import Header from "../components/Header.vue";
import AboutComp from "../components/AboutComp.vue";
import WhatsappBtn from "../components/WhatsappBtn.vue";
import CTAMenu from "../components/CTAMenu.vue";
import LocationComp from "../components/LocationComp.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <Header></Header>
  <div class="container p-0">
    <div class="whatsapp-btn">
      <a class="" href=""><WhatsappBtn></WhatsappBtn></a>
    </div>
    <h1 class="text-center">{{ t("welcome") }}</h1>
    <AboutComp></AboutComp>
    <CTAMenu></CTAMenu>
    <LocationComp></LocationComp>
  </div>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";
.container {
  position: relative;
  .whatsapp-btn {
    position: fixed;
    bottom: 1rem;
    right: 1rem;

    @media (min-width: 576px) {
      right: calc((100vw - 540px) / 2);
    }

    @media (min-width: 768px) {
      right: calc((100vw - 720px) / 2);
    }

    @media (min-width: 992px) {
      right: calc((100vw - 960px) / 2);
    }

    @media (min-width: 1200px) {
      right: calc((100vw - 1140px) / 2);
    }

    @media (min-width: 1400px) {
      right: calc((100vw - 1320px) / 2);
    }
  }
}
h1 {
  font-family: "Cormorant Garamond", serif;
  font-size: 3.5rem;
  color: $va-second;
}
</style>
