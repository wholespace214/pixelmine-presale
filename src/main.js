import { createApp } from "vue";
import { createPinia } from "pinia";
import { createWebHistory } from "vue-router";
import Toaster from "@meforma/vue-toaster";
import mitt from "mitt";

// Custom Plugins
import ethers from "./util/ethers.js";

import createRouter from "./pages/routes.js";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/card.css";
import "./assets/css/style.css";

const emitter = mitt();
const store = createPinia();
const router = createRouter(createWebHistory());
const app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.use(Toaster).use(ethers, {}).use(router).use(store).mount("#app");
