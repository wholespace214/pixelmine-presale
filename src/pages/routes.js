import { createRouter } from "vue-router";
import HomeLanding from "./home/HomeLanding.vue";
import PresalePage from "./presale/Presale.vue";

const routes = [
  {
    path: "/",
    component: HomeLanding,
  },
  {
    path: "/presale/",
    component: PresalePage,
  },
];

export default function (history) {
  return createRouter({
    history,
    routes,
  });
}
