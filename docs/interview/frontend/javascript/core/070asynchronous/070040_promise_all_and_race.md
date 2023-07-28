---
contributors: 'isboyjc'
---

# Promise.all 和 Promise.race 的区别和使用场景？


## 题干

- Promise.all

- Promise.race



## 题解

::: details 点我查看题解

`Promise.all` 和 `Promise.race` 是两个用于处理多个 `Promise` 的方法。
`Promise.all` 用于等待所有 `Promise` 完成，并返回一个包含所有 `Promise` 结果的新 `Promise`。
`Promise.race` 用于等待多个 `Promise` 中的任意一个完成，并返回该 `Promise` 的结果。
它们的区别在于等待的方式和返回结果的处理。`Promise.all` 适用于需要等待多个异步操作全部完成后再进行下一步处理的场景，而 `Promise.race` 适用于需要快速获取第一个完成的异步操作结果的场景。



- `Promise.all`

`Promise.all` 方法接收一个 `Promise` 数组作为参数，返回一个新的 Promise。该新 `Promise` 会等待传入的所有 `Promise` 完成，如果其中有任何一个 `Promise` 失败（reject），则整个 `Promise.all` 也会失败。当所有 `Promise` 都成功（resolve）时，`Promise.all` 返回一个包含所有 `Promise` 结果的数组，顺序与传入的 `Promise` 数组保持一致。

```javascript
const promises = [promise1, promise2, promise3];

Promise.all(promises)
  .then(function(results) {
    // 所有 Promise 都成功完成，results 是一个包含所有 Promise 结果的数组
  })
  .catch(function(error) {
    // 如果任何一个 Promise 失败，整个 Promise.all 会失败
  });
```

使用 `Promise.all` 可以实现并行执行多个异步操作，并在它们都完成后进行统一的处理。适用于需要等待多个异步操作全部完成后再进行下一步处理的场景。


- `Promise.race`

`Promise.race` 方法也接收一个 Promise 数组作为参数，返回一个新的 Promise。该新 Promise 会等待传入的多个 Promise 中的任意一个完成，无论是成功还是失败。当其中任何一个 Promise 完成时，`Promise.race` 返回该 Promise 的结果。

```javascript
const promises = [promise1, promise2, promise3];

Promise.race(promises)
  .then(function(result) {
    // 第一个完成的 Promise 的结果
  })
  .catch(function(error) {
    // 如果第一个完成的 Promise 失败，整个 Promise.race 会失败
  });
```

使用 `Promise.race` 可以实现竞速操作，即等待多个异步操作中最先完成的结果。适用于需要快速获取第一个完成的异步操作结果的场景，比如设置请求超时时间、多个数据源取最快响应等。

`Promise.all` 和 `Promise.race` 的返回值都是一个新的 `Promise`。

:::

## 相关

[简述 Promise，有几种状态、特点是什么、解决了什么问题、优缺点是什么](./070020_promise.md)

[Promise then 第二个参数和catch的区别是什么](./070030_then_secondparam_and_catch.md)

[Promise 和 setTimeout 的区别](./070050_promise_and_settimeout.md)