---
contributors: 'isboyjc'
---

# placeholder 属性有什么作用？


## 题干

- placeholder 属性



## 题解

::: details 点我查看题解

`placeholder` 属性是 HTML5 中的一个新属性，它用于为 `input` 元素提供一个简短的提示信息，可以描述输入字段的预期值或格式。这个提示信息会在输入字段为空时显示，当用户在输入字段中输入内容时，提示信息会消失。

`placeholder` 属性的作用是：

- 提高用户体验，让用户更容易理解应该输入什么数据，或者输入数据的格式。比如，一个搜索框可以使用 `placeholder="Search W3School"` 来提示用户输入搜索关键词。
- 提高无障碍性，让使用辅助技术的用户更容易获取输入字段的含义。比如，一个屏幕阅读器可以读出 `placeholder` 的值，让用户知道这个输入框是用来做什么的。
- 节省页面空间，避免使用额外的标签或文本来说明输入字段的用途或要求。

注意事项：

- `placeholder` 属性不是必须的，也不是用来验证或提交数据的。它只是一个辅助性的提示信息，不应该包含重要或必要的信息。
- `placeholder` 属性只适用于以下类型的 `input` 元素：`text`、`search`、`url`、`tel`、`email` 和 `password`。其他类型的 `input` 元素不支持 `placeholder` 属性。
- `placeholder` 属性的值应该简短而清晰，避免使用过长或过于复杂的文本。如果需要更详细的说明，可以使用其他元素或属性来提供，比如 `title`、`aria-label` 或者 `aria-describedby` 等。

:::


## 相关

[在 input 里，name 属性有什么作用？](./030010_input_name.md)

[label 属性有什么作用？如何使用？](./030020_label.md)

[type=hidden 隐藏域有什么作用？](./030040_type_hidden.md)