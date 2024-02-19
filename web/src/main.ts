/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
// Login components
import CSCard from '@/components/login/CSCard.vue'
// Shared components
import CSDefaultList from '@/components/shared/CSDefaultList.vue'
import CSDefaultListItem from '@/components/shared/CSDefaultListItem.vue'
import CSDefaultListRow from '@/components/shared/CSDefaultListRow.vue'
import CSNavigation from '@/components/shared/CSNavigation.vue'
import CSHeader from '@/components/shared/CSHeader.vue'
import CSListHeader from '@/components/shared/CSListHeader.vue'
import CSListIssues from '@/components/shared/CSListIssues.vue'
// Dashboard components
import CSGraphiscs from '@/components/dashboard/CSGraphics.vue'
import CSSignedIssues from '@/components/dashboard/CSSignedIssues.vue'
import CSUnsignedIssues from '@/components/dashboard/CSUnsignedIssues.vue'
// Projects components
import CSFormProject from '@/components/projects/CSFormProject.vue'
import CSListProject  from '@/components/projects/CSListProject.vue'
import CSViewProject from '@/components/projects/CSViewProject.vue'
// Issues components
import CSFormIssue from '@/components/issues/CSFormIssue.vue'
import CSViewIssue from '@/components/issues/CSViewIssue.vue'
// Users components
import CSListtUser from '@/components/users/CSListUser.vue'
import CSFormUser from '@/components/users/CSFormUser.vue'
import CSViewUser from '@/components/users/CSViewUser.vue'


// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

// Registered components
app
  // Login components
  .component('cs-card', CSCard)
  // Shared components
  .component('cs-list', CSDefaultList)
  .component('cs-list-item', CSDefaultListItem)
  .component('cs-list-row', CSDefaultListRow)
  .component('cs-navigation', CSNavigation)
  .component('cs-header', CSHeader)
  .component('cs-list-header', CSListHeader)
  .component('cs-list-issues', CSListIssues)
  // Dashboard components
  .component('cs-graphics', CSGraphiscs)
  .component('cs-signed-issues', CSSignedIssues)
  .component('cs-unsigned-issues', CSUnsignedIssues)
  // Projects components
  .component('cs-form-project', CSFormProject)
  .component('cs-list-project', CSListProject)
  .component('cs-view-project', CSViewProject)
  // Issues components
  .component('cs-form-issue', CSFormIssue)
  .component('cs-view-issue', CSViewIssue)
  // Users components
  .component('cs-list-user', CSListtUser)
  .component('cs-form-user', CSFormUser)
  .component('cs-view-user', CSViewUser)

registerPlugins(app)

app.mount('#app')
