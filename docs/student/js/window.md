---
sidebar: auto
---

# window 对象的常见事件

## 窗口加载事件
``` javaScript
window.onload = function(){}
```

``` javaScript
window.addEventListener('load',function(){});
```

window.onload 是窗口（页面）加载事件，当文档内容完全加载完成会触发该事件（包括图像、脚本文本、CSS、文件等），就调用的处理函数

**注意：**
**有了 window.onload 就可以把js 代码写到页面元素的上方，因为 onload 是等页面内容全部加载完毕，再去执行处理函数**

**window.onload 传统注册事件方式只能写一次，如果有多个，会以最后一个 window.onload 为准**

## 定时器
1. window.setTimeout(调用函数,延迟时间（毫秒）);只调用一次

清除定时器：clearTimeout(定时器);

2. window.setInterval(调用函数,延迟时间（毫秒）);重复调用一个函数，每隔这个时间，就去调用

清除定时器：clearInterval(定时器);

## location 对象
* href --获取整个地址
* host --返回主机（域名）
* search --返回参数
* assign --可以后退
* replace --替换地址，返回不了
* reload() --重新刷新页面

## navigator 对象
主要是判断手机端还是PC端

## history 对象
* back() 可以后退功能
* forward() 前进功能
* go(参数); 前进后退功能 能数如果是1 前进1个页面 如果是 -1 后退1个页面