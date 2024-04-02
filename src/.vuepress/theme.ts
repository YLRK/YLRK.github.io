/*
 * @Description:
 * @version: 1.0
 * @Author: YLRK
 * @Date: 2024-03-30 13:59:37
 * @LastEditTime: 2024-04-02 10:03:43
 */
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    darkmode: "toggle", // 默认启用自动切换
    repo: "YLRK/YLRK.github.io",
    repoDisplay: true, // 是否显示仓库链接
    navbar: navbar, // 导航栏配置
    sidebar: sidebar, // 侧边栏配置
    footer: "YLRK's Blog", // 页脚显示的内容
    displayFooter: true, // 是否显示页脚

    iconAssets: "fontawesome", // 使用 fontawesome 图标库

    blog: {
        intro: "/",
        avatar: "/assets/icon/Avatar.png",
        name: "YLRK",
        sidebarDisplay: "mobile",
        description: "Vegetable Bird -> Rookie",
        roundAvatar: true,
        medias: {
            Email: "mailto:ylrk@outlook.com",
            GitHub: "https://github.com/YLRK",
            Zhihu: "https://www.zhihu.com/people/ylrk",
            BiliBili: "https://space.bilibili.com/91185734",
        },
    },
    plugins: {
        prismjs: {
            light: "one-light",
            dark: "atom-dark",
        },
        copyCode: {
            showInMobile: true,
        },
        blog: true,
        mdEnhance: {
            component: true, // 启用博客增强
            alert: true, // 启用警告提示
            katex: true, // 启用 KaTeX 数学公式
            sub: true, // 启用下标
            sup: true, // 启用上标
            tasklist: true, // 启用任务列表
            footnote: true, // 启用脚注
            imgLazyload: true, // 启用图片懒加载
        },
        components: {
            components: ["Share"],
        },
    },
});
