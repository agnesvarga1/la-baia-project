import { createApp } from "vue";
//import './style.css'
import App from "./App.vue";
// Import Bootstrap's JS
import "bootstrap";
import { router } from "./router";
import i18n from "./i18n";
import "flag-icons/css/flag-icons.min.css";
// Import custom SCSS file

import "../src/assets/styles/general.scss";
createApp(App).use(i18n).use(router).mount("#app");
