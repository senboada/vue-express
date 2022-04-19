import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/styles/_theme.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

createApp(App).use(store).use(Datepicker).use(router).mount("#app");
