## single-html-app

🍱 单文件 HTML 应用集合。基于自用 `single-html-app` Skill 开发，100% AI 驱动。

## 在线访问

- [单文件 HTML 应用集合](https://html.viki.moe/)

## 应用列表

| 应用 | 描述 |
|------|------|
| [扫雷](https://html.viki.moe/minesweeper.html) | Claude Code 利用 `single-html-app` Skill 完成的扫雷游戏 |
| [盘古之白](https://html.viki.moe/pangu.html) | 中英文排版格式化工具，基于 pangu.js 自动插入间距空格，支持差异对比高亮 |

## 添加新应用

编辑 `index.html` 中的 `APPS` 数组：

```js
const APPS = [
  {
    title: '应用名称',
    description: '简短描述',
    href: 'your-app.html',
    tags: ['标签'],
    date: '2026-03-04',
  },
]
```
