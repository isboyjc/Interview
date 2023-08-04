---
contributors: 'isboyjc'
---

# 如何阻止事件传播（事件冒泡）


## 题干

- 阻止事件传播（事件冒泡）



## 题解

::: details 点我查看题解

按照 `W3C` 标准，阻止事件传播（事件冒泡）可以使用 `stopPropagation()` 方法，该方法可以阻止事件在捕获和冒泡阶段中的进一步传播，但是不能阻止事件的默认行为。

若考虑兼容性，那在 IE 浏览器中，可以使用 `cancelBubble` 属性，设置事件对象的 `cancelBubble` 属性为 `true`，来阻止事件的进一步传播，但是只能阻止冒泡阶段，不能阻止捕获阶段。

在原生事件中，也可以使用 `stopImmediatePropagation()` 方法组织冒泡，这是 DOM3 级事件模型的方法，可以阻止事件在捕获和冒泡阶段中的进一步传播，而且还可以阻止当前元素上相同类型的其他事件处理器的执行。


`stopImmediatePropagation` 和 `stopPropagation` 的区别主要有以下几点：

- 作用范围：`stopImmediatePropagation` 可以阻止事件在当前节点中和所有后续节点中的事件监听器被调用，而 `stopPropagation` 只能阻止事件在所有后续节点中的事件监听器被调用。
- 执行时机：`stopImmediatePropagation` 会立即生效，并且会影响当前节点中的事件监听器，即如果在其中一个事件监听器中执行 `stopImmediatePropagation`，那么剩下的事件监听器都不会被调用。而 `stopPropagation` 不会影响当前节点中的事件监听器，只会影响后续节点中的事件监听器。
- React 中：`React` 事件是合成事件，`React` 没有对 `stopImmediatePropagation` 进行封装，在 `React` 的事件中没有 `stopImmediatePropagation` 函数。但是可以通过 `event.nativeEvent.stopImmediatePropagation` 进行调用。而 `stopPropagation` 是有对应的函数的。

:::

## 相关

[事件是什么？事件模型？](./110010_event_model.md)

[介绍事件传播机制（事件流），事件传播的三个阶段？](./110020_event_flow.md)

[如何取消默认事件](./110040_cancel_default_event.md)

[什么是事件代理（事件委托），使用场景](./110050_event_proxy.md)