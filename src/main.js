import { createApp } from "vue";
import App from "./App.vue";
import quasar from "./plugins/quasar";

const app = createApp(App);

app.use(quasar);

app.mount("#app");
