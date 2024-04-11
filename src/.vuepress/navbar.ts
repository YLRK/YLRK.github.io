/*
 * @Description: 
 * @version: 1.0
 * @Author: YLRK
 * @Date: 2024-03-30 13:57:51
 * @LastEditTime: 2024-03-30 14:02:47
 */
import { navbar } from "vuepress-theme-hope";

export default navbar([
    "/",
    // "/docs/tools/",
    {
        text: "软件/工具教程",
        icon: "tools",
        link: "/docs/tools/",
    },
    // {
    //     text: "导航",
    //     icon: "edit",
    //     link: "/docs/",
    // },
    {
        text: "关于",
        icon: "info-circle",
        children: [
            {
                text: "关于本站",
                icon: "file-text",
                link: "/about",
            },
            {
                text: "关于我",
                icon: "user",
                link: "/intro",
            },
        ],
        // link: "/about",
        
    }


]);

