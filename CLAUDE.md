# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目说明

单文件 HTML 应用集合。每个应用是一个独立的 `.html` 文件，无构建步骤，直接在浏览器中打开运行。

- `index.html` — 首页，展示所有应用的导航卡片
- `readme.md` — 项目说明和应用列表
- `xxx.html` — 各个应用的实现文件

## 添加新应用

添加新应用时，**必须同时修改以下两处**：

1. **`index.html`** — 在 `APPS` 数组中添加新应用对象：

```js
const APPS = [
  {
    title: '应用名称',
    description: '简短描述',
    href: 'your-app.html',
    tags: ['标签'], // 可选，便于分类和搜索
    date: '2026-03-04', // 新建应用时的日期
  },
]
```

2. **`readme.md`** — 在应用列表表格中添加对应行。
