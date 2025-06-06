<script setup>
import { useNavbarStore } from "../stores/useNavbarStore";
import Header from "../components/Header.vue";
import AboutComp from "../components/AboutComp.vue";
import WhatsappBtn from "../components/WhatsappBtn.vue";
import CTAMenu from "../components/CTAMenu.vue";
import LocationComp from "../components/LocationComp.vue";
import ContactUs from "../components/ContactUs.vue";
import Footer from "../components/Footer.vue";
import { useI18n } from "vue-i18n";
import { useHead } from "@vueuse/head";
import { onMounted, ref } from "vue";
const { t } = useI18n();
const navbarStore = useNavbarStore();
console.log(t("meta.description"));
useHead({
  title: t("meta.title"),
  meta: [
    {
      name: "description",
      content: t("meta.description"),
    },
    {
      name: "keywords",
      content: t("meta.keywords"),
    },
  ],
});

const showH1 = ref(false);
onMounted(() => {
  setTimeout(() => {
    showH1.value = true;
  }, 100); // small delay helps with smooth entry
});
</script>

<template>
  <Header></Header>

  <div class="container-lg p-0 mx-md-0 mx-lg-auto">
    <WhatsappBtn class="whatsapp-btn"></WhatsappBtn>
    <transition name="slide">
      <h1 v-if="showH1" class="text-center py-2">
        {{ t("welcome") }}
      </h1>
    </transition>
    <AboutComp></AboutComp>
    <CTAMenu></CTAMenu>
    <LocationComp></LocationComp>
    <ContactUs></ContactUs>
    <Footer></Footer>
  </div>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";
.wrapper {
  position: relative;
}
h1 {
  font-size: 2rem;
}

.container-lg {
  position: relative;
  .whatsapp-btn {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 10;
    &.scrolled-position {
      bottom: 1rem;
    }
    // @media (min-width: 576px) {
    //   right: calc((100vw - 540px) / 2);
    // }

    // @media (min-width: 768px) {
    //   right: calc((100vw - 720px) / 2);
    // }

    @media (min-width: 992px) {
      right: calc((100vw - 960px) / 2);
      bottom: 1rem;
      right: 1rem;
      .container-lg {
        width: 100% !important;
      }
      h1 {
        font-size: 3.5rem;
      }
    }

    @media (min-width: 1200px) {
      right: calc((100vw - 1140px) / 2);
    }

    @media (min-width: 1400px) {
      right: calc((100vw - 1320px) / 2);
    }
    .scrolled-position {
      bottom: 1rem;
    }
  }
}
h1 {
  font-family: "Cormorant Garamond", serif;
  color: $second;
}

.slide-enter-active {
  transition: transform 2s ease, opacity 2s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}
</style>
