---
contributors: 'isboyjc'
---

# async/await, generator, promise这三者的关联和区别是什么?


## 题干

- async/await

- generator

- promise

## 题解

<!-- ::: details 点我查看题解 -->

`Promise` 是 JS 中最早引入的异步编程机制。它表示一个异步操作的最终完成或失败，并提供了一种处理异步操作结果的方式。通过使用 `Promise`，我们可以通过链式调用 `.then()` 和 `.catch()` 方法来处理异步操作的成功和失败情况。

`Generator` 是一种特殊的函数，通过使用 `function*` 关键字定义。`Generator` 函数可以生成迭代器对象，实现了可中断和可恢复的执行过程。通过使用 `yield` 关键字，我们可以在 `Generator` 函数内部暂停执行，并返回一个值。`Generator` 函数的执行需要配合迭代器对象的调用，例如使用 `for...of` 循环或手动调用 `next()` 方法。

`async/await` 是 ES8（ECMAScript 2017）中引入的一种语法糖，用于简化 `Promise` 的使用。`async` 用于定义一个异步函数，它内部可以使用 await 关键字来等待一个 `Promise` 的完成，并以同步的方式获取 `Promise` 的结果。`async/await` 让我们可以使用类似同步代码的方式编写异步操作，使得代码更加清晰和易读。

关联：

`async/await` 可以看作是基于 `Generator+Promise` 的语法糖，更加简洁易用，不需要手动调用迭代器的方法，而是直接使用 `await` 等待 `Promise` 的完成。

区别：

- `Promise` 是一种用于处理异步操作的对象，它的主要特点是可以链式调用 `.then()` 和 `.catch()` 方法来处理异步操作的结果。`Promise` 一旦创建，就会立即执行，并且无法中途暂停和恢复执行。
- `Generator` 是一种特殊的函数，它可以生成迭代器对象，实现了可中断和可恢复的执行过程。`Generator` 函数的执行需要配合迭代器对象的调用，通过多次调用 `next()` 方法来逐步执行 `Generator` 函数内部的代码。
- `async/await` 是一种语法糖，它基于 `Promise` 提供了一种更简洁的方式来处理异步操作。`async` 函数内部可以使用 `await` 关键字来等待 `Promise` 的完成，并以同步的方式获取 `Promise` 的结果。

<!-- ::: -->

## 相关

[简述 Promise，有几种状态、特点是什么、解决了什么问题、优缺点是什么](./070020_promise.md)

[Promise then 第二个参数和catch的区别是什么](./070030_then_secondparam_and_catch.md)

[Promise.all 和 Promise.race 的区别和使用场景](./070040_promise_all_and_race.md)

[Promise 和 setTimeout 的区别](./070050_promise_and_settimeout.md)

[async/await 是什么、有什么优势、实现原理](./070060_async_await.md)

[Generator 函数是什么、有什么作用、使用场景](./070080_generator.md)

[Generator 是如何做到中断和恢复的](./070090_generator_Interruption_and_recovery.md)


## 扩展

[现代 JavaScript 教程 - Generator](https://zh.javascript.info/generators)