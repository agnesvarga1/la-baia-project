import { createRouter, createWebHistory } from "vue-router"; //webhistory salva browser history in pagina to enable back arrow in browser

import AppHome from "./pages/AppHome.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      // path: '/:lang/home',
      path: "/",
      props: true,
      name: "home",
      component: AppHome,
    },
    // { path: "/:lang(.*)*", redirect: "/it/home" },
  ],
});
export { router };
