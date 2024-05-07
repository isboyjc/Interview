---
contributors: 'isboyjc'
---

# CSS 中各个元素的层叠顺序？

## 题干

- 层叠上下文

- 层叠等级

- 层叠顺序



## 题解

<!-- ::: details 点我查看题解 -->

CSS 中各个元素的层叠顺序是指元素在 Z 轴上的显示顺序，也就是说，当两个或多个元素重叠时，哪个元素会显示在最上面，哪个元素会显示在最下面。CSS 层叠顺序是由层叠上下文、层叠等级、层叠顺序三个因素决定的。

- 层叠上下文（stacking context）指的是一个层叠上下文是一个元素的三维空间，它包含了该元素的子元素，并且与其他层叠上下文相互独立。一个层叠上下文可以由一些 CSS 属性创建，例如 `position`，`z-index`，`opacity`，`transform` 等。一个层叠上下文的子元素只会在该层叠上下文内部进行层叠，不会影响其他层叠上下文。默认情况下，只有根元素（HTML）会创建一个层叠上下文。

- 层叠等级（stacking level）指的是一个层叠等级是一个元素在其所属的层叠上下文中的位置。一个层叠等级可以由 `z-index` 属性指定，也可以由元素的类型和位置决定。一般来说，`z-index` 值越大的元素，层叠等级越高；如果 `z-index` 值相同或都没有指定，那么元素的类型和位置就会起作用。例如，定位元素（positioned elements）的层叠等级高于正常流元素（normal flow elements），后出现的元素的层叠等级高于先出现的元素。

- 层叠顺序（stacking order）指的是一个层叠顺序是一个层叠上下文中所有子元素按照从后到前的顺序排列的列表。一个层叠顺序可以分为以下几个部分：
  - 背景和边框（background and borders）：包括创建了该层叠上下文的元素的背景颜色，背景图片，边框等。
  - 负 `z-index` 的子元素（negative z-index elements）：包括所有 `z-index` 值为负数的子元素，按照从小到大的顺序排列。
  - 块级盒子（block-level boxes）：包括所有非定位的块级元素，如 `display: block`，`display: flex`，`display: grid` 等。
  - 浮动盒子（float boxes）：包括所有非定位的浮动元素，如 `float: left`，`float: right` 等。
  - 行内盒子（inline boxes）：包括所有非定位的行内元素，如 `display: inline`，`display: inline-block` 等。
  - `z-index: auto` 或 `z-index: 0` 的子元素（z-index: auto or z-index: 0 elements）：包括所有没有指定 `z-index` 值或者指定为 `auto` 或 `0` 的定位子元素。
  - 正 `z-index` 的子元素（positive z-index elements）：包括所有 `z-index` 值为正数的子元素，按照从小到大的顺序排列。
  - ![](https://cdn.sentenceend.com/picgo/202302180212151.png)

要判断出任意两个元素之间的层叠顺序。首先，我们要看它们是否属于同一个层叠上下文。如果不是，那么我们要比较它们所在的层叠上下文之间的关系。一般来说，后创建的层叠上下文会覆盖前创建的层叠上下文，除非使用了 `z-index` 来改变它们之间的顺序。如果是，那么我们要看它们的层叠等级。一般来说，`z-index` 值越大的元素会覆盖 `z-index` 值越小的元素，如果 `z-index` 值相同或都没有指定，那么我们要看它们的类型和位置。一般来说，定位元素会覆盖非定位元素，行内元素会覆盖块级元素，浮动元素会覆盖正常流元素，后出现的元素会覆盖先出现的元素。
<!-- ::: -->