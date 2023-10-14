/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import CSHeader from '@/components/shared/CSHeader.vue'
import Card from '@/components/login/Card.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

// Registered components
app
  .component('cs-header', CSHeader)
  .component('cs-card', Card)


registerPlugins(app)

app.mount('#app')
