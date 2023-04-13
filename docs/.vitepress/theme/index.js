import  DefaultTheme  from 'vitepress/theme'
import CopyInfoBox from './components/CopyInfoBox.vue'
import "./custom.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CopyInfoBox', CopyInfoBox)
  },
}
