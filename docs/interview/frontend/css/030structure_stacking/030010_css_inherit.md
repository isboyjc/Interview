---
contributors: 'isboyjc'
---

# 什么是 CSS 继承？哪些属性能继承，哪些不能？


## 题干

- CSS 继承



## 题解

<!-- ::: details 点我查看题解 -->

CSS 继承是指 CSS 属性在 HTML 元素之间的传递规则。一般来说，子元素会继承父元素的某些属性，这样可以避免重复设置相同的样式。CSS 继承有以下特点：

- 不是所有的 CSS 属性都可以继承，只有那些与文本相关的属性（如 `color`，`font`，`text-align` 等）和一些列表属性（如 `list-style`，`list-style-type` 等）可以继承。其他的属性（如 `border`，`margin`，`padding` 等）默认不会继承，除非使用 `inherit` 关键字显式指定。
- 继承的属性值是父元素的计算值（computed value），而不是指定值（specified value）。计算值是指经过浏览器解析后的最终值，而指定值是指在 CSS 文件中写的原始值。例如，如果父元素的 `font-size` 是 `2em`，而子元素继承了这个属性，那么子元素的 `font-size` 的计算值就是 `2em` 乘以父元素的字体大小，而不是简单地复制 `2em` 这个指定值。
- 继承的优先级比默认值高，但比其他选择器低。也就是说，如果一个元素没有为某个可继承的属性设置任何值，那么它会继承父元素的值；但如果一个元素为某个可继承的属性设置了一个具体的值，或者使用了一个选择器（如类选择器，ID 选择器等），那么它会覆盖父元素的值。

下面是一个简单的例子，演示了 CSS 继承的效果：

```css
/* 父元素 p 设置了 color 和 font-size 属性 */
p {
  color: blue;
  font-size: 20px;
}

/* 子元素 span 继承了 color 属性，但覆盖了 font-size 属性 */
span {
  font-size: 30px;
}
```

```html
<!-- p 元素包含了一个 span 元素 -->
<p>
  这是一个 <span>示例</span> 文本
</p>
```

在这个例子中，p 元素和 span 元素都会显示为蓝色，因为 span 元素继承了 p 元素的 `color` 属性；但 span 元素的字体大小会比 p 元素大 10 像素，因为 span 元素覆盖了 p 元素的 `font-size` 属性。

<!-- ::: -->
