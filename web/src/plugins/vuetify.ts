/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import { md2 } from "vuetify/blueprints";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@/styles/custom.css";
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";

// Composables
import { createVuetify } from "vuetify";

const csTheme = {
  dark: false,
  colors: {
    background: "#F5F5F5",
    surface: "#fafafa",
    primary: "#0A2239",
    secondary: "#52D1DC",
    accent: "#42BFDD",
    error: "#F44336",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#BF360C",
    panel: '#CFD8DC',
    "navigator-active": '#ECEFF1',
    "on-background": "#000000",
    "on-surface": "#000000",
    database: "#52D1DC",
    language: "#E65100",
    // issues status coloar
    open: '#ffb6c1',
    'in-progress': '#ffd700',
    'waiting-feedback': '#87ceeb',
    solved: '#98fb98',
    closed: '#f08080',
    rejected: '#d3d3d3',
    assigned: '#dda0dd',
    duplicated: '#bc8f8f',
    unsigned: '#B71C1C',
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md2,
  theme: {
    defaultTheme: "csTheme",
    themes: {
      csTheme,
    },
  },
  components: {
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
  },
});
