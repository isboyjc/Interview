---
contributors: 'isboyjc'
---

# 让页面里的字体变清晰，变细用CSS怎么做？ 


## 题干

- 字体变清晰、变细



## 题解

<!-- ::: details 点我查看题解 -->

如果想让页面里的字体变清晰，变细，可以尝试使用 CSS 的 `font-smooth` 属性。

这个属性可以控制字体渲染时应用的抗锯齿效果。抗锯齿就是一种技术，可以使字体的边缘看起来更平滑，而不是锯齿状。这样，字体就会显得更清晰，更细。

不过，你需要注意的是，`font-smooth` 属性是一个非标准的属性，它不在任何规范中，也不被所有的浏览器支持。它还取决于浏览器的类型和系统的配置，所以它可能不会对每个用户都有效。如果你想使用这个属性，请先检查一下浏览器的兼容性。

`font-smooth` 属性有以下几种可能的值：

- auto：让浏览器根据系统的默认值来决定是否使用抗锯齿效果。这是默认值。
- never：关闭抗锯齿效果，显示带有锯齿边缘的字体。
- always：总是使用抗锯齿效果，显示平滑边缘的字体。
- length：指定一个长度值，用来表示字体的平滑程度。长度值越小，字体越清晰，越细。

下面是一个使用 `font-smooth` 属性的示例代码：

```css
html {
  background-color: black;
  color: white;
  font-size: 3rem;
}

p {
  text-align: center;
}

.smoothed {
  font-smooth: 2em; /* 设置字体平滑程度为 2em */
}
```
<!-- ::: -->

## 相关

[浏览器中为什么建议使用偶数大小的字体?](./050020_even_numbers_font.md)

[如何让浏览器显示小于 12px 的文字？](./050030_less_than_12px.md)

## 扩展

[font-smooth - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth)