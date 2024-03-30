/*
 * @Description: 
 * @version: 1.0
 * @Author: YLRK
 * @Date: 2024-03-30 16:31:05
 * @LastEditTime: 2024-03-30 22:03:07
 */
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { popperPlugin } from "./plugins/vuepress-plugin-popper/index.js";
import { PopperShape } from "@moefy-canvas/theme-popper";
import { commentPlugin } from '@vuepress/plugin-comment'

export default defineUserConfig({
	base: "/",
	lang: "zh-CN",
	title: "YLRK's Blog",
	// description: "vuepress-theme-hope 的博客演示",
	theme,
	plugins: [
		popperPlugin({
			config: {
				shape: PopperShape.Star,
				size: 1.95,
				numParticles: 8,
			},
		}),
	],
	// 和 PWA 一起启用
	// shouldPrefetch: false,
});
