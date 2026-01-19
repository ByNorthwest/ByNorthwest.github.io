---
title: 为什么我选择 Astro 来构建博客
excerpt: 分享我选择 Astro.js 构建个人博客的原因和体验。
publishDate: '2026-01-15'
tags:
  - 技术
  - Astro
  - 前端开发
isFeatured: true
---

最近我重新搭建了自己的博客，经过一番调研和比较，最终选择了 [Astro.js](https://astro.build/) 作为技术栈。今天想和大家分享一下选择 Astro 的原因。

## 什么是 Astro？

Astro 是一个现代化的 Web 框架，专注于构建以内容为中心的网站。它的核心理念是**零 JS，默认发送 HTML**，这意味着页面加载速度非常快。

## 选择 Astro 的理由

### 1. 极致的性能

Astro 默认不向客户端发送任何 JavaScript，只发送静态 HTML。这使得网站加载速度极快，SEO 友好。对于博客这种以内容为主的网站来说，这是完美的选择。

### 2. 灵活的架构

Astro 支持 React、Vue、Svelte 等主流前端框架，你可以自由选择熟悉的组件技术栈，同时享受 Astro 的性能优势。

### 3. 内容集合（Content Collections）

Astro 的内容集合功能非常强大，可以轻松管理博客文章、页面等内容。它提供了类型安全的内容管理，支持 Markdown 和 MDX。

### 4. 现代化的开发体验

- 支持 TypeScript
- 热模块替换（HMR）
- 优秀的构建工具
- 丰富的生态系统

## 我的配置

我的博客使用了以下技术栈：

- **框架**：Astro 5.x
- **样式**：Tailwind CSS
- **内容**：Markdown + MDX
- **部署**：计划部署到 Vercel

## 总结

如果你也在寻找一个高性能、开发体验好的静态站点生成器，我强烈推荐尝试 Astro。它特别适合构建博客、文档站点和作品集网站。

在接下来的文章中，我会分享更多关于使用 Astro 的经验和技巧。