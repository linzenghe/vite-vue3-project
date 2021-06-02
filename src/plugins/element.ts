/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-02 14:59:01
 */

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

export default function loadComponent(app: any) {
  app.use(ElementPlus);
}
