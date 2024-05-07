---
contributors: 'isboyjc'
---

# 什么是函数组合，应用场景？


## 题干

- 函数组合



## 题解

<!-- ::: details 点我查看题解 -->

函数组合是指将多个函数按照一定的顺序组合在一起，形成一个新的函数。组合函数可以将一个函数的输出作为另一个函数的输入，从而实现函数的串联和复用。

函数组合有两种常见的方式：管道（`Pipeline`）和复合（`Composition`）。

- 管道 Pipeline

管道是指将多个函数按照从左到右的顺序依次执行，并将前一个函数的输出作为下一个函数的输入。

例如，假设有三个函数 `f`、`g` 和 `h`，我们可以通过 `h(g(f(x)))` 的方式将它们组合在一起，其中 `x` 是输入值。

```javascript
const f = x => x + 1;
const g = x => x * 2;
const h = x => x - 3;

const pipeline = (x) => h(g(f(x)));

console.log(pipeline(5)); // 输出：9
```

在上例中，`pipeline` 函数将函数 `f`、`g` 和 `h` 按照从左到右的顺序组合在一起，依次对输入值进行转换。



- 复合 Composition

复合是指将多个函数合并成一个新的函数，形成一个函数链。

例如，假设有三个函数 `f`、`g` 和 `h`，我们可以通过 `compose(h, g, f)(x)` 的方式将它们组合在一起，其中 `x` 是输入值。

```javascript
const f = x => x + 1;
const g = x => x * 2;
const h = x => x - 3;

const compose = (...funcs) => input => funcs.reduceRight((acc, fn) => fn(acc), input);

const composedFn = compose(h, g, f);

console.log(composedFn(5)); // 输出：9
```

在上例中，`compose` 函数接受多个函数作为参数，并返回一个新的函数，该函数按照从右到左的顺序依次执行这些函数。通过调用 `composedFn` 函数，我们可以将函数 `f`、`g` 和 `h` 组合在一起，依次对输入值进行转换。

函数组合可以带来许多好处，包括代码的可读性、可维护性和可复用性。通过将函数按照一定的顺序组合在一起，我们可以将复杂的问题分解成更小的部分，并将这些部分组合成一个整体解决方案。函数组合也是函数式编程中的重要概念，它能够提高代码的抽象能力和灵活性。
<!-- ::: -->



## 相关

[JS 实现 compose 方法](../../write/0070_js_write_compose.md)
