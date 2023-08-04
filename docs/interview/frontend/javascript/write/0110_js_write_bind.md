---
contributors: 'isboyjc'
---

# JS 实现 bind 方法


## 题干

- bind



## 题解

::: details 点我查看题解

```js
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  let _this = this
  let arg = [...arguments].slice(1)
  return function F() {
    // 处理函数使用new的情况
    if (this instanceof F) {
      return new _this(...arg, ...arguments)
    } else {
      return _this.apply(context, arg.concat(...arguments))
    }
  }
}
```

:::

## 相关

[如何改变函数内部的 this 指针的指向](../core/080this/080020_update_function_this.md)

[call、apply 及 bind 函数区别](../core/080this/080030_call_apply_bind.md)

[如果一个构造函数 bind 一个对象，用此构造函数创建出的实例会继承这个对象的属性吗？为什么？](../core/090prototype/090030_constructor_bind_and_inherit.md)
