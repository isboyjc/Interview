---
contributors: 'isboyjc'
---

# No.0110


## 题干

```js
function foo() {
  let a = b = 0;
  a++;
  return a; 
}

foo();

console.log(typeof a);
console.log(typeof b);
```




## 题解

::: details 点我查看题解

```js
console.log(typeof a); // undefined
console.log(typeof b); // number
```

:::



## 相同


## 相关


## 扩展

