---
contributors: 'isboyjc'
---

# 如何改变函数内部的 this 指针的指向？


## 题干

- 改变函数内部的 this 指向



## 题解

<!-- ::: details 点我查看题解 -->

JS 中的函数对象提供了 `call()` 和 `apply()` 方法，它们可以显式地指定函数执行时的 `this` 值。


- 使用 `call()` 方法

`call()` 方法接受一个对象作为参数，将该对象作为函数执行时的 `this` 值。可以在 `call()` 方法后面传入其他参数作为函数的参数。

🌰：

```javascript
function sayHello() {
  console.log(`Hello, ${this.name}!`);
}

const obj = {
  name: 'Alice'
};

sayHello.call(obj); // 输出：Hello, Alice!
```


- 使用 `apply()` 方法

`apply()` 方法与 `call()` 方法类似，但它接受一个数组作为参数，数组中的元素将作为函数的参数传递进去。

🌰：

```javascript
function sayHello(city) {
  console.log(`Hello, ${this.name} from ${city}!`);
}

const obj = {
  name: 'Alice'
};

sayHello.apply(obj, ['New York']); // 输出：Hello, Alice from New York!
```


- 使用 `bind()` 方法

`bind()` 方法创建一个新的函数，将其 `this` 值绑定到指定的对象上。与 `call()` 和 `apply()` 不同，`bind()` 方法不会立即执行函数，而是返回一个新函数，可以稍后调用。例如：

```javascript
function sayHello() {
  console.log(`Hello, ${this.name}!`);
}

const obj = {
  name: 'Alice'
};

const boundFunction = sayHello.bind(obj);
boundFunction(); // 输出：Hello, Alice!
```

在上例中，`bind()` 方法将 `sayHello` 函数的 `this` 值绑定到 `obj` 对象上，并返回一个新的函数 `boundFunction`。调用 `boundFunction()` 时，新函数的 `this` 值仍然指向 `obj` 对象。



- 使用箭头函数

箭头函数不具有自己的 `this` 值，而是继承外部作用域的 `this` 值。因此，可以通过定义箭头函数来改变函数内部的 `this` 指向。

🌰：

```javascript
const obj = {
  name: 'Alice',
  sayHello: function() {
    const arrowFunc = () => {
      console.log(`Hello, ${this.name}!`);
    };
    arrowFunc();
  }
};

obj.sayHello(); // 输出：Hello, Alice!
```

在上例中，`sayHello` 方法内部定义了一个箭头函数 `arrowFunc`，它继承了外部作用域的 `this` 值，因此在箭头函数中的 `this` 指向 `obj` 对象。

<!-- ::: -->

## 相关

[简单阐述对 This 的理解](./080010_this.md)

[call、apply 及 bind 函数区别](./080030_call_apply_bind.md)

[JS 实现 call 方法](../../write/0100_js_write_call.md)

[JS 实现 apply 方法](../../write/0120_js_write_apply.md)

[JS 实现 bind 方法](../../write/0110_js_write_bind.md)