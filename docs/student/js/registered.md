---
sidebar: auto
---

# 注册事件
## 注册事件的两种方式
**1. 传统注册方式**
* 利用 on 开头的事件。 例如：onclick。
* 特点：注册事件的唯一性。
* 同一个元素同呈个事件只能设置一个处理函数，最后注册的处理函数将覆盖之前的。

**2. 方法监听注册方式**
* W3C 标准推荐方式。
* addEventListener();是一个方法。
* IE9 之前的 IE 不支持此方法，可使用 attachEvent() 代替。
* 特点：同一个元素同一个事件可以注册多个监听器，按注册顺序依次执行 。

## addEventListener() 事件监听方式
语法：eventTarget.addEventListener(type,listener,[useCapture])
* type:事件类型，字符串。比如：click、mouseover,注意：这里不带on。
* listener: 事件处理函数，事件发生时,会调用该监听函数。
* useCapture: 可选参数，是一个布尔值，默认 false. 指定事件处理函数的时期或阶段,false 既事件从上往下冒泡,true 即事件从上住下冒泡。

## 删除事件的方式
**1. 传统注册方式**

eventTarget.onclick = null;

**2. 方法监听注册方式**

eventTarget.removeEventListener(type,listener,[userCapture]);

**3. attachEvent**

eventTarget.detachEvent(type,callback);

## 事件对象
``` javaScript
element.onclick=function(event){}
````
* event 就是一个事件对象，写到我们侦听函数的小括号里面当形参来看。
* 事件对象只有有了事件才会存在，它是系统给我们自动创建的，不需要我们传递参数。
* 事件对象是我们事件的一系列相关数据的集合，跟事件相关。比如：鼠标点击 里面就包含了鼠标的相关信息。
* 事件对象也有兼容性的问题 ie678 通过window.event获取。

## target和this区别
* target--返回的是触发事件的元素 (对象)
* this -- 绑定事件的对象 (元素)

## 阻止默认行为（事件）
* e.preventDefault();--方法。
* e.returnValue;--属性，低版本。
* return false; --后面代码不执行，而且只限于传统的注册方式.

阻止a标签跳转

1:javascript:void(0)

2:javascript:;

## 阻止冒泡
* e.stopPropagation();
* e.cancelBubble = true; 低版本写法

## 事件委托（代理、委派）
不是每个子节点单独设置事件监听器，而是事件监听设置在其父节点上，然后利用冒泡原理影响设置每个子节点。