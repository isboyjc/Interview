---
contributors: 'isboyjc'
---

# No.0010


## 题干

```js
let arr = Array(3);
arr[0] = 2;

arr.map(function(elem){ return '1'})

console.log(arr)
```



## 题解

<!-- ::: details 点我查看题解 -->

```js
// [2, empty × 2]
```

- 首先，程序使用 `Array(3)` 创建了一个长度为 3 的空数组，然后给第一个元素赋值为 2，所以数组 `arr` 变成了 `[2, empty, empty]`。

- 然后，使用 `map()` 方法对每个元素应用一个函数，这个函数的作用是返回字符串 `1`。但是，`map()` 方法只会对有值的元素执行函数，对于空元素，它会跳过并保持原样。所以，数组中只有第一个元素被替换为 `1`，其他两个元素仍然为空。因此，到这一步返回的新数组就变成了 `[‘1’, empty, empty]`。

- 最后，使用 `console.log()` 打印出数组 `arr` 的内容。由于数组 map 方法没有接返回值，所以并不能改变原数组，所以打印出来的结果是 `[2, empty × 2]`。。。。

<!-- ::: -->

## 相关

[数组的哪些 API 不会改变原数组](../core/040array/040028_no_update_originalarray.md)