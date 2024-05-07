---
contributors: 'isboyjc'
---

# No.0055


## 题干

```js
foo()
var foo = function () {
  console.log("foo1")
}
foo()

var foo = function () {
  console.log("foo2")
}
foo()


function foo() {
  console.log("foo3")
}
foo()

function foo() {
  console.log("foo4")
}
foo()
```




## 题解

<!-- ::: details 点我查看题解 -->

```js
// foo4 foo1 foo2 foo2 foo2
```

函数表达式只会提升变量名，而不会提升函数体。因此，只有在赋值语句执行后，才能调用函数表达式。

函数声明会提升整个函数定义，因此可以在任何地方调用函数声明。

<!-- ::: -->

