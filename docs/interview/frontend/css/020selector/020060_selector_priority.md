---
contributors: 'isboyjc'
---

# 选择器的优先级是如何计算的？


## 题干

- 选择器的优先级



## 题解

<!-- ::: details 点我查看题解 -->

CSS 选择器的优先级是一个重要的概念，它决定了哪些样式会被应用到元素上，哪些样式会被覆盖或忽略。CSS 选择器的优先级是根据选择器中不同类型的选择器的数量和顺序来计算的，一般遵循以下几个原则：

- 优先级由四个部分组成，分别是内联样式、ID 选择器、类选择器/属性选择器/伪类选择器、标签选择器/伪元素选择器。每个部分的初始值为 0，每出现一次，就加一。例如，`div#content p span` 的优先级为 (0,1,0,3)。
- 优先级的比较是从左到右进行的，高位优先。如果两个选择器的优先级相同，则后出现的会覆盖前面的。例如，`div p span` 的优先级为 (0,0,0,3)，它会被 `p span` 的优先级为 (0,0,0,2) 覆盖，因为后者出现在后面。
- 如果一个选择器包含了 `!important` 声明，则它的优先级最高，除非另一个选择器也包含了 `!important` 声明，并且优先级更高或者出现在后面。例如，`div p span {color: red !important;}` 的优先级为 (1,0,0,3)，它会覆盖 `div#content p span {color: blue !important;}` 的优先级为 (1,1,0,3)，因为前者出现在后面。
- 通配符选择器（`*`）、关系选择符（`+`,`>`,`~`,` `）和否定伪类（`:not()`）对优先级没有影响，但是在 `:not()` 内部的选择器会影响优先级。例如，`:not(div p span)` 的优先级为 (0,0,0,0)，而 `:not(div#content)` 的优先级为 (0,1,0,1)。


<!-- ::: -->


## 相关

[CSS 选择器常见的有几种？](./020010_selector_all.md)

[id 选择器和 class 选择器的使用场景分别是什么？](./020020_id_calss_selector.md)

[伪类选择器有哪些？](./020030_pseudoclass_selector.md)

[伪元素和伪类的区别？](./020040_pseudoelements_and_pseudoclasses.md)

[CSS 中是否存在父选择器？如何通过子元素选取父元素？](./020050_parent_selector.md)

[浏览器是怎样解析 CSS 选择器的？](./020070_browser_parse_selector.md)

## 扩展

[优先级 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)