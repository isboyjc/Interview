---
contributors: 'isboyjc'
---

# 如何取消默认事件

## 题干

- 取消默认事件



## 题解

::: details 点我查看题解

使用 `W3C` 标准中的 `preventDefault()` 方法，可以阻止事件的默认行为，比如点击链接跳转，右键呼出菜单，表单提交等。但是，它不能阻止事件的传播，如果要阻止事件的传播，还需要使用 `stopPropagation()` 或 `stopImmediatePropagation()` 方法。

若考虑兼容性，那在 IE 浏览器中，可以设置事件对象的 `returnValue` 属性为 `false`，来阻止事件的默认行为。但是，它也不能阻止事件的传播，如果要阻止事件的传播，还需要使用 `cancelBubble` 属性。

另：在 `jQuery` 中，可以在事件处理函数中返回一个布尔值 `false`，来同时阻止事件的默认行为和传播。在原生 JS 中，这个方法也可以阻止默认行为，但是不能阻止传播。

:::

## 相关

[事件是什么？事件模型？](./110010_event_model.md)

[介绍事件传播机制（事件流），事件传播的三个阶段？](./110020_event_flow.md)

[如何阻止事件传播（事件冒泡）](./110030_prevent_event_propagation.md)

[什么是事件代理（事件委托），使用场景](./110050_event_proxy.md)