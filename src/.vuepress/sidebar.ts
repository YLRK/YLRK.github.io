/*
 * @Description: 
 * @version: 1.0
 * @Author: YLRK
 * @Date: 2024-03-30 14:04:24
 * @LastEditTime: 2024-04-01 20:54:11
 */


import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        {
            text: "软件/工具教程",
            icon: "laptop-code",
            prefix: "docs/tools/",
            link: "docs/tools/",
            children: "structure",
        },
        // {
        //     text: "Articles",
        //     icon: "book",
        //     prefix: "posts/",
        //     children: "structure",
        // },
        // "intro",
        // "about",
        // {
        //     text: "Slides",
        //     icon: "person-chalkboard",
        //     link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
        // },
    ],
});
