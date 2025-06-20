import { createApp } from 'vue'
import store from './stores'

import router from './router.js'
import App from './App.vue'
import BaseBadge from './components/ui/BaseBadge.vue'

const app = createApp(App)

app.use(router)
app.use(store)

app.component('base-badge', BaseBadge)

app.mount('#app')
