---
contributors: 'isboyjc'
---

# No.0110


## 题干

```js
function foo() {
  let a = b = 0;
  a++;
  return a; 
}

foo();

console.log(typeof a);
console.log(typeof b);
```




## 题解

<!-- ::: details 点我查看题解 -->

```js
console.log(typeof a); // undefined
console.log(typeof b); // number
```

代码中有一个非常隐蔽的错误，就是函数中使用了 `let a = b = 0;` 这样的语句。这样的语句实际上会创建一个全局变量 b 和一个局部变量 a，并且只会影响 a 的值。

`let a = b = 0;` 等同于下面语句：

```js
b = 0; // 隐式地将b变量挂载到全局对象上，相当于var b = 0;
let a = b; // 使用let声明一个局部变量a，并赋值为b的值
```

这样的结果是，`foo` 函数内部创建了一个局部变量 a，它的作用域只限于 `foo` 函数，而在 `foo` 函数外部创建了一个全局变量 b，它的作用域是整个程序。所以，当在 `foo` 函数内部执行 `a++` 时，只会影响 a 的值，而不会影响 b 的值。而当在 `foo` 函数外部使用 `typeof` 运算符时，会得到以下结果：

```js
console.log(typeof a); // 输出undefined，因为a是foo函数内部的局部变量，在外部无法访问
console.log(typeof b); // 输出number，因为b是全局变量，可以在任何地方访问
```

<!-- ::: -->


