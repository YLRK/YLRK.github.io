/*
 * @Description: 
 * @version: 1.0
 * @Author: YLRK
 * @Date: 2024-03-30 16:31:05
 * @LastEditTime: 2024-03-30 16:31:05
 */
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
	base: "/",
	lang: "zh-CN",
	title: "YLRK's Blog",
	// description: "vuepress-theme-hope 的博客演示",
	theme,
	// plugins: [
	// ],
	// 和 PWA 一起启用
	// shouldPrefetch: false,
});
