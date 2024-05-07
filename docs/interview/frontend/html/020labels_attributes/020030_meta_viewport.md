---
contributors: 'isboyjc'
---

# meta viewport 是做什么用的，怎么写？


## 题干

- meta viewport



## 题解

<!-- ::: details 点我查看题解 -->

`meta viewport` 是一种用于控制页面在不同设备上的显示方式和缩放比例的标签，它可以让页面适应不同大小和分辨率的屏幕，提高页面的可访问性和用户体验。

`meta viewport` 的写法是在页面的 \<head> 标签里面加上 \<meta> 标签，然后在 `content` 属性中设置一些参数，

🌰：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

这表示页面的宽度等于设备的宽度，初始缩放比例为 1.0。`content` 属性中可以设置的参数有以下几种：

- width：控制视口的宽度，可以是一个具体的像素值，也可以是 `device-width`，表示设备的宽度。
- height：控制视口的高度，可以是一个具体的像素值，也可以是 `device-height`，表示设备的高度。
- initial-scale：控制页面初始加载时的缩放比例，可以是一个 0.1 到 10 之间的数字。
- minimum-scale：控制页面允许缩小的最小比例，可以是一个 0.1 到 10 之间的数字。
- maximum-scale：控制页面允许放大的最大比例，可以是一个 0.1 到 10 之间的数字。
- user-scalable：控制用户是否可以通过手势来缩放页面，可以是 yes 或 no。

<!-- ::: -->



## 相关


[meta 标签有哪些常见的值？](./020020_meta_label.md)