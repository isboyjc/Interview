---
contributors: 'isboyjc'
---

# Promise then 第二个参数和catch的区别是什么?

## 题干

- Promise then
- Promise catch


## 题解

::: details 点我查看题解

在 `Promise` 中，`then` 方法第二个参数和`catch`方法都用于处理 `Promise` 链中的错误，但它们在错误处理的时机和使用方式上有所不同。

`then` 方法的第二个参数：

在使用 `then` 方法时，可以传递两个参数，第一个参数是处理 `Promise` 成功的回调函数，第二个参数是处理 `Promise` 失败（发生错误）的回调函数。第二个参数的作用是在 `Promise` 链中捕获并处理错误。如果前面的 `Promise` 发生错误，会跳过后续的 `then` 方法，直接执行第二个参数的回调函数。

```javascript
promise
  .then(function(result) {
    // 处理成功的情况
  }, function(error) {
    // 处理失败的情况
  });
```

`catch`方法：

`catch` 方法是 `then` 方法的简化形式，专门用于捕获 `Promise` 链中的错误。它只接收一个参数，即处理 `Promise` 链中发生错误的回调函数。使用 `catch` 方法可以更清晰地表达代码的意图，即捕获并处理错误。

```javascript
promise
  .then(function(result) {
    // 处理成功的情况
  })
  .catch(function(error) {
    // 处理失败的情况
  });
```

可以看到，使用`catch`方法时，错误处理的回调函数直接跟在`then`方法后面，代码更加简洁和易读。

需要注意的是，无论是 `then` 方法的第二个参数还是 `catch` 方法，它们只能捕获前面 `Promise` 链中的错误，而不能捕获后续的错误。如果后续的 `then` 方法或 `catch` 方法中发生错误，需要在相应的位置进行错误处理。

:::


## 相关

[简述 Promise，有几种状态、特点是什么、解决了什么问题、优缺点是什么](./070020_promise.md)

[Promise.all 和 Promise.race 的区别和使用场景](./070040_promise_all_and_race.md)

[Promise 和 setTimeout 的区别](./070050_promise_and_settimeout.md)