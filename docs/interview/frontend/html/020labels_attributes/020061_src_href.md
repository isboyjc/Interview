---
contributors: 'isboyjc'
---

# 简述 src 和 href 的区别？


## 题干

- src

- href



## 题解

<!-- ::: details 点我查看题解 -->

src 和 href 是两个常见的 HTML 属性，它们都可以用来引用外部资源，但它们的区别是：

- src 是 source 的缩写，表示资源的来源，它用在 `<img>`、`<script>`、`<iframe>` 等标签中，表示这些标签的内容是由外部资源提供的，浏览器会把这些资源嵌入到当前文档中。例如，`<img src="logo.png">` 表示显示一个图片，图片的源文件是 logo.png。 
- href 是 hypertext reference 的缩写，表示超文本引用，它用在 `<a>`、`<link>`、`<base>` 等标签中，表示这些标签的内容是指向外部资源的链接，浏览器会根据这些链接跳转到相应的资源或加载相应的样式。例如，`<a href="https://www.bing.com">Bing</a>` 表示创建一个超链接，点击后会跳转到 Bing 的网站。 

总的来说，src 和 href 的区别是：

- src 用于替换当前元素的内容，href 用于在当前文档和引用资源之间建立联系。
- src 会阻塞文档的解析，直到资源加载完毕，href 不会阻塞文档的解析，而是并行加载资源。
- src 只能用于一些特定的标签，href 可以用于更多的标签。 

<!-- ::: -->

