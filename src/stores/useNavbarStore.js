import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";
import { i18n } from "../i18n";
export const useNavbarStore = defineStore("navbar", () => {
  // Navbar state
  const isScrolled = ref(false);

  // Language state
  const locale = ref(localStorage.getItem("lang") || "it"); // Default to Italian
  i18n.global.locale.value = locale.value;
  // Change language
  const switchLanguage = (lang) => {
    locale.value = lang; // Update store locale
    i18n.global.locale.value = lang; // Update i18n
    localStorage.setItem("lang", lang);
  };

  // Detect scroll to change navbar background
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
  };

  // Add event listener for scrolling
  watchEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return {
    isScrolled,
    locale,
    switchLanguage,
  };
});
