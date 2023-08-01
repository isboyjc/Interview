---
contributors: 'isboyjc'
---

# 如果一个构造函数 bind 一个对象，用此构造函数创建出的实例会继承这个对象的属性吗？为什么？


## 题干

- bind

- 构造函数 bind 后创建实例



## 题解

::: details 点我查看题解

如果一个构造函数使用 `bind` 方法绑定了一个对象，用该构造函数创建的实例不会继承这个对象的属性。这是因为 `bind` 方法只会创建一个新的函数，而不会影响原始构造函数的原型链。

当使用 `bind` 方法绑定一个对象时，实际上是创建了一个新的函数，并将该函数的 `this` 值绑定到指定的对象。这个新函数与原始的构造函数没有直接的关系，它只是在调用时使用指定的对象作为上下文。

继承是通过原型链来实现的，子对象的原型通常指向父对象的实例或原型对象。但是，使用 `bind` 方法绑定对象并不会改变原始构造函数的原型链，因此无法实现属性的继承。

🌰：

```javascript
function Person(name) {
  this.name = name;
}

const obj = { age: 25 };
const BoundPerson = Person.bind(obj);

const person = new BoundPerson('Alice');
console.log(person.name); // 输出：Alice
console.log(person.age); // 输出：undefined
```

在上例中，`BoundPerson` 是通过将 `Person` 构造函数绑定到 `obj` 对象而创建的新函数。当使用 `BoundPerson` 构造函数创建实例 `person` 时，实例只会继承 `Person` 构造函数原型上的属性和方法，而不会继承 `obj` 对象的属性。

:::

## 相关

[什么是原型、原型链](./090010_prototype.md)

[prototype 和 __proto__ 区别](./090015_prototype_vs_proto.md)

[什么是继承、JS 有哪些继承方式](./090020_inherit.md)

[JS 实现 bind 方法](../../write/0110_js_write_bind.md)