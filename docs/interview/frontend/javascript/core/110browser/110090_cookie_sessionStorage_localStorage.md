---
contributors: 'isboyjc'
---

# cookie、sessionStorage、localStorage的区别


## 题干

- cookie

- sessionStorage

- localStorage



## 题解

<!-- ::: details 点我查看题解 -->

`cookie`、`sessionStorage`、`localStorage` 都是用来在浏览器中存储数据的技术，它们有以下区别：

- **存储大小**：`cookie` 一般不超过4k，`sessionStorage` 和 `localStorage` 可以存储5M甚至更多的数据。
- **数据有效期**：`cookie` 一般由服务器生成，可以设置失效时间；若没有设置时间，关闭浏览器 `cookie` 失效，如果设置了时间， `cookie` 就会存储在硬盘中，过期失效。`sessionStorage` 仅在当前浏览器窗口关闭之前有效，关闭页面或者浏览器会被清除。 `localStorage` 永久有效，窗口或者浏览器关闭也会一直保存，除非手动永久删除。
- **作用域**：`cookie` 在所有同源窗口中都是共享的。`sessionStorage` 在同一个浏览器窗口是共享的（不同浏览器，即使是统一页面也不共享）。`localStorage` 在所有同源窗口中共享。
- **通信**： `cookie` 在浏览器和服务器之间来回传递，如果使用 `cookie` 保存过多数据会造成性能问题。`sessionStorage` 和 `localStorage` 仅在客户端（浏览器）中保存，不参与服务器的通信。
- **应用场景**： `cookie` 主要用来保存登录信息 ，比如登录某个网站市场可以看到“记住密码”这就是通过 `cookie` 中存入一段辨别用户身份的数据来实现的。`sessionStorage` 用于敏感账号一次性登录，单页面用的较多。`localStorage` 用于长期登录，适于长期保存在本地的数据。

<!-- ::: -->

