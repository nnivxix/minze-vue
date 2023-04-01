import { createApp } from "vue";
import Minze from "minze";
import "./style.css";
import App from "./App.vue";

import { minze } from "./components/minze";

const { MinzeHello, MinzeHanasa } = minze;

Minze.defineAll([MinzeHello, MinzeHanasa]);

createApp(App).mount("#app");
