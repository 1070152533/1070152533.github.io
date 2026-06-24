import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "May's Blog",
  description: '个人技术博客',
  lang: 'zh-CN',
  base: '/',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '归档', link: '/archives' },
      { text: '关于', link: '/about' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/1070152533' },
    ],
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024-present May',
    },
  },
})
