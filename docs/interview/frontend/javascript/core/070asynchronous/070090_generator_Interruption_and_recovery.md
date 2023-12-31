---
contributors: 'isboyjc'
---

# Generator 是如何做到中断和恢复的?


## 题干

- Generator 中断和恢复



## 题解

::: details 点我查看题解

当我们调用一个 `Generator` 函数时，它并不会立即执行函数体内的代码，而是返回一个迭代器对象。这个迭代器对象具有 `next()` 方法，通过调用这个方法，我们可以逐步执行 `Generator` 函数内部的代码。当调用 `next()` 方法时，`Generator` 函数会执行到下一个 `yield` 关键字的位置，并将 `yield` 后面的表达式作为返回值。此时，`Generator` 函数会暂停执行，并将返回值包装在一个对象中返回给调用者。调用者可以通过迭代器对象返回的对象中的 `value` 属性获取到当前阶段的返回值。此外，返回的对象还包含一个 `done` 属性，用于指示 `Generator` 函数是否已经执行完毕。当我们再次调用迭代器的 `next()` 方法时，`Generator` 函数会从上次暂停的位置继续执行，直到遇到下一个 `yield` 关键字或者函数结束。

`Generator` 函数的中断和恢复功能是通过生成器对象的内部状态管理实现的。当我们调用 `Generator` 函数时，实际上返回了一个生成器对象，该对象具有以下属性和方法：

1. `[[GeneratorState]]`：表示生成器的当前状态，可以是 `"suspended"`（暂停状态）、`"executing"`（执行状态）或 `"closed"`（关闭状态）。

2. `[[GeneratorContext]]`：保存了生成器函数的执行上下文，包括局部变量、函数堆栈和执行指针等信息。

3. `next(value)` 方法：用于执行生成器函数的下一个步骤。当调用 `next()` 方法时，生成器函数会从上次暂停的位置继续执行，直到遇到下一个 `yield` 表达式或函数结束。`value` 参数可以作为上一个 `yield` 表达式的返回值。

4. `return(value)` 方法：用于提前终止生成器函数的执行，并返回指定的值。调用 `return()` 方法会将生成器的状态设置为 `"closed"`，表示生成器已经结束。

5. `throw(exception)` 方法：用于在生成器函数内部抛出异常。调用 `throw()` 方法会导致生成器函数抛出异常，并将生成器的状态设置为 `"closed"`。

当我们调用生成器对象的 `next()` 方法时，生成器函数会执行到下一个 `yield` 表达式，并将 `yield` 后面的表达式作为返回值。此时，生成器对象的状态会从 `"suspended"` 变为 `"executing"`。

当生成器函数遇到 `yield` 表达式时，它会暂停执行，并将当前状态保存在生成器对象的内部。生成器对象的状态会再次变为 `"suspended"`，并将 `yield` 后面的表达式作为返回值返回给调用者。

当我们再次调用生成器对象的 `next()` 方法时，生成器函数会从上次暂停的位置继续执行，直到遇到下一个 `yield` 表达式或函数结束。这个过程可以通过保存的生成器状态和上下文信息来实现。

如果我们调用生成器对象的 `return()` 方法或 `throw()` 方法，生成器函数会提前终止执行，并将生成器的状态设置为 `"closed"`。这样，我们可以通过这两个方法来显式地结束生成器函数的执行。

总的来说，生成器函数的中断和恢复功能是通过生成器对象的内部状态管理和保存上下文信息实现的。每次调用生成器对象的 `next()` 方法时，生成器函数会根据保存的状态和上下文信息来决定从哪里继续执行，并返回相应的值。这种机制使得生成器函数能够实现中断和恢复的效果。

:::


## 相关

[Generator 函数是什么、有什么作用、使用场景](./070080_generator.md)

[async/await, generator, promise这三者的关联和区别是什么](./070100_promise_asyncawait_generator.md)

## 扩展

[现代 JavaScript 教程 - Generator](https://zh.javascript.info/generators)