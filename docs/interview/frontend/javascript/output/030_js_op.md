---
contributors: 'isboyjc'
---

# No.0030


## 题干

```js
console.log([].concat[1, 2, 3]);
```



## 题解

::: details 点我查看题解


```js
// undefined
```


`concat` 是一个数组的方法，它可以接受一个或多个参数，将它们和原数组连接起来，返回一个新的数组，不改变原数组。通常，我们会使用括号 `()` 来调用 `concat` 方法，例如：

```javascript
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr1.concat(arr2); // 返回 [1, 2, 3, 4, 5, 6]
```

但是，我们也可以使用方括号 `[]` 来调用 `concat` 方法，这是因为 JS 中的函数也是一种对象，它们可以有自己的属性和方法。例如：

```javascript
function foo() {
  console.log("Hello");
}
foo.bar = "World"; // 给函数foo添加一个属性bar
console.log(foo.bar); // 输出 "World"
```

所以，当我们使用方括号 [] 来调用 `concat` 方法时，相当于访问了数组对象的一个属性。例如：

```javascript
function fn(){}

fn.a = 1

console.log(fn['a']) // 1
console.log(fn[1,2,3]) // undefined

// fn() == [].concat
```
:::


