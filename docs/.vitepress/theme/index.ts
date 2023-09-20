import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';
// import Layout from './Layout.vue'
import DefaultTheme from 'vitepress/theme';
// import VPApp, { NotFound, globals } from '../vitepress'
// import 'unocss';
import './style.css';
// import type { Theme } from 'vitepress';
// export const define = <T>(value: T): T => value;
const enhanceApp = DefaultTheme.enhanceApp;
DefaultTheme.enhanceApp = (...args) => {
  args[0].app.use(ElementPlus);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    args[0].app.component(key, component);
  }
  enhanceApp.call(DefaultTheme, ...args);
};
export default DefaultTheme;
// export default {
//   Layout,
//   enhanceApp: ({ app }) => {
//     app.use(ElementPlus);
//   }
// };
