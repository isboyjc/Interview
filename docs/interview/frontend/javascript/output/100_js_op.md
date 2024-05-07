---
contributors: 'isboyjc'
---

# No.0100


## 题干

```js
const nums = [ 1, 2, 3, 4, 5, 6 ];
let firstEven; 

nums.forEach(n => {
  if(n % 2 === 0){
    firstEven = n;
    return n
  }
}
)
console.log(firstEven);
```




## 题解

<!-- ::: details 点我查看题解 -->

```js
console.log(firstEven); // 6
```

代码中有一个常见的误区，在于使用了 `forEach` 方法来遍历数组，并且在回调函数中使用了 `return` 语句，试图提前结束循环。但是，`forEach` 方法并不会响应 `return` 语句，它会一直遍历数组的所有元素，而不会中断。所以，代码相当于：

```js
const nums = [ 1, 2, 3, 4, 5, 6 ];
let firstEven; 

nums.forEach(n => {
  if(n % 2 === 0){
    firstEven = n; // 每次遇到偶数就更新firstEven的值
    // return n; // 这里的return语句没有任何作用，forEach会继续执行下一个元素
  }
}
)
console.log(firstEven); // 最后一次更新firstEven的值是6，所以输出6
```

如果你想要正确地实现你的目的，即找到数组中第一个偶数，并且在找到后结束循环，你可以使用 `break` 。


<!-- ::: -->
