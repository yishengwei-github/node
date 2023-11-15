import type { NavbarConfig } from "@vuepress/theme-default";

export const navbarZh: NavbarConfig = [
  {
    text: "书单",
    link: "/books/",
  },
  {
    text: "笔记",
    children: [
      {
        text: "哲学",
        children: [
          {
            text: "形而上学",
            link: "/philosophy",
          },
        ],
      },
      {
        text: "心理学",
        children: ["/psychology"],
      },
      {
        text: "其他学科",
        children: ["/others"],
      },
    ],
  },
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
        children: ["/confucian/lunyu/xueer.md", "/confucian/lunyu/weizheng.md"],
      },
      {
        text: "孟子",
        children: ["/confucian/mengzi.md"],
      },
    ],
  },
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
];
