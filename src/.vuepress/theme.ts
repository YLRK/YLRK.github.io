/*
 * @Description: 
 * @version: 1.0
 * @Author: YLRK
 * @Date: 2024-03-30 13:59:37
 * @LastEditTime: 2024-03-30 16:31:26
 */
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";


export default hopeTheme({
    darkmode: "toggle", // 默认启用自动切换
    repo: "YLRK/YLRK.github.io",
    repoDisplay: true,  // 是否显示仓库链接
    navbar: navbar,
    sidebar: sidebar,
    displayFooter: true,

    blog: {
        intro: "/",
        sidebarDisplay: "mobile",
        medias: {
            Email: "mailto:info@example.com",
            GitHub: "https://github.com/YLRK",
        }
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
        },
        components: {
            components: [
                "Share",
            ],
        },
    },
});