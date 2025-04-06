import { createRouter, createWebHistory } from "vue-router"; //webhistory salva browser history in pagina to enable back arrow in browser

import AppHome from "./pages/AppHome.vue";
import AppMenu from "./pages/AppMenu.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      props: true,
      name: "home",
      component: AppHome,
    },
    {
      path: "/menu",
      props: true,
      name: "menu",
      component: AppMenu,
    },
  ],
});
export { router };
