import { createI18n } from "vue-i18n";

const messages = {
  en: {
    home: "Home",
    about: "About Us",
    menu: "Our Menu",
    book: "Book on Whatsapp",
    location: "Location",
    contact: "Contacts",
    welcome: "Welcome to the Baia",
    actionBtn: "Book now",
    perMenu: "Read Our Menu",
    desc: "La Baia is located in a quiet spot with a view of Lake Garda.Our menu features grilled meat and fish dishes, along with reinterpreted traditional Italian recipes with a modern twist.We use carefully selected, seasonal ingredients to highlight the authentic flavors of Italian cuisine. To complete the experience, we offer a wine list that includes both local and national labels, thoughtfully paired with our dishes.The atmosphere is simple and welcoming—perfect for those looking to enjoy good food in a relaxing setting, with the added bonus of a lovely lake view.",
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
    perMenu: "Leggi Nostro Menu",
    desc: "La Baia si trova in una posizione tranquilla con vista sul Lago di Garda.La nostra cucina propone piatti di carne e pesce alla brace, insieme a ricette italiane tradizionali rivisitate con un tocco moderno.Utilizziamo ingredienti selezionati e di stagione, cercando di valorizzare i sapori autentici della cucina italiana. A completare l’esperienza, una carta dei vini che include etichette locali e nazionali, pensata per accompagnare al meglio ogni piatto.L’ambiente è semplice e curato, ideale per chi cerca una buona cucina in un contesto rilassante, con la possibilità di godere di una bella vista sul lago.",
  },
};
// Create Vue I18n instance
export const i18n = createI18n({
  legacy: false, // Needed for Vue 3 Composition API
  locale: localStorage.getItem("lang") || "it", // Default language
  fallbackLocale: "it",
  messages,
});
