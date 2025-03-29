import { createI18n } from "vue-i18n";

const messages = {
  en: {
    home: "Home",
    about: "About Us",
    menu: "Our Menu",
    book: "Book on Whatsapp",
    location: "Location",
    contact: "Contact",
    welcome: "Welcome to the Baia",
    actionBtn: "Book now",
  },
  it: {
    home: "Home",
    about: "Chi Siamo",
    menu: "Nostro Menu",
    book: "Prenota su Whatsapp",
    location: "Dove Siamo",
    contact: "Contatti",
    welcome: "Benvenuti alla Baia",
    actionBtn: "Prenota ora",
  },
};
// Create Vue I18n instance
export const i18n = createI18n({
  legacy: false, // Needed for Vue 3 Composition API
  locale: localStorage.getItem("lang") || "it", // Default language
  fallbackLocale: "it",
  messages,
});
