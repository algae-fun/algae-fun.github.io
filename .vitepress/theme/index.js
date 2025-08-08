// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import TimeDisplay from './components/TimeDisplay.vue';

/** @type {import('vitepress').Theme} */
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册你的自定义组件
    app.component('TimeDisplay', TimeDisplay);
  }
};