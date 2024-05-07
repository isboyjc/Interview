---
contributors: 'isboyjc'
---

# @charset、@layer 有什么作用？


## 题干

- @charset

- @layer



## 题解

<!-- ::: details 点我查看题解 -->

`@charset` 和 `@layer` 是 CSS 中的两种 @ 规则，也就是以 @ 符号开头的特殊规则，用来控制 CSS 的一些行为或特性。它们的作用分别是：

- `@charset` 用来指定 CSS 文件的字符编码，它必须是文件中的第一个元素，不能有任何字符在它之前，也不能嵌套在其他 @ 规则 里面。它的语法是 `@charset "<charset>";`，其中 `<charset>` 是一个字符串，表示字符编码的名称，必须是 `IANA` 注册表中定义的 web 安全字符编码。例如，`@charset "UTF-8";` 表示使用 `Unicode UTF-8` 编码。这个规则在使用一些非 `ASCII` 字符的 CSS 属性时很有用，比如 `content`。

- `@layer` 用来定义一个层叠层（cascade layer），它可以让开发者更好地控制层叠的顺序和结果。它的语法有三种形式：
    - `@layer <layer-name> {rules}`：定义一个有名字的层叠层，并在大括号里写入该层的 CSS 规则。
    - `@layer <layer-name>;`：定义一个有名字的层叠层，但不指定任何规则。可以一次定义多个层叠层，用逗号分隔。这种形式主要用来确定层叠层的顺序，后面出现的层叠层会覆盖前面出现的同名层叠层。
    - `@layer {rules}`：定义一个没有名字的层叠层，并在大括号里写入该层的 CSS 规则。这种形式不能再次添加规则，也不能被覆盖。¹

层叠层的作用是让同一层内的规则相互层叠，而不同层之间则按照定义顺序决定优先级。如果没有使用 `@layer` 定义任何层叠层，那么所有的 CSS 规则都会被放在一个匿名的默认层中，这个默认层会排在所有其他层之后。这意味着没有使用 `@layer` 的规则会覆盖使用了 `@layer` 的规则，无论它们的特异性（specificity）如何。这样可以让开发者编写更简单的 CSS 选择器，不用担心特异性或出现顺序的问题，只要保证它们出现在正确的层中就可以了。

下面是一些使用 `@charset` 和 `@layer` 的示例：

```css
/* 使用 UTF-8 编码 */
@charset "UTF-8";

/* 定义三个有名字的空白层叠层 */
@layer theme, layout, utilities;

/* 在 theme 层中添加一些规则 */
@layer theme {
  body {
    background-color: white;
    color: black;
  }
}

/* 在 layout 层中添加一些规则 */
@layer layout {
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

/* 在 utilities 层中添加一些规则 */
@layer utilities {
  .text-center {
    text-align: center;
  }
  .text-red {
    color: red;
  }
}

/* 在默认层中添加一些规则 */
p {
  font-size: 16px;
}

/* 这个规则会覆盖 theme 层中相同选择器的规则 */
body {
  background-color: pink;
}
```

<!-- ::: -->


## 相关

[@import 有什么作用？如何使用？](./010020_@import.md)

