---
contributors: 'isboyjc'
---

# XML 和 JSON 的区别？


## 题干

- XML

- JSON



## 题解

::: details 点我查看题解

`XML` 和 `JSON` 是两种用于在网页中交换数据的格式，它们都是自描述的（人类可读的）、分层的（值包含值），同时他们也都可以被很多编程语言解析和使用、都可以通过 `XMLHttpRequest` 获取。

当然也有一些不同：

- **类型**：`JSON` 对象有类型，而 `XML` 数据是无类型的。
- **命名空间**：`JSON` 不提供命名空间的支持，而 `XML` 提供了命名空间的支持。
- **数组**：`JSON` 支持数组，而 `XML` 不支持数组。
- **长度**：`JSON` 比 `XML` 更短，更容易读写。
- **解析**：`XML` 必须使用 `XML` 解析器来解析，而 `JSON` 可以使用标准的 JS 函数来解析。

:::

