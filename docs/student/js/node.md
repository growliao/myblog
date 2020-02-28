---
sidebar: auto
---

# 节点操作
## 创建节点
``` javaScript
document.createElement('tagName');
```
## 添加节点
将一个节点添加到元素的未尾
``` javaScript
node.appendChild(child);
```
将一个节点添加到指定元素节点的位置
``` javaScript
node.appendChild(child,指定位置);
```
## 删除节点
``` javaScript
node.removeChild(child);
```
## 复制节点
**注意：如果括号参数为空，或者里面是 false 浅拷贝，只复制标签，不复制标签里面的内容**
``` javaScript
node.cloneNode();
```

## 创建元素的区别
* document.write(); ----会导致页面重绘。
* element.inputHTML; ---创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂。
* node.addChilde(); --- 创建多个元素效率稍低一点点，但是结构更清晰。

**总结：不同浏览器下，innerHTML 效率比 createElement 高**

## 利用节点层级关系获取元素
1. 利用父子兄弟节点获取元素

2. 逻辑性强，但是兼容性差

节点概述
一般地，节点至少拥有 nodeType(节点类型)、nodeName(节点名称) 和 nodeValue(节点值) 这三个基本属性。
* 元素节点 nodeType 为1
* 属性节点 nodeType 为2
* 文本节点 nodeType 为3（文本节点包含文字、空格、换行等）

我们在实际开发中，节点操作主要操作的是元素节点。

1. 父级节点
node.parentNode;  ---得到的是离元素最近的父级节点（亲爸爸） 如果找不到父节点就返回为 null。

2. 子节点

parent.childNodes; ---得到了所有的子节点，包含元素节点、文本节点等等（一般不提倡使用 childNodes.

parent.children;(非标准) 虽然是非标签，但是得到各个浏览器的支持.

parentNode.firstChild --获取第一个子节点 不管是文本节点还是元素节点.

parentNode.lastChild --获取最后一个子节点 不管是文本节点还是元素节点.

parentNode.firstElementChild --获取第一个子节点 (IE9以上版本才能用)

parentNode.lastElementChild --获取最后一个子节点 (IE9以上版本才能用)

**实际开发的写法。既没有兼容问题，又返回第一个子元素**

**parent.children[0]**

## 兄弟节点

node.nextSibling --获取下个兄弟节点，包含文本节点、元素节点等等

node.previousSibling --获取上一个兄弟节点，包含文本节点、元素节点等等

node.nextElementSibling --得到下一个兄弟元素节点 （IE9 以上版本才能用）

node.previousElementSibling --得到上一个兄弟节点 (IE9 以上版本才能能)