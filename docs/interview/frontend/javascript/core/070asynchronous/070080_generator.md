---
contributors: 'isboyjc'
---

# Generator 函数是什么、有什么作用、使用场景？


## 题干

- Generator



## 题解

::: details 点我查看题解

`Generator` 函数是 JS 中的一种特殊函数，它通过使用 `function*` 关键字来定义。`Generator` 函数可以被暂停和恢复，允许在函数执行过程中多次返回值，从而实现了一种灵活的迭代器。

🌰：

```js
function* fibonacci() {
  let prev = 0;
  let curr = 1;

  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}


const fib = fibonacci();

console.log(fib.next().value); // 输出：1
console.log(fib.next().value); // 输出：1
console.log(fib.next().value); // 输出：2
console.log(fib.next().value); // 输出：3
console.log(fib.next().value); // 输出：5
// ...
```


`Generator` 函数的作用和使用场景主要体现在以下几个方面：

- **生成迭代器**：`Generator` 函数返回一个迭代器对象，通过调用该对象的 `next()` 方法，我们可以逐步执行 `Generator` 函数内部的代码，并获取每个阶段的返回值。这使得我们可以以一种分步的方式控制函数的执行，从而实现更灵活的迭代逻辑。
- **简化异步编程**：`Generator` 函数可以与 `yield` 关键字结合使用，实现异步操作的顺序执行。通过在 `Generator` 函数内部使用 `yield` 关键字暂停函数的执行，并在异步操作完成后恢复执行，我们可以编写出更清晰、简洁的异步代码，避免了回调地狱和复杂的 `Promise` 链式调用。
- **控制流程**：`Generator` 函数的暂停和恢复特性使得我们可以在函数执行过程中灵活地控制流程。我们可以根据需要多次调用迭代器的 `next()` 方法，实现条件判断、循环等复杂的控制逻辑，从而提高代码的可读性和可维护性。
- **惰性计算**：`Generator` 函数支持惰性计算，即只在需要的时候才生成值。通过在 `Generator` 函数中使用 `yield` 关键字，我们可以逐步生成值，而不是一次性生成所有值。这在处理大数据集合或者无限序列时非常有用，可以节省内存和计算资源。

:::


## 相关

[Generator 是如何做到中断和恢复的](./070090_generator_Interruption_and_recovery.md)

[async/await, generator, promise这三者的关联和区别是什么](./070100_promise_asyncawait_generator.md)

## 扩展

[现代 JavaScript 教程 - Generator](https://zh.javascript.info/generators)