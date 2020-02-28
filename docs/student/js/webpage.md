---
sidebar: auto
---




# 网页特效果

## 元素偏移量offset
::: tip
使用 offset 相关属性，可以动态获取访元素的位置（偏移），大小等.
:::
::: danger
注意：返回值是不带单位的
:::
* 获得元素距离带有定位父元素的位置
* 获取元素自身大小（宽度和高度）

| offset 系统属性        | 作用 |          
| ------------- |:-------------:|
| element.offsetParent |返回该元素带有定位的父级元素，如果父级都没有定位返回 body |
| element.offsetTop |返回元素相对带有定位父元素上方的偏移 |
| element.offsetLeft |返回元素相对带有定位父元素左边的偏移 |
| element.offsetWidth |返回自身包括内边距，边框，内容区的宽度 => border +padding +width|
| element.offsetHeight |返回自身包括内边距，边框，内容区的高度 => border +padding +height|

#### offset 与 style 区别（宽度）
|offset|style|
| ------------- |:-------------:|
|offset 可以得到任意样式表中的样式值|只能得到行内样式值，css中的获取不到|
|获取的数值没有单位|获得的是有单位的字符串|
|offsetWidth 包含 padding + border +width| style.width 不包含 padding 和 border|
|offsetWidth 只读|style.width 可读写|
|适合获取元素大小位置|适合修改元素值|

### 元素可视区 client
::: tip
通过 client 的相关属性可以动态获取访元素的边框大小，元素大小等
:::
::: danger
注意：返回值是不带单位的
:::

|client|作用|
| ------------- |:-------------:|
|element.clientTop|返回元素上边框的大小|
|element.clientLeft|返回元素左边框的大小|
|element.clientWidth|返回自身包含 padding,内容区宽度,不包含边框|
|element.clientHeight|返回自身包含 padding,内容区高度,不包含边框|
### 元素滚动 scroll
::: tip
通过 scroll 可以动态获取访元素的大小,滚动距离等
:::
::: danger
注意：返回值是不带单位的
:::

| scroll|作用|
| ------------- |:-------------:|
|element.scrollTop|返回被卷去的上侧距离|
|element.scrollLeft|返回被卷去的左侧距离|
|element.scrollWidth|返回自身实际的宽度,不包含边框,包含padding|
|element.scrollHeight|返回自身实际的高度,不包含padding|
::: danger
注意：页面的滚动距离通过 window.pageXOffset 获取
:::
## 三大系统总结
**他们的主要用法：**
1. offset 系统经常用于获得元素位置 offsetLeft offsetTop
2. client 经常用于获取元素大小 clientWidth clientHeight
3. scroll 经常用于获取滚动距离 scrollTop scrollLeft
### mouseenter 和 mouseover 的区别
* 当鼠标移动到元素上时就会触发 mouseenter 事件
* 类似 mouseover,它们两者之间的差别是
* mouseover 鼠标经过自身盒子会触发，经过子盒子还会触发。 mouseenter 只会经过自身盒子触发
* 跟 mouseenter 搭配鼠标离开 mouseleave 同样不会冒泡

## 动画
::: tip
核心原理:通过定时器 setInterval() 不断移动盒子距离 
:::
**实现步骤**

1. 获取盒子当前位置
2. 让盒子在当前位置加1个移动距离
3. 利用定时器不断重复这个操作
4. 加一个结束定时器的条件
5. 注意此元素需要添加定位，才能使用element.style.left