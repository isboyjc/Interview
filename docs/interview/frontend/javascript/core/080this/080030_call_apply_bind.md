---
contributors: 'isboyjc'
---

# call、apply 及 bind 函数区别？


## 题干

- call

- apply

- bind



## 题解

::: details 点我查看题解

`call()`、`apply()` 和 `bind()` 都是 JS 函数对象提供的方法，它们用于改变函数执行时的 `this` 值。虽然它们的目标相同，但它们在使用方式和功能上有一些区别。

- `call()` 方法：`call()` 方法用于在函数执行时显式指定函数的 `this` 值，并可以传递多个参数作为函数的参数。`call()` 方法的语法为 `function.call(thisArg, arg1, arg2, ...)`。
  - `thisArg`：指定函数执行时的 `this` 值，即函数内部的 `this` 指向的对象。
  - `arg1, arg2, ...`：可选参数，作为函数的实际参数传递进去。

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

在上例中，`call()` 方法将 `sayHello` 函数的 `this` 值指定为 `obj` 对象，使得函数内部的 `this` 指向了 `obj` 对象。



- `apply()` 方法：`apply()` 方法与 `call()` 方法类似，也是用于显式指定函数的 `this` 值，但它接受一个数组作为参数，数组中的元素将作为函数的参数传递进去。`apply()` 方法的语法为 `function.apply(thisArg, [argsArray])`。
  - `thisArg`：指定函数执行时的 `this` 值，即函数内部的 `this` 指向的对象。
  - `argsArray`：可选参数，作为函数的实际参数传递进去的数组。

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

在上例中，`apply()` 方法将 `sayHello` 函数的 `this` 值指定为 `obj` 对象，并将 `'New York'` 作为参数传递给函数。



- `bind()` 方法：`bind()` 方法创建一个新的函数，并将其 `this` 值绑定到指定的对象上。与 `call()` 和 `apply()` 不同，`bind()` 方法不会立即执行函数，而是返回一个新函数，可以稍后调用。`bind()` 方法的语法为 `function.bind(thisArg, arg1, arg2, ...)`。
  - `thisArg`：指定函数执行时的 `this` 值，即函数内部的 `this` 指向的对象。
  - `arg1, arg2, ...`：可选参数，作为函数的预设参数。

🌰：

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

在上例中，`bind()` 方法将 `sayHello` 函数的 `this` 值绑定到 `obj` 对象，并返回一个新的函数 `boundFunction`。调用 `boundFunction()` 时，新函数的 `this` 值仍然指向 `obj` 对象。


总结：

- `call()` 和 `apply()` 方法用于立即调用函数，并显式指定函数的 `this` 值和参数。
- `call()` 方法接受一系列参数，而 `apply()` 方法接受一个数组作为参数。
- `bind()` 方法创建一个新的函数，并将其 `this` 值绑定到指定的对象上，返回的是一个绑定了 `this` 值的新函数，需要手动调用。
- `bind()` 方法可以预设函数的参数，而 `call()` 和 `apply()` 方法需要在调用时传入参数。
- 三者都用于改变函数内部的 `this` 指针的指向，提供了灵活的方式来控制函数的执行上下文。

:::

## 相关

[简单阐述对 This 的理解](./080010_this.md)

[如何改变函数内部的 this 指针的指向](./080020_update_function_this.md)

[JS 实现 call 方法](../../write/0100_js_write_call.md)

[JS 实现 apply 方法](../../write/0120_js_write_apply.md)

[JS 实现 bind 方法](../../write/0110_js_write_bind.md)

