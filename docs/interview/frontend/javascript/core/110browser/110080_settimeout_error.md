---
contributors: 'isboyjc'
---

# setTimeout 倒计时为什么会出现误差？


## 题干

- setTimeout

- 定时器误差



## 题解

<!-- ::: details 点我查看题解 -->

造成 `setTimeout` 定时器出现误差的可能性有三种：

- JS 是单线程的：这意味着同一时间只能执行一个任务，其他任务都要排队等待。如果前一个任务执行时间过长，就会导致后面的任务延迟执行，从而造成定时器误差。
- `setTimeout` 的最小延迟时间不是准确的：根据 HTML 标准，`setTimeout` 的最小延迟时间是 4ms，但是不同的浏览器可能有不同的实现，有些浏览器可能会把最小延迟时间设为 10ms 或者更高。而且，如果浏览器处于后台或者省电模式，那么最小延迟时间可能会被设置为 1000ms 或者更高。这些都会影响定时器的准确性。
- 浏览器的事件循环机制：浏览器中对 JS 的事件循环机制，它会按照一定的顺序执行不同类型的任务，比如宏任务（`macrotask`）和微任务（`microtask`）。`setTimeout` 属于宏任务，它会被放入一个宏任务队列中等待执行。但是，在每个宏任务执行之前，浏览器会先检查并执行微任务队列中的所有任务，比如 `Promise.then` 或 `MutationObserver` 等。如果微任务队列中的任务过多或者过于耗时，那么就会推迟宏任务队列中的任务执行，从而造成定时器误差。

<!-- ::: -->


## 相关

[setTimeout、setInterval、requestAnimationFrame 各有什么特点？](./110070_settimeout_setinterval_requestanimationframe.md)

[阐述 JS 事件循环 EventLoop？](../100eventloop/100030_eventloop.md)

[setTimeout(fn, 0)多久才执行 -> Event Loop？](../100eventloop/100040_eventloop_settimeout0.md)
