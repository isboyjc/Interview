---
contributors: 'isboyjc'
---

# window.onload 和 document.onDOMContentLoaded 有什么区别？


## 题干

- onload

- onDOMContentLoaded



## 题解

<!-- ::: details 点我查看题解 -->

`window.onload` 和 `document.onDOMContentLoaded` 是 `JavaScript` 中用于监听页面加载完成事件的两个事件。

1. `window.onload` 事件：当整个页面及其所有资源（包括图片、样式表、脚本等）都加载完成后，`window.onload` 事件会触发。这表示页面的所有内容都已经准备好了，可以进行操作和交互了。通常用于需要在页面完全加载后执行的操作。

```js
window.onload = function() {
  // 页面加载完成后执行的操作
};
```

2. `document.onDOMContentLoaded` 事件：当初始的 HTML 文档被完全加载和解析后，而无需等待样式表、图像和子框架的加载完成，`document.onDOMContentLoaded` 事件会触发。这表示文档的结构已经可以进行操作了，但是可能某些资源（如图片）还没有加载完成。通常用于需要在文档结构准备好后执行的操作，比如操作 DOM 元素。

```js
document.addEventListener('DOMContentLoaded', function() {
  // 文档结构准备好后执行的操作
});
```

区别：

- 触发时机：`window.onload` 在页面及其所有资源加载完成后触发，而 `document.onDOMContentLoaded` 在初始的 HTML 文档被解析完成后触发。
- 等待时间：`window.onload` 需要等待页面所有资源加载完成，包括图片、样式表、脚本等，而 `document.onDOMContentLoaded` 只需要等待 HTML 文档解析完成，不需要等待其他资源加载完成。
- 执行顺序：`window.onload` 只会在页面所有资源都加载完成后触发一次，而 `document.onDOMContentLoaded` 只会在文档结构解析完成后触发一次。

一般来说，如果只需要在文档结构准备好后进行操作，而不需要等待所有资源加载完成，可以使用 `document.onDOMContentLoaded` 事件，因为它会更早地触发，提供更快的响应速度。如果需要等待页面所有资源加载完成后再进行操作，可以使用 `window.onload` 事件。

<!-- ::: -->

## 相关

[JS 脚本延迟加载的方式有哪些](../010base/010070_script_delayed_loading.md)
