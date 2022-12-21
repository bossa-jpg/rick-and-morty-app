import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/main.css";
import cors from "cors";

import router from "./router";

const app = createApp(App).use(router).use(cors());

app.mount("#app");
