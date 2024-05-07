---
contributors: 'isboyjc'
---

# defer 和 async ？

## 题干

- defer

- async



## 题解

<!-- ::: details 点我查看题解 -->

在 `JavaScript` 中，`defer` 和 `async` 是用于控制脚本加载和执行的两个属性，常用于 `<script>` 标签中。

`defer` 属性：当浏览器解析到带有 `defer` 属性的脚本标签时，会将该脚本标记为“延迟脚本”，即延迟执行脚本的加载和执行，直到文档解析完成。多个带有 `defer` 属性的脚本会按照它们在文档中出现的顺序依次加载，但是在 `DOMContentLoaded` 事件触发之前不会执行。适用于那些不需要立即执行的脚本，可以在文档解析过程中进行加载，避免阻塞页面渲染。

`async` 属性：当浏览器解析到带有 `async` 属性的脚本标签时，会将该脚本标记为“异步脚本”，即异步加载和执行脚本，不会阻塞页面的解析和渲染过程。多个带有 `async` 属性的脚本会并行加载，不保证它们的执行顺序。适用于那些独立的、不依赖其他脚本的脚本文件，可以提高页面加载的并行性和速度。

需要注意的是，使用 `defer` 或 `async` 属性加载的脚本，它们的执行顺序与它们在文档中的位置有关。如果脚本之间存在依赖关系，需要谨慎使用这两个属性，以确保脚本的正确执行顺序。

示例：

```js
<script src="script1.js" defer></script>
<script src="script2.js" async></script>
```

在上面的示例中，`script1.js` 使用 `defer` 属性，`script2.js` 使用 `async` 属性。浏览器会在文档解析过程中异步加载 `script1.js`，并在文档解析完成后按顺序执行。而 `script2.js` 则会异步加载并立即执行，不会阻塞页面的解析和渲染过程。

<!-- ::: -->

## 相关

[JS 脚本延迟加载的方式有哪些](../010base/010070_script_delayed_loading.md)

[window.onload 和 document.onDOMContentLoaded 有什么区别](../110browser/110060_onload_ondomcontentloaded.md)