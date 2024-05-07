---
contributors: 'isboyjc'
---

# setTimeout、setInterval、requestAnimationFrame 各有什么特点？

## 题干

- setTimeout

- setInterval

- requestAnimationFrame



## 题解

<!-- ::: details 点我查看题解 -->

`setTimeout`、`setInterval` 和 `requestAnimationFrame` 是 JS 中用于执行定时任务的三个函数，它们之间有以下区别：

1. `setTimeout`：用于在指定的时间间隔后执行一次任务。它接受两个参数，第一个参数是要执行的函数或要执行的代码，第二个参数是延迟的毫秒数。`setTimeout` 只会执行一次任务。

```javascript
setTimeout(function() {
  // 要执行的任务
}, 1000); // 1秒后执行
```

2. `setInterval`：用于按照指定的时间间隔重复执行任务。它接受两个参数，第一个参数是要执行的函数或要执行的代码，第二个参数是重复执行的毫秒数。`setInterval` 会按照指定的时间间隔重复执行任务，直到被取消。

```javascript
setInterval(function() {
  // 要执行的任务
}, 1000); // 每隔1秒执行一次
```

需要注意的是，`setInterval` 可能会出现累积性误差，因为它是按照指定的时间间隔重复执行任务，而不考虑任务的实际执行时间。如果任务的执行时间超过了指定的时间间隔，会导致任务的累积延迟。

3. `requestAnimationFrame`：用于在浏览器的下一次重绘之前执行任务，通常用于执行动画效果。它接受一个回调函数作为参数，浏览器会在下一次重绘之前调用这个回调函数。与前两者不同，`requestAnimationFrame` 的执行时间是由浏览器决定的，它会根据浏览器的刷新频率来决定执行的时机，通常为每秒60次（60帧）。

```javascript
requestAnimationFrame(function() {
  // 要执行的任务
});
```

相比于 `setTimeout` 和 `setInterval`，`requestAnimationFrame` 具有更好的性能和动画流畅度，因为它会在浏览器的重绘间隔内执行任务，避免了过度绘制。同时，当页面处于非激活状态时，`requestAnimationFrame` 会暂停执行，节省了资源消耗。

总结：
- `setTimeout` 用于在指定的时间间隔后执行一次任务。
- `setInterval` 用于按照指定的时间间隔重复执行任务，可能会出现累积性误差。
- `requestAnimationFrame` 用于在浏览器的下一次重绘之前执行任务，通常用于执行动画效果，具有更好的性能和动画流畅度。

<!-- ::: -->

## 相关

[setTimeout 倒计时为什么会出现误差](./110080_settimeout_error.md)