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