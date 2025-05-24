import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";

const app = createApp(App);

// If registered here, these components will be available across the entire application
app.component("base-badge", BaseBadge);

app.mount("#app");
