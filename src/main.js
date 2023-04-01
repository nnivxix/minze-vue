import { createApp } from "vue";
import Minze from "minze";
import "./style.css";
import App from "./App.vue";

import { MinzeHello, MinzeHanasa, MinzeLooping } from "./components/minze";

Minze.defineAll([MinzeHello, MinzeHanasa, MinzeLooping]);

createApp(App).mount("#app");
