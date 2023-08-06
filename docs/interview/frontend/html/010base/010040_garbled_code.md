---
contributors: 'isboyjc'
---

# 页面出现了乱码，是什么问题？如何解决？


## 题干

- 页面乱码



## 题解

::: details 点我查看题解

HTML 页面乱码的原因一般是因为页面的显示编码和存储编码不一致，导致浏览器无法正确地解析和显示文档中的中文字符。

解决方法：

- 在页面的 \<head> 标签里面加上 \<meta> 标签，把字符声明为 UTF-8 或其他适合的编码。

🌰：

```html
<meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>

<!-- or 简写-->

<meta charset="UTF-8"/>
```


:::

