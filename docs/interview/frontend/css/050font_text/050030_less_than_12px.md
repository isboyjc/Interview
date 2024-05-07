---
contributors: 'isboyjc'
---

# 如何让浏览器显示小于 12px 的文字？


## 题干

- 显示小于 12px 的文字



## 题解

<!-- ::: details 点我查看题解 -->

- 使用 CSS3 的 `transform` 缩放属性 `-webkit-transform:scale(0.5)`; 注意 `-webkit-transform:scale(0.75)`; 收缩的是整个元素的大小，这时候，如果是内联元素，必须要将内联元素转换成块元素，可以使用 `display：block/inline-block/...`；
- 使用图片：如果是内容固定不变情况下，使用将小于 12px 文字内容切出做图片，这样不影响兼容也不影响美观。
- 使用 Webkit 的内核的 `-webkit-text-size-adjust` 的私有 CSS 属性来解决，只要加了 `-webkit-text-size-adjust`:none; 字体大小就不受限制了。但是 `Chrome` 更新到 27 版本之后就不可以用了。所以高版本 chrome 谷歌浏览器已经不再支持 `-webkit-text-size-adjust` 样式，慎用。
- `zoom` 的字面意思是 “变焦”，可以改变页面上元素的尺寸，属于真实尺寸，其支持的值类型有：`zoom:50% || zoom:0.5`，表示缩小到原来的一半，所以可以使用 `zoom` 属性来支持 12px 以下的字体，注意，有兼容性问题，慎用。

<!-- ::: -->


## 相关

[浏览器中为什么建议使用偶数大小的字体?](./050020_even_numbers_font.md)

[让页面里的字体变清晰，变细用CSS怎么做？ ](./050040_font_becomes_clearer_and_thinner.md)