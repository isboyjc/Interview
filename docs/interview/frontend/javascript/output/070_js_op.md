---
contributors: 'isboyjc'
---

# No.0070


## 题干

```js
let newList = [1,2,3].push(4);
console.log(newList.push(4));
```



## 题解

::: details 点我查看题解

```js
// newList.push is not a function
```
数组的 `push` 方法并不会返回修改后的数组，而是返回数组的新长度

:::
