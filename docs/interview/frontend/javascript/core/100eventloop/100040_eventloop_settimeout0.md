---
contributors: 'isboyjc'
---

# setTimeout(fn, 0)多久才执行 -> Event Loop？


## 题干

- setTimeout(fn, 0)多久才执行



## 题解

::: details 点我查看题解

当使用 `setTimeout(fn, 0)` 将任务添加到宏任务队列时，它并不是立即执行的，而是要等待下一个事件循环迭代才会执行。

在事件循环的执行过程中，当执行完当前的微任务队列后，会检查宏任务队列是否为空。如果宏任务队列不为空，会从队列中取出一个宏任务并执行。而 `setTimeout(fn, 0)` 添加的任务就是一个宏任务。

`setTimeout(fn, 0)` 并不意味着 fn 一定会在0毫秒后执行，因为还要受到以下因素的影响：

- 浏览器或 Node 环境下的事件循环机制，它会按照一定的顺序执行宏任务和微任务，而 `setTimeout(fn, 0)` 属于宏任务，所以它会在当前的微任务队列清空后才执行。
- 浏览器或 Node 环境下的最小延时时间，它规定了 `setTimeout(fn, 0)` 的最短等待时间，一般为 4 毫秒或者 1 毫秒，所以即使设置为 0 毫秒，也不一定能达到。
- 浏览器或 Node 环境下的其他异步任务，它们可能会占用事件循环的时间，导致 `setTimeout(fn, 0)` 的执行被推迟。
因此， `setTimeout(fn, 0)` 的实际执行时间是不确定的，它只能保证在当前同步代码执行完毕后，尽可能早地执行 fn。

:::


## 相关

[什么是微任务、宏任务？](./100010_microtask_macrotask.md)

[微任务、宏任务的区分是为了做什么? 优先级?](./100020_microtask_macrotask_distinguish.md)

[阐述 JS 事件循环 EventLoop？](./100030_eventloop.md)

[JS 中事件循环和 Node 事件循环区别？process.nextTick 执行顺序？](./100050_eventloop_node.md)


