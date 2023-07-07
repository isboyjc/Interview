---
contributors: 'isboyjc'
---

# JS 实现大数相加方法


## 题干

```js
let a = "9007199254740991";
let b = "1234567899999999999";

function add(a ,b){
   //...
}
```



## 题解

::: details 点我查看题解

```js
function bigIntAdd(a ,b){
   // 取两个数字的最大长度
   let maxLength = Math.max(a.length, b.length);
   // 用0去补齐长度
   a = a.padStart(maxLength , 0);// "0009007199254740991"
   b = b.padStart(maxLength , 0);//" 1234567899999999999"

   // 定义加法过程中需要用到的变量
   let t = 0;
   let f = 0;   // "进位"
   let sum = "";
   for(let i=maxLength-1 ; i>=0 ; i--){
      t = parseInt(a[i]) + parseInt(b[i]) + f;
      f = Math.floor(t/10);
      sum = t%10 + sum;
   }
   if(f!==0){
      sum = '' + f + sum;
   }
   return sum;
}
```

:::



## 相同


## 相关

[Number() 存储空间是多大？如后台发送一个超过最大存储数字怎么办？](../core/020datatype/020110_number_storage.md)

## 扩展

