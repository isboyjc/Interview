---
contributors: 'isboyjc'
---

# async/await 是什么、有什么优势、实现原理？


## 题干

- async/await



## 题解

::: details 点我查看题解

`async/await` 是 JS 中处理异步操作的语法糖，它可以让异步代码看起来像同步代码，具有简洁明了、易于理解和维护的优势。

- **简洁明了**：`async/await` 让异步代码看起来像同步代码，使得代码的编写和阅读更加直观和简单。使用 async 关键字声明的函数可以在内部使用 await 关键字来等待异步操作的结果，而不需要嵌套回调函数或者链式调用 `Promise`。

- **易于理解和维护**：`async/await` 的语法结构更接近传统的同步代码，使得代码的逻辑更加清晰，易于理解和维护。异步操作的顺序执行可以使用顺序结构的代码来表达，而不需要处理回调函数的嵌套或者 `Promise` 的链式调用。

- **错误处理**：`async/await` 可以使用 `try-catch` 语句来捕获和处理异步操作中的错误。这种错误处理方式更加直观和符合同步代码的习惯，可以集中处理异步操作的错误，提高代码的可读性和可维护性。

`async/await` 是基于 `Promise` 和 `Generator` 的语法糖。在函数声明前加上 `async` 关键字，表示该函数是一个异步函数，它会返回一个 `Promise` 对象。在异步函数内部，可以使用 `await` 关键字来等待一个 `Promise` 对象的解析结果。`await` 关键字会暂停函数的执行，直到 `Promise` 对象的状态变为 `resolved`（已解决）或 `rejected`（已拒绝）。在等待期间，函数会暂时释放执行权，允许其他代码执行。
:::


## 相关

[Generator 函数是什么、有什么作用、使用场景](./070080_generator.md)

[Generator 是如何做到中断和恢复的](./070090_generator_Interruption_and_recovery.md)

[async/await, generator, promise这三者的关联和区别是什么](./070100_promise_asyncawait_generator.md)