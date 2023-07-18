---
contributors: 'isboyjc'
---

# No.0080


## 题干


```js
function foo1(){
  return {
    bar:"hello"
  }
};

function foo2(){
  return 
  {
    bar:"hello"
  }
}


var a = foo1();
var b = foo2(); 

console.log(a)
console.log(b)
```



## 题解

::: details 点我查看题解

```js
console.log(a); // { bar: 'hello' } 
console.log(b); // undefined
```


:::



## 相同


## 相关


## 扩展

