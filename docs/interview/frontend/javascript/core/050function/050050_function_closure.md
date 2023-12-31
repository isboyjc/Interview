---
contributors: 'isboyjc'
---

# 什么是闭包、优缺点、应用场景？


## 题干

- 闭包



## 题解

::: details 点我查看题解

当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域外执行，就产生了闭包。

简单来说，闭包可以以 **函数内部创建的函数** 为前提，它可以访问并持有函数外部的变量，即使在函数外部已经执行完毕，依然可以访问到这些变量。

其实如果一个函数引用了自由变量，那么该函数就是一个闭包。什么是自由变量？自由变量是指不属于该函数作用域的变量（所有全局变量都是自由变量，严格来说引用了全局变量的函数都是闭包，但这种闭包并没有什么用，通常情况下我们说的闭包是指函数内部的函数）。

所以要形成闭包，需要在函数内部返回一个函数，并且这个返回的函数持有对外部变量的引用。

优点？

- 变量保护和封装：闭包可以创建私有变量，这些变量对外部是不可见的，从而保护和封装数据，避免命名冲突和意外修改。
- 数据持久化：闭包可以使函数内的变量在函数执行完毕后仍然存在，因此可以实现数据的持久化，供后续使用。
- 实现模块化：闭包可以将一组相关的功能封装在一个函数内部，形成一个独立的模块，提高代码的可维护性和可复用性。

缺点？

- 内存占用：闭包会引用外部函数的变量，导致这些变量无法被垃圾回收机制回收，可能会占用更多的内存。
- 性能消耗：由于闭包涉及作用域链的查找，访问外部变量的速度相对较慢，可能对性能产生一定的影响。
- 容易造成内存泄漏：如果闭包中持有对外部变量的引用，而这些变量又不再需要使用，就会造成内存泄漏，因为这些变量无法被释放。

使用场景？

- 封装私有变量和方法：通过闭包可以创建私有变量和方法，实现封装和隐藏，提供对外部的安全接口。
- 实现计数器和缓存：闭包可以用于创建计数器和缓存等功能，因为闭包可以持久化数据。
- 回调函数和事件处理：在异步编程中，闭包可以用于保存回调函数的上下文和状态，确保正确的函数调用。
- 模块化开发：通过使用闭包，可以实现模块化开发，将相关的功能和数据封装在一个闭包中，提供对外的接口。
- ...

:::

