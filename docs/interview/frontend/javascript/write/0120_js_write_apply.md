---
contributors: 'isboyjc'
---

# JS 实现 apply 方法


## 题干

- apply



## 题解

::: details 点我查看题解

```js
Function.prototype.myApply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not funciton')
  }
  context = context || window
  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}
```

:::



## 相关

[如何改变函数内部的 this 指针的指向](../core/080this/080020_update_function_this.md)

[call、apply 及 bind 函数区别](../core/080this/080030_call_apply_bind.md)

