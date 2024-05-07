---
contributors: 'isboyjc'
---

# documentFragment (文档碎片)是什么？


## 题干

- documentFragment



## 题解

<!-- ::: details 点我查看题解 -->

`DocumentFragment` (文档碎片)是一个轻量版的 Document 对象，它可以存储由节点（nodes）组成的文档结构，但是它不是真实 DOM 树的一部分，它的变化不会触发 `DOM` 树的重新渲染，也不会对性能产生影响。

我们可以使用 `document.createDocumentFragment` 方法或构造函数来创建一个空的 `DocumentFragment` 对象，然后向其中添加子节点。当你把 `DocumentFragment` 对象插入到 `DOM` 树中时，只会插入它的所有子节点，而不会插入 `DocumentFragment` 对象本身。这样可以避免多次操作 `DOM` 树而导致的性能损耗。

`DocumentFragment` 对象继承了 `Node` 和 `ParentNode` 的属性和方法，还有一些特有的属性和方法，如 `childElementCount`、`children`、`querySelector`、`querySelectorAll` 等。

`DocumentFragment` 对象在 Web 组件（`Web components`）中也非常有用： \<template> 元素在其 `HTMLTemplateElement.content` 属性中包含了一个 `DocumentFragment` 对象。

<!-- ::: -->

