---
contributors: 'isboyjc'
---

# No.0120


## 题干

```js
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;

console.log(clothes[0]);
```



## 题解

::: details 点我查看题解

```js
console.log(clothes[0]); // undefined
```

使用 `clothes.length = 0;` 这样的语句试图清空一个数组。这样的语句并不会真正地删除数组中的元素，而只是将数组的 `length` 属性设置为 0。所以，代码相当于：

```js
const clothes = ['jacket', 't-shirt'];
clothes.length = 0; // 将数组的length属性设置为0，但不影响数组中的元素
console.log(clothes[0]); // 输出undefined，因为数组的length为0，所以无法访问任何索引
```

既然数组中的元素没有被删除，那么它们去哪里了呢？其实，它们还在数组中，只是因为数组的 `length` 属性变为 0，导致无法通过索引来访问它们。但是，如果使用其他方法来遍历或操作数组，就会发现它们还在那里。

🌰：

```js
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]); // 输出undefined
clothes.forEach(item => console.log(item)); // 不会输出任何内容，因为forEach方法依赖于length属性
console.log(Object.keys(clothes)); // 输出["0", "1"]，因为Object.keys方法可以获取数组中的所有键名
console.log(clothes.pop()); // 输出t-shirt，因为pop方法可以删除并返回数组中的最后一个元素
```

:::