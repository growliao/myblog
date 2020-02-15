---
sidebar: auto
---



# 事件三要素
事件是有三部分组织，事件的三要源
*  事件源：事件被触发的对象
*  事件类型：如果触发 什么事件 如果鼠标点击触发(onclick),还是鼠标经过，还是按下按钮
*  事件处理程序：通过一个函数赋值的方式完成


**重要思想 ---排它思想**
**如果有同一组元素，我们想要某一个无比实现某种样式，需要用到循环的排他思想算法：**

**1. 所有元素全部清除样式（开掉其他人）**

**2. 给当前元素设置样式(留下自己)**



## 常用的鼠标样式
* onclick:鼠标点击事件。
* Onmouseover:鼠标移到某元素之上。
* Onmouseout:鼠标从某元素移开。
* onkeyup 某个键盘按键被松开时触发 --不区别大小写 
* onkeydown 某个键盘按键被按下时触发 （与onkeypress相比，onkeydown会先执行）--不区别大小写
* onkeypress 某个键盘按键被按下时 触发 （但是它不识别功能键 比如 ctrl shift 箭头等） 区分大小写
* contextmenu 鼠标右健事件
* selectstart 选中事件
# 操作 DOM 元素的属性
## 改变元素的内容
1. element.innerHTML
2. element.innerText



**innerText 和 innerHTML 的区别**
1. innerText 不识别 html 标签，去掉空格和换行
2. innerText 非标签 innerHTML W3C标签

## 改变元素的属性
element.属性 = 属性值;
* 能够创建元素
* 能够操作 DOM 节点

## 改变表单的值
表单里面的值  文字内容是通过 value 来修改的

element.value = '';

如果想要某个表单被禁用 不能再点击 disabled

element.disabled = true;



## 改变样式属性
1. 行内样式的操作
element.style.属性 = 属性值;

**JS 里面的样式采取驼峰命名法，比如fontSize 、backgroundColor**

**JS 修改 style 样式操作，产生的是行内样式，css 权重比较高**

2. 通过类名操作
element.className  

**注意：会直接更改元素的类名，会覆盖之前的类名**

解决方法：

element.className = '新增的类名 原来的类名';  多类名的写法


