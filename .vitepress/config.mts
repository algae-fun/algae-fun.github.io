import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "algae AI 模型转发拼车",
  description: "AI 转发",
  //   head: [
  //   // 自动处理 favicon.ico 文件，如果它在 public 目录下
  //   ['link', { rel: 'icon',  type: 'image/svg', href: '/logo.svg' }],
  // ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "帮助文档", link: "/docs" },
    ],

    sidebar: [
      {
        text: "帮助文档",
        items: [
          { text: "claude code 拼车", link: "/claude-code-guide" },
          { text: "claude code 安装", link: "/claude-code-install" },

          { text: "联系我们", link: "/contact" },
        ],
      },
    ],
    footer: {
      copyright: "Copyright © 2024-2026 Algae.fun ",
    },
    logo: '/logo.svg'
  },
  markdown: {
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
  },
});
