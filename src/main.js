import { createApp } from "vue";
//import './style.css'
import App from "./App.vue";
// Import Bootstrap's JS
import "bootstrap";
import { router } from "./router";
import { createI18n } from "vue-i18n";
// Import custom SCSS file

const i18n = createI18n({
  locale: "it", // Default language
  fallbackLocale: "en",
});

import "../src/assets/styles/general.scss";
createApp(App).use(i18n).use(router).mount("#app");
