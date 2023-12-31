---
contributors: 'isboyjc'
---

# 如何实现图片懒加载，思路？


## 题干

- 图片懒加载



## 题解

::: details 点我查看题解

图片懒加载是一种优化网页性能的技术，它可以避免一次性加载页面中所有的图片，而根据图片是否出现在可视区域来决定是否加载图片。

图片懒加载实现思路如下：

- 首先，将需要懒加载的图片的 `src` 属性设置为空或者一个占位图，然后将真实的图片地址存储在 `data-src` 属性中，这样就可以阻止浏览器默认的图片加载行为。
- 其次，监听页面的滚动事件，每次滚动时，判断页面中的每个图片元素是否进入了可视区域，可以使用 `getBoundingClientRect` 方法来获取元素相对于视口的位置信息。
- 最后，如果图片元素进入了可视区域，就将其 `data-src` 属性的值赋给 `src` 属性，这样就可以触发浏览器的图片加载行为，从而实现懒加载效果。

优化：

- 可以使用节流函数或者防抖函数来减少滚动事件的触发频率，避免过多的计算和操作。
- 可以使用 `IntersectionObserver API` 来替代滚动事件和位置判断，这个 `API` 可以监听元素是否进入了视口，并且不会阻塞主线程。
- 可以使用 `loading="lazy"` 属性来让浏览器自动实现懒加载，这是 `HTML5` 中新增的一个属性，但是目前还没有被所有浏览器支持。

:::


