import { createApp } from "vue";
import Minze from "minze";
import "./style.css";
import App from "./App.vue";

import { MinzeHello, MinzeHanasa } from "./components/minze";

Minze.defineAll([MinzeHello, MinzeHanasa]);

createApp(App).mount("#app");
