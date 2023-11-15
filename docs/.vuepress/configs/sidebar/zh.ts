import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebarZh: SidebarConfig = {
  "/books/": [
    {
      text: "书单",
      children: ["/books/README.md"],
    },
  ],
  "/notes/": [
    {
      text: "笔记",
      children: ["/books/README.md"],
    },
  ],
  "/confucian/": [
    {
      text: "儒家",
      children: [
        {
          text: "大学",
          children: ["/confucian/daxue.md"],
        },
        {
          text: "中庸",
          children: ["/confucian/zhongyong.md"],
        },
        {
          text: "论语",
          children: [
            "/confucian/lunyu/xueer.md",
            "/confucian/lunyu/weizheng.md",
          ],
        },
        {
          text: "孟子",
          children: ["/confucian/mengzi.md"],
        },
      ],
    },
  ],
  "/taoists/": [
    {
      text: "道家",
      children: [
        {
          text: "道德经",
          children: ["/taoists/taoteching.md"],
        },
        {
          text: "庄子",
          children: ["/taoists/zhuangzi.md"],
        },
      ],
    },
  ],
  "/philosophy/": [
    {
      text: "哲学",
      children: ["/philosophy/README.md"],
    },
  ],
  "/psychology/": [
    {
      text: "心理学",
      children: ["/psychology/README.md"],
    },
  ],
};
