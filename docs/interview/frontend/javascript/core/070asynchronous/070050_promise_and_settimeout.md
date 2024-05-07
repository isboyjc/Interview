---
contributors: 'isboyjc'
---

# Promise 和 setTimeout 的区别？


## 题干

- Promise

- setTimeout



## 题解

<!-- ::: details 点我查看题解 -->

`Promise` 和 `setTimeout` 是用于处理异步操作的两种不同机制。

`Promise then` 回调是微任务，`setTimeout` 是宏任务。

`Promise` 是一种更强大、灵活且可组合的异步编程方式，它可以处理复杂的异步操作。`Promise` 提供了一种更结构化的方式来管理异步代码，通过链式调用 `then` 方法可以处理异步操作的成功和失败。而 `setTimeout` 则是一种简单的定时器机制，用于在指定的时间间隔后执行一次回调函数。

`Promise` 提供了更好的错误处理机制。通过 `Promise` 的链式调用，可以在 then 方法中捕获和处理异步操作的错误。`Promise` 还可以通过 `catch` 方法捕获整个链中的错误。而 `setTimeout` 无法直接捕获异步操作的错误，需要在回调函数中手动处理错误。

`Promise` 具有更强的可组合性。通过 `Promise` 的链式调用，可以将多个异步操作按顺序组合起来，形成一个异步操作的序列。这种组合可以更清晰地表达代码的逻辑和流程。而 `setTimeout` 只能用于单个异步操作的延迟执行，无法方便地组合多个异步操作。

`Promise` 提供了更精确的控制流程的能力。通过 `Promise` 的方法（如 `Promise.all`、`Promise.race`、`async/await`）可以更好地控制多个异步操作的执行顺序和并发性。而 `setTimeout` 只能通过嵌套回调函数或者使用定时器的计数器来实现类似的控制流程，代码可读性较差。

<!-- ::: -->

## 相关


[简述 Promise，有几种状态、特点是什么、解决了什么问题、优缺点是什么](./070020_promise.md)

[Promise then 第二个参数和catch的区别是什么](./070030_then_secondparam_and_catch.md)

[Promise.all 和 Promise.race 的区别和使用场景](./070040_promise_all_and_race.md)

[Promise 和 setTimeout 的区别](./070050_promise_and_settimeout.md)