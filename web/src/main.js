/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import CSHeader from '@/components/shared/CSHeader.vue'
import CSCard from '@/components/login/CSCard.vue'
import CSGraphiscs from '@/components/dashboard/CSGraphics.vue'
import CSUnsignedIssues from '@/components/dashboard/CSUnsignedIssues.vue'
import CSSignedIssues from '@/components/dashboard/CSSignedIssues.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

// Registered components
app
  .component('cs-header', CSHeader)
  .component('cs-card', CSCard)
  .component('cs-graphics', CSGraphiscs)
  .component('cs-unsigned-issues', CSUnsignedIssues)
  .component('cs-signed-issues', CSSignedIssues)

registerPlugins(app)

app.mount('#app')
