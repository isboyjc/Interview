---
contributors: 'isboyjc'
---

# CSS 中是否存在父选择器？如何通过子元素选取父元素？


## 题干

- 父选择器



## 题解

<!-- ::: details 点我查看题解 -->

CSS 中目前还没有一种可以跨浏览器工作的方法来选择元素的父元素。CSS 选择器第四级工作草案中包含了一个 `:has()` 伪类，它将提供这种能力。它将类似于 `jQuery` 的实现，但目前还没有得到 `Firefox` 的支持。
<!-- ::: -->



## 相关

[CSS 选择器常见的有几种？](./020010_selector_all.md)

[id 选择器和 class 选择器的使用场景分别是什么？](./020020_id_calss_selector.md)

[伪类选择器有哪些？](./020030_pseudoclass_selector.md)

[伪元素和伪类的区别？](./020040_pseudoelements_and_pseudoclasses.md)

[选择器的优先级是如何计算的？](./020060_selector_priority.md)

[浏览器是怎样解析 CSS 选择器的？](./020070_browser_parse_selector.md)