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
    "/docs/tools/",
    // {
    //     text: "导航",
    //     icon: "edit",
    //     link: "/docs/",
    // },
    {
        text: "关于",
        icon: "info",
        children: [
            {
                text: "关于本站",
                link: "/about",
            },
            {
                text: "关于我",
                link: "/intro",
            },
        ],
        // link: "/about",
        
    }


]);

