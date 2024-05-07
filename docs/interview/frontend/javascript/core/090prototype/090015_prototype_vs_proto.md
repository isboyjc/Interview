---
contributors: 'isboyjc'
---

# prototype 和 __proto__ 区别


## 题干

- 原型

- prototype

- __proto__ 


## 题解

<!-- ::: details 点我查看题解 -->

`prototype` 和 `__proto__` 是 JS 中两个与原型相关的属性，它们有不同的作用和用途。

- `prototype` 属性
  - `prototype` 属性是函数对象特有的属性，每个函数对象都有这个属性。它指向一个对象，这个对象就是该函数的原型。
  - 当我们使用 `new` 关键字创建一个函数的实例时，实例对象会继承该函数的 `prototype` 属性指向的对象的属性和方法。
  - 通过给函数的 `prototype` 对象添加属性和方法，这些属性和方法会被该函数的实例继承。

🌰：

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}!`);
};

const person = new Person('Alice');
person.sayHello(); // 输出：Hello, my name is Alice!
```

在上例中，`Person.prototype` 对象是 `Person` 函数的原型。通过给原型对象添加 `sayHello` 方法，`Person` 的实例 `person` 可以继承并调用该方法。



- `__proto__` 属性：
  - `__proto__` 是每个对象（包括函数对象）都有的属性，它指向该对象的原型。
  - 通过 `__proto__` 属性，对象可以访问到它的原型对象，并沿着原型链向上查找属性和方法。

🌰：

```javascript
function Person(name) {
  this.name = name;
}

const person = new Person('Alice');

console.log(person.__proto__ === Person.prototype); // 输出：true
```

在上例中，`person.__proto__` 指向 `Person.prototype`，即 `person` 对象的原型是 `Person.prototype`。

尽管 `__proto__` 可以获取到原型，但它不是规范中定义的访问原型的方式。推荐使用 `Object.getPrototypeOf()` 方法来获取对象的原型。

```javascript
console.log(Object.getPrototypeOf(person) === Person.prototype); // 输出：true
```

总结：

- `prototype` 属性是函数对象特有的属性，指向函数的原型对象，用于实现函数对象的属性和方法的继承。
- `__proto__` 属性是每个对象（包括函数对象）都有的属性，指向对象的原型，用于访问对象的原型对象并沿着原型链查找属性和方法。
- 尽管 `__proto__` 是标准属性，但它不是官方推荐的访问原型的方式，推荐使用 `Object.getPrototypeOf()` 方法来获取对象的原型。

<!-- ::: -->


## 相关

[什么是原型、原型链](./090010_prototype.md)

[什么是继承、JS 有哪些继承方式](./090020_inherit.md)