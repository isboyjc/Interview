---
contributors: 'isboyjc'
---

# 导入 CSS 时 link 和 @import 区别？
## 题干

- link VS @import



## 题解

<!-- ::: details 点我查看题解 -->

`link` 和 `@import` 都是用来引入外部 CSS 文件的方法，但是它们有一些本质的区别，主要体现在以下几个方面：

- **从属关系**：`link` 是 HTML 的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等；而 `@import` 是 CSS 的语法，只有导入样式表的作用。
- **加载顺序**：页面被加载时，`link` 会和 HTML 同时被加载；而 `@import` 引入的 CSS 将在页面加载完毕后被加载。
- **兼容性**：`@import` 是 CSS2.1 才有的语法，所以只能在 IE5 以上才能识别；而 `link` 是 HTML 标签，所以不存在兼容性问题。
- **DOM 可控性**：JavaScript 可以通过 DOM 操作 `link` 标签来改变样式；而 `@import` 的样式不是 DOM 可控的。
- **权重**：如果两种方式引入的样式有冲突，那么 `link` 引入的样式权重高于 `@import` 引入的样式。

<!-- ::: -->

## 相关

[CSS 加载方式有几种？](./010010_css_load.md)

