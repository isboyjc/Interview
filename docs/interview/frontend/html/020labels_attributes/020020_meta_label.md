---
contributors: 'isboyjc'
---

# meta 标签有哪些常见的值？


## 题干

- meta 标签



## 题解

<!-- ::: details 点我查看题解 -->

`meta` 标签由 `name` 和 `content` 属性定义，用来描述网页文档的属性，比如网页的作者，网页描述，关键词等，除了 `HTTP` 标准固定了一些 `name` 作为大家使用的共识，开发者还可以自定义 `name`。

常用的 `meta` 标签有：

`charset`，用来描述HTML文档的编码类型：

```HTML
<meta charset="UTF-8" >
```

`keywords`，页面关键词：

```HTML
<meta name="keywords" content="关键词" />
```

`description`，页面描述：

```HTML
<meta name="description" content="页面描述内容" />
```

`refresh`，页面重定向和刷新：

```HTML
<meta http-equiv="refresh" content="0;url=" />
```

`viewport`，适配移动端，可以控制视口的大小和比例：

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```


使用 `viewport` 适配移动端时，`content` 参数有以下几种：

- width：控制视口的宽度，可以是一个具体的像素值，也可以是 `device-width`，表示设备的宽度。
- height：控制视口的高度，可以是一个具体的像素值，也可以是 `device-height`，表示设备的高度。
- initial-scale：控制页面初始加载时的缩放比例，可以是一个 0.1 到 10 之间的数字。
- minimum-scale：控制页面允许缩小的最小比例，可以是一个 0.1 到 10 之间的数字。
- maximum-scale：控制页面允许放大的最大比例，可以是一个 0.1 到 10 之间的数字。
- user-scalable：控制用户是否可以通过手势来缩放页面，可以是 yes 或 no。


<!-- ::: -->

## 相关

[meta viewport 是做什么用的，怎么写？](./020030_meta_viewport.md)