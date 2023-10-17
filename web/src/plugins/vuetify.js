/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import { md2 } from 'vuetify/blueprints'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/styles/custom.css'

// Composables
import { createVuetify } from 'vuetify'

const csTheme = {
  dark: false,
  colors: {
    primary: '#526D82',
    secondary: '#27374D',
    accent: '#9DB2BF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    background: '#FFF',
    maingrey: '#f8f9fb'
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md2,
  theme: {
    defaultTheme: 'csTheme',
    themes: {
      csTheme
    }
  },
})
