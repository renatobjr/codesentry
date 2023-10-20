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
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";


// Composables
import { createVuetify } from 'vuetify'

const csTheme = {
  dark: false,
  colors: {
    primary: '#1C2826',
    secundary: '#5398BE',
    accent: '#9DB2BF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    background: '#FFF',
    maingrey: '#f8f9fb',
    // issues status coloar
    open: '#ffb6c1',
    inProgress: '#ffd700',
    waitingFeedback: '#87ceeb',
    solved: '#98fb98',
    closed: '#f08080',
    rejected: '#d3d3d3',
    assigned: '#dda0dd',
    duplicated: '#bc8f8f',
    // Customo background panels
    panel: '#CFD8DC',

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
  components: {
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
  },
})
