import type { App } from 'vue';
import { AntdTheme } from 'vite-plugin-vitepress-demo/theme';
import Theme from 'vitepress/theme';
import Layout from '../../demo/demo3/layout.vue';
import 'virtual:group-icons.css';

import './style.css';
import './markdown.css';

export default {
  ...Theme,
  Layout,
  enhanceApp({ app }: { app: App }) {
    app.component('demo', AntdTheme);
  }
};
