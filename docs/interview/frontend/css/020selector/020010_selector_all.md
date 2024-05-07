---
contributors: 'isboyjc'
---

# CSS 选择器常见的有几种？


## 题干

- CSS 选择器



## 题解

<!-- ::: details 点我查看题解 -->

CSS 选择器可以用来选取 HTML 元素，并为它们应用样式。CSS 选择器有很多种，根据不同的条件和规则来匹配不同的元素。

常见的 CSS 选择器如下：

- **简单选择器**：根据元素的名称、ID、类别等属性的选择器都是简单选择器，例如 `p` 选择器会选取所有的 `<p>` 元素，`#intro` 选择器会选取 ID 为 `intro` 的元素，`.red` 选择器会选取类别为 `red` 的元素。
- **组合器选择器**：根据元素之间的关系来选择，例如 `div p` 选择器会选取 `<div>` 元素内的所有 `<p>` 元素，`div > p` 选择器会选取 `<div>` 元素的直接子元素 `<p>`，`div + p` 选择器会选取紧跟在 `<div>` 元素后的第一个 `<p>` 元素。
- **伪类选择器**：根据元素的状态或位置来选择，例如 `a:hover` 选择器会选取鼠标悬停在上面的 `<a>` 元素，`p:first-child` 选择器会选取作为第一个子元素的 `<p>` 元素，`input:checked` 选择器会选取被选中的 `<input>` 元素。
- **伪元素选择器**：根据元素的一部分或生成的内容来选择，例如 `p::first-letter` 选择器会选取每个 `<p>` 元素的第一个字母，`p::before` 选择器会在每个 `<p>` 元素之前插入内容，`::selection` 选择器会选取用户选中的部分。
- **属性选择器**：根据元素的属性或属性值来选择，例如 `[title]` 选择器会选取带有 `title` 属性的所有元素，`[href="https://www.bing.com"]` 选择器会选取 `href` 属性等于 `https://www.bing.com` 的所有元素，`[src^="https"]` 选择器会选取 `src` 属性以 `https` 开头的所有元素。


<!-- ::: -->



## 相关

[id 选择器和 class 选择器的使用场景分别是什么？](./020020_id_calss_selector.md)

[伪类选择器有哪些？](./020030_pseudoclass_selector.md)

[伪元素和伪类的区别？](./020040_pseudoelements_and_pseudoclasses.md)

[CSS 中是否存在父选择器？如何通过子元素选取父元素？](./020050_parent_selector.md)

[选择器的优先级是如何计算的？](./020060_selector_priority.md)

[浏览器是怎样解析 CSS 选择器的？](./020070_browser_parse_selector.md)