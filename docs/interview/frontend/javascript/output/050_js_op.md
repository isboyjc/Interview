---
contributors: 'isboyjc'
---

# No.0050


## 题干

```js
console.log(Number.isFinite('0') === isFinite('0'));

console.log(Number.isFinite(0) === isFinite('0'));
```




## 题解

<!-- ::: details 点我查看题解 -->

```js
// false
// true
```

`Number.isFinite()` 方法和全局的 `isFinite()` 函数在检查一个值是否是有限数时有不同的行为。

`Number.isFinite()` 方法只有当值是数字类型并且是有限数时才返回 true。它不会在测试之前将值强制转换为数字。因此，`Number.isFinite('0')` 返回 false，因为 `'0'` 是一个字符串，不是一个数字。

全局的 `isFinite()` 函数只有当值是有限数或者可以转换为有限数时才返回 true。它会在测试之前将值强制转换为数字。因此，`isFinite('0')` 返回 true，因为 `'0'` 可以转换为数字 0，而 0 是一个有限数。

<!-- ::: -->



## 相关

[isNaN 和 Number.isNaN 函数的区别？](../core/020datatype/020080_isnan_number.isnan.md)

