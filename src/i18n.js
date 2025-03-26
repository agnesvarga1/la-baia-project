import { createI18n } from "vue-i18n";

const messages = {
  en: {
    home: "Home",
    about: "About Us",
    menu: "Our Menu",
    book: "Book on Whatsapp",
    location: "Location",
    contact: "Contact",
  },
  it: {
    home: "Home",
    about: "Chi Siamo",
    menu: "Nostro Menu",
    book: "Prenota su Whatsapp",
    location: "Dove Siamo",
    contact: "Contatti",
  },
};

const i18n = createI18n({
  legacy: false, // Needed for Vue 3 Composition API
  locale: "it", // Default language
  fallbackLocale: "it", // Fallback language
  messages,
});

export default i18n;
