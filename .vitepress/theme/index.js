import DefaultTheme from 'vitepress/theme'
import TimeDisplay from './components/TimeDisplay.vue'

/** @type {import('vitepress').Theme} */
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('TimeDisplay', TimeDisplay)
  }
}