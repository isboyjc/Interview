# JS 实现类型判断方法

## 题干



## 题解

```js
function DataType(tgt, type) {
    const dataType = Object.prototype.toString.call(tgt).replace(/\[object (\w+)\]/, "$1").toLowerCase();
    return type ? dataType === type : dataType;
}

DataType("isboyjc");      // "string"
DataType(212121);     // "number"
DataType(true);         // "boolean"
DataType([], "array");  // true
DataType({}, "array");  // false
```

## 扩展

[JS 数据类型判断的方式有哪些？](../core/020datatype/020020_datatype_judgment.md)