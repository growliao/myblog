---
sidebar: auto
---
# vuePress搭建个人博客
## 前言
为什么会搭建个人博客呢？
优秀的程序员都在写博客，写博客有很多好处：
* 帮助自己梳理、总结、理解知识点
* 帮助别人理解知识点
* 简历更好看，更多面试机会
* B格高一点 ^-^
### 什么是VuePress
**VuePress**是尤雨溪（vue.js 框架作者）4月12日发布的一个全新的基于 vue 的静态网站生成器，实际上就是一个 vue 的 spa 应用，内置 webpack，可以用来写文档。详见 [VuePress中文网](https://vuepress.docschina.org/)
其实类似的建站工具有很多，比如 WordPress、Jekyll、Hexo 等，其中 WordPress 需要自己购买虚拟主机，不考虑；Jekyll 是 Github-Page 默认支持的，听说操作比较复杂，没有用过不做过多评价了；Hexo 之前一直在用，但一直觉得主题不好看，风格不够简洁优雅。自从遇见 VuePress，嗯，就是它了~
VuePress其实有挺多优点：
* 界面简洁优雅
* 容易上手
* 更多的兼容、扩展 Markdown 语法
* 响应式布局、PC端、手机端
* Google Analytics 集成
* 支付 PWA
### 开始搭建
下述命令需要用户已经安装了 node 、yarn、git 环境。如果用户对这一部分内容不熟悉，请参考相关教程
### 步骤一： 安装VuePress
```
# 全局安装
npm install -g vuepress
```
### 步骤二：初始化VuePress项目
```
npm init -y
```
会产生package.json文件
![1581164731121](https://note.youdao.com/yws/public/resource/813a4df769a1d2c7976cc217a8f7c37d/xmlnote/F6868218782C4F07B0062BF2B5B0A7D2/899)
建立项目文件夹及首页
```
├─ docs
│  ├─ README.md (该文件会被熏染成为index.html)
│  └─ .vuepress
│     └─ config.js
└─ package.json
```
在docs目录中的README.md文件将成为项目的根目录文件，该文件会被渲染成为index.html。 

![1581165912482](https://note.youdao.com/yws/public/resource/813a4df769a1d2c7976cc217a8f7c37d/xmlnote/5ADD92B84D994E6A8BC73E45C25DA7A9/901)
### 步骤三：在 package.json 里添加两个启动命令：
```
"scripts": {
        "dev": "vuepress dev docs",
        "build": "vuepress build docs"
    }
```
### 步骤四：配置
config.js

```
module.exports = {
    title: '一只小猪猪',
    description: '学不尽的知识，走不完的路',
    // 部署到自己的仓库才用这个节点
    // base:'/blog/',
    //使用自己的二级域名
    base: '/',
    // dest: './dist', //默认在.vuepress目录下
    port: '8080',
    head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}]
    ],
    plugins: ['@vuepress/back-to-top'],
    markdown: {
        lineNumbers: true
    },
    // 主题配置
    themeConfig: {
        // 引入nav.js文件
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        //全局配置自动生成左侧边栏
        // sidebar: 'auto',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    },
}
```
### 步骤五：发布 GitHub 上

<!-- 在 docs/.vuepress/config.js 中设置正确的 base:   -->

* 如果你打算发布到 https://你的gitHub名称.github.io/，则可以省略这一步，因为 base 默认即是 "/"。  

* 如果你打算发布到 https://你的gitHub名称.github.io/你的仓库名称/（也就是说你的仓库在 https://github.com/你的gitHub名称/你的仓库名称），则将 base 设置为 "/你的仓库名称/"。  

* 如果是第二点的话，需要注意，如果使用自定义域名的时候，需要设置 base:"/",设置为默认的，要不然css,js的引用路径会不正确。（本人踩坑一小时^-^）  


### 步骤六：创建脚本文件:
在project的根目录下，创建一个deploy.sh文件：
复制进去，稍微修改即可
```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'www.blog.superliao.top' > CNAME
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
#git push -f https://github.com/growliao/growliao.blog.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:growliao/blog.git master:gh-pages

cd -
```

### 步骤七: 打包上传到GitHub
在deploy.sh目录下 打开 CMD 页面 执行 

```
bash deploy.sh
```
### 打开GitHub userName.github.io 刷新即可看到效果
大功告成啦！！！

![1581167581090](https://note.youdao.com/yws/public/resource/813a4df769a1d2c7976cc217a8f7c37d/xmlnote/73C235818C7B4CAB9063F820FF4B0EAD/895)

注意：
* 设置首页图片时，需要在 .vuepress 目录下创建一个public 文件夹，把图片放里面
* 博客尽量写到 docs 目录下
