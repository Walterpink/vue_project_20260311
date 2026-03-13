import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/Pages/Home.vue";
import About from "@/Pages/About.vue";
import News from "@/Pages/News.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/news",
      name: "News",
      component: News,
    },
  ],
});

export default router;
