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
        lastUpdated: '最后更新时间',
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