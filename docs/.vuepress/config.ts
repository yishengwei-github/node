/*
 * @Author: Yshen yishengwei@pinming.cn
 * @Date: 2023-10-30 17:05:12
 * @LastEditors: Yshen yishengwei@pinming.cn
 * @LastEditTime: 2023-11-01 10:01:36
 * @FilePath: /node/docs/.vuepress/config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import { navbarEn, navbarZh, sidebarEn, sidebarZh } from "./configs/index.js";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/", // 如果你想让你的网站部署到一个子路径下，你将需要设置它。
  lang: "zh-CN",
  title: "Yshen的笔记",
  description: "这是我的学习笔记！",
  theme: defaultTheme({
    logo: "/images/hero.jpg",
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
    ],
    locales: {
      "/": {
        navbar: navbarZh,
        sidebar: sidebarZh,
        selectLanguageName: "简体中文",
      },
      "/en/": {
        navbar: navbarEn,
        sidebar: sidebarEn,
        selectLanguageName: "English",
      },
    },
  }),
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      // navbar
      lang: "zh-CN",
      title: "Yshen的笔记",
      description: "这是我的学习笔记！",
    },
    "/en/": {
      lang: "zh-CN",
      title: "Yshen's note",
      description: "This is Yshen's note！",
    },
  },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
});
