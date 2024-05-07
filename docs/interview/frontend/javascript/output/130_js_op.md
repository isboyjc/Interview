---
contributors: 'isboyjc'
---

# No.0130


## 题干

```js
var i;

for(i = 0; i < 3; i++){
  setTimeout(() => console.log(i), 100);
}
for (let i = 0; i < 3; i++){
  setTimeout(() => console.log(i), 100);
}
```




## 题解

<!-- ::: details 点我查看题解 -->

```js
// 3
// 3
// 3
// 0
// 1
// 2
```

`var` 声明的变量是函数作用域（function scope），`let` 声明的变量是块作用域（block scope）。函数作用域意味着变量只在函数内部有效，而块作用域意味着变量只在一对花括号内有效。


第一个 `for` 循环中，使用了 `var` 声明的全局变量 i，它在整个程序中都有效。而且，由于 JS 是单线程执行的，所以 `for` 循环会先于 `setTimeout` 函数执行完毕。所以，当 `setTimeout` 函数执行时，i 的值已经变成了 3，并且不会再改变。所以，第一个 `for` 循环中的三个 `setTimeout` 函数都会输出 3。

第二个 `for` 循环中，使用了 `let` 声明的局部变量 i，它只在每次循环的花括号内有效。而且，由于 `let` 声明的变量有着暂时性死区（temporal dead zone）的特性，意味着每次循环都会创建一个新的i变量，并且在赋值之前无法访问。所以，当 `setTimeout` 函数执行时，它会捕获每次循环时i的值，并且保持不变。所以，第二个 `for` 循环中的三个 `setTimeout` 函数分别会输出 0、1、2。

<!-- ::: -->
