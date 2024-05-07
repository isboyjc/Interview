---
contributors: 'isboyjc'
---

# JS 实现 call 方法


## 题干

- call



## 题解

<!-- ::: details 点我查看题解 -->

```js
Function.prototype.myCall = function(thisArg, ...args) {
  const fn = Symbol('fn');
  thisArg[fn] = this;

  const result = thisArg[fn](...args);
  delete thisArg[fn];
  return result;
}
```

在上面的代码中，我们定义了一个 `myCall` 方法，并将其添加到 `Function.prototype` 上。这样，所有的函数都可以使用这个方法。

这个方法接受两个参数：第一个参数是指定的 `this` 值，剩余的参数是传递给函数的参数。在方法内部，我们首先在 `thisArg` 对象上定义一个临时属性 `fn`，并将其值设置为当前函数（也就是调用 `myCall` 方法的函数）。然后，我们调用这个临时方法，并传入参数。最后，我们删除这个临时属性，并返回结果。

<!-- ::: -->



## 相关

[如何改变函数内部的 this 指针的指向？](../core/080this/080020_update_function_this.md)

[call、apply 及 bind 函数区别](../core/080this/080030_call_apply_bind.md)
