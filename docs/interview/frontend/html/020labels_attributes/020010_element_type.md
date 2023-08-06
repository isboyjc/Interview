---
contributors: 'isboyjc'
---

# 行内元素有哪些？块级元素有哪些？ 空 (void) 元素有那些？


## 题干

- 行内元素

- 块级元素

- 空 (void) 元素



## 题解

::: details 点我查看题解

行内元素（inline element）：是指可以在同一行内排列的元素，它们不会独占一行，也不会影响其他元素的布局。行内元素的宽度和高度由内容决定，不能设置内外边距和换行。行内元素只能包含文本或其他行内元素。

🌰：

```html
a、b、span、img、input、strong、select、label、em、button、textarea
```

块级元素（block element）：是指可以独占一行的元素，它们会自动填满父元素的宽度，也会影响其他元素的布局。块级元素的宽度和高度可以设置，可以设置内外边距和换行。块级元素可以包含文本、行内元素或其他块级元素。

🌰：

```html
div、ul、li、dl、dt、dd、p、h1-h6、blockquote
```

空元素（void element）：是指没有内容和结束标签的元素，它们通常用于表示一些特殊的功能或效果。空元素在开始标签中添加斜杠来关闭，例如 \<br />。空元素不能包含任何内容或子元素。

🌰：

```html
br、meta、hr、link、input、img
```


:::



