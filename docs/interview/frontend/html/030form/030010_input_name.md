---
contributors: 'isboyjc'
---

# 在 input 里，name 属性有什么作用？


## 题干

- input 标签 name 属性



## 题解

<!-- ::: details 点我查看题解 -->

`input` 是 HTML 中用于创建表单控件的元素，它可以接收用户的输入数据，比如文本、数字、文件、颜色等。`input` 元素有很多属性，其中 `name` 属性是一个非常重要的属性，它规定了 `input` 元素的名称。

`name` 属性的作用主要有两个方面：

- 一方面，当表单被提交到服务器时，`name` 属性用于对表单数据进行标识，也就是说，服务器可以根据 `name` 属性来获取 `input` 元素的值。例如，如果一个 `input` 元素的 `name` 属性是 `username`，那么服务器就可以通过 `username` 这个参数来获取用户输入的用户名。注意：只有设置了 `name` 属性的表单元素才能在提交表单时传递它们的值。
- 另一方面，当表单在客户端被 JavaScript 操作时，`name` 属性用于引用表单数据，也就是说，JavaScript 可以根据 `name` 属性来访问或修改 `input` 元素的值。例如，如果一个 `input` 元素的 `name` 属性是 `password`，那么 JavaScript 就可以通过 `document.forms[0].password.value` 这样的语句来获取或设置用户输入的密码。

<!-- ::: -->


## 相关

[label 属性有什么作用？如何使用？](./030020_label.md)

[placeholder 属性有什么作用？](./030030_placeholder.md)

[type=hidden 隐藏域有什么作用？](./030040_type_hidden.md)