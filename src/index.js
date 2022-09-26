export default {
    /**
     * 网页标题
     */
    title: import.meta.env.VITE_APP_TITLE,
    /**
     * 侧边栏主题
     */
    sideTheme: 'theme-dark',
    /**
     * 是否显示动态标题
     */
    dynamicTitle: false,
    /**
     * @type {string | array} 'production' | ['production', 'development']
     * @description Need show err logs component.
     * The default is only used in the production env
     * If you want to also use it in dev, you can pass ['production', 'development']
     */
    errorLog: 'production'
}