---
contributors: 'isboyjc'
---

# No.0090


## 题干

```js
const length = 4; 
const numbers = [];

for (var i = 0; i < length; i++);{ 
  numbers.push(i + 1)
};

console.log(numbers)
```




## 题解

<!-- ::: details 点我查看题解 -->

```js
console.log(numbers) // [5]
```

错误在于 `for` 循环的末尾加了一个分号（;），这会导致循环体被忽略，而只执行循环条件。也就是说，代码相当于：

```js
const length = 4; 
const numbers = [];

var i = 0;
while (i < length) {
  i++;
}
// 循环结束后，i的值为4

{ 
  numbers.push(i + 1)
};
// 这里相当于一个单独的代码块，只执行了一次，将5推入数组

console.log(numbers) // [5]
```

<!-- ::: -->


