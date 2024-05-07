---
contributors: 'isboyjc'
---

# JS 中事件循环和 Node 事件循环区别？process.nextTick 执行顺序？


## 题干

- 事件循环

- NodeJS 事件循环



## 题解

<!-- ::: details 点我查看题解 -->

NodeJS 中的事件循环是由 `libuv` 库实现的，它有六个阶段，分别是 `timers`、`pending callbacks`、`idle/prepare`、`poll`、`check` 和 `close callbacks`。每个阶段都有一个 `FIFO` 队列来执行回调。

- **timers**：执行由 `setTimeout()` 和 `setInterval()` 等 `timer` 预定的回调。
- **pending callbacks**：处理一些上一轮循环中的少数未执行的 `I/O` 回调。
- **idle, prepare**：此阶段仅在 Node 内部使用，与开发者无关。
- **poll**：执行 `I/O` 回调，如果 `poll` 队列不为空，则遍历队列同步执行，如果 `poll` 队列为空，若有 `setImmediate` 回调需执行，`poll` 阶段会停止并且进入到 `check` 阶段执行该回调，若没有 `setImmediate` 回调需要执行，会等待回调被加入到队列中并立即执行回调，这里会有个超时时间设置防止一直等待下去。当设定了 `timer` 的话且 `poll` 队列为空时，还会判断是否有 `timer` 超时，如果有的话会回到 `timer` 阶段执行回调。`setImmediate` 回调优先级大于 `timer` 回调。
- **check**：执行 `setImmediate()` 回调。
- **close callbacks**：此阶段执行一些关闭事件的回调函数，例如 `socket.on('close', ...)`。

事件循环的执行顺序是按照这六个阶段依次进行，但是在每个阶段之间，都会执行 `process.nextTick` 和其他微任务队列中的回调。这意味着 NodeJS 中的微任务会在事件循环的各个阶段之间执行，而不是像浏览器那样只在宏任务之后执行。


NodeJS 中事件循环简述（与开发者相关）：

- NodeJS 会先执行所有类型为 `timers` 的宏任务，然后执行所有的微任务（NextTick 除外）
- 进入 `poll` 阶段，执行几乎所有宏任务，然后执行所有的微任务
- 再执行所有类型为 `check` 的宏任务，然后执行所有的微任务
- 再执行所有类型为 `close callbacks` 的宏任务，然后执行所有的微任务
- 至此，完成一个 Tick，回到 `timers` 阶段
- ……
- 如此反复，无穷无尽……

浏览器事件循环简述：

- 先执行一个宏任务，然后执行所有的微任务
- 再执行一个宏任务，然后执行所有的微任务
- ……
- 如此反复，无穷无尽……



`process.nextTick` 是 NodeJS 中特有的一个异步函数，它不属于任何事件循环阶段，而是在当前操作完成后立即执行。它比其他微任务优先级更高，会在任何异步操作之前执行。`process.nextTick` 的执行顺序是按照调用顺序来的，如果递归调用 `process.nextTick`，会导致其他异步操作被饿死，所以要避免这种情况。


<!-- ::: -->


## 相关

[什么是微任务、宏任务？](./100010_microtask_macrotask.md)

[微任务、宏任务的区分是为了做什么? 优先级?](./100020_microtask_macrotask_distinguish.md)

[阐述 JS 事件循环 EventLoop？](./100030_eventloop.md)

[setTimeout(fn, 0)多久才执行 -> Event Loop？](./100040_eventloop_settimeout0.md)

