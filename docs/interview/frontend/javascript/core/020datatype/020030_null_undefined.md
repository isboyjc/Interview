---
contributors: 'isboyjc'
---

# null 和 undefined 区别？

## 题干

- null

- undefined

## 题解

<!-- ::: details 点我查看题解 -->。

`null` 表示一个空对象指针。

`Undefined` 和 `Null` 都是基本数据类型，都表示没有值。

`undefined` 代表的含义是未定义，`null` 代表的含义是空对象。`undefined` 表示声明了变量但未初始化，或函数未传参，`null` 主要用于赋值给一些可能会返回对象的变量，作为初始化。

`undefined` 在 JS 中不是一个保留字，这意味着可以使用 `undefined` 来作为一个变量名，但是这样的做法是非常危险的，它会影响对 `undefined` 值的判断。我们可以通过一些方法获得安全的 `undefined` 值，比如说 `void 0`。

当对这两种类型使用 `typeof` 进行判断时，`Null` 类型化会返回 `object`，这是一个历史遗留的问题。当使用双等号对两种类型的值进行比较时会返回 `true`，使用三个等号时会返回 `false`。
<!-- ::: -->


## 相关

[typeof null 的结果是什么，为什么](./020040_typeof_null.md)

