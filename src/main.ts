import "./assets/main.scss";
import ElementPlus from "element-plus";
import locale from "element-plus/es/locale/lang/zh-cn"; // 升级后的写法
import "element-plus/dist/index.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  locale: locale,
  // 支持 large、default、small
  size: "default",
});

app.mount("#app");
