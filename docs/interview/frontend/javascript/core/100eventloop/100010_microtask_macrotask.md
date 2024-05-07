---
contributors: 'isboyjc'
---

# 什么是微任务、宏任务？


## 题干

- 微任务

- 宏任务



## 题解

<!-- ::: details 点我查看题解 -->

宏任务（Macrotask）是指由 JavaScript 引擎在执行过程中产生的、需要在主线程上执行的任务。常见的宏任务包括 setTimeout、setInterval、I/O 操作、DOM 事件等。宏任务会被添加到任务队列中，等待主线程空闲时执行。

微任务（Microtask）是指在主线程执行完当前任务后立即执行的任务。微任务通常具有高优先级，会在下一个事件循环（Event Loop）迭代之前执行完毕。常见的微任务包括 Promise 的回调、MutationObserver 的回调、process.nextTick（Node.js 环境）等。

执行顺序上，每个宏任务执行完毕后，会检查是否有微任务需要执行，如果有，则依次执行所有微任务，直到微任务队列为空，然后再执行下一个宏任务。这个过程会不断循环，构成了事件循环的机制。

<!-- ::: -->


## 相关

[微任务、宏任务的区分是为了做什么? 优先级?](./100020_microtask_macrotask_distinguish.md)

[阐述 JS 事件循环 EventLoop？](./100030_eventloop.md)
