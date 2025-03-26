<script setup>
import { store } from "../store";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

// Function to change the language
const switchLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem("lang", lang);
};
</script>
<template>
  <nav class="d-none d-lg-flex alig-items-center justify-content-between pt-2">
    <figure class="">
      <img class="logo rounded" src="/imgs/logo.jpg" alt="logo" />
    </figure>
    <ul class="d-flex justify-content-end align-items-center gap-5 mb-0">
      <li>
        <a href="#">{{ t("home") }}</a>
      </li>
      <li>
        <a href="#about">{{ t("about") }}</a>
      </li>
      <li>
        <a href="#">{{ t("menu") }}</a>
      </li>
      <li>
        <a href="#">{{ t("book") }}</a>
      </li>
      <li>
        <a href="#location">{{ t("location") }}</a>
      </li>
      <li>
        <a href="#contact">{{ t("contact") }}</a>
      </li>

      <!-- Language Switcher -->
      <li class="language-switcher">
        <button
          @click="switchLanguage('en')"
          :class="{ active: locale === 'en' }"
        >
          <span class="flag fi fi-gb"></span>
        </button>
      </li>
      <li class="language-switcher">
        <button
          @click="switchLanguage('it')"
          :class="{ active: locale === 'it' }"
        >
          <span class="flag fi fi-it"></span>
        </button>
      </li>
    </ul>
  </nav>
</template>
<style scoped lang="scss">
@import "/src/assets/styles/variables";
nav {
  gap: 8rem;
  .logo {
    width: 150px;
  }
  ul {
    li {
      color: $va-text-light;

      a {
        color: $va-text-light;
        font-size: 1.5rem;
      }
      &:hover {
        border-bottom: 1px solid $va-text-light;
      }
    }
  }

  /* --------------- Flag Styling --------------- */
  .language-switcher {
    button {
      background: none;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      color: $va-text-light;

      .flag {
        width: 24px;
        height: 16px;
      }

      &.active {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
}
</style>
