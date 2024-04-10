---
title: "Vim使用记录"
date: 2024-04-02
category: 
 - Tools
tags: 
 - Tools
---
# Vim

## LazyVim
[🚀 Getting Started | LazyVim](https://www.lazyvim.org/)
尝试过SpaceVim和LazyVim，感觉LazyVim这个预设还是比较有意思的。不过LazyVim要求有点高，需要安装版本比较高的neovim搭配使用，如果喜欢折腾，可以试试这个预设。

- Neovim >= **0.9.0** (needs to be built with **LuaJIT**)
- a [Nerd Font](https://www.nerdfonts.com/)(v3.0 or greater) **_(optional, but needed to display some icons)_**

### 使用教程
Lua/config 下的 autocmds.lua、 keymaps.lua、 lazy.lua 和 options.lua 文件将在适当的时候自动加载，因此您不需要手动要求这些文件。LazyVim 附带了一组默认配置文件，这些文件将在您自己的配置文件之前加载。

```
~/.config/nvim
├── lua
│   ├── config
│   │   ├── autocmds.lua
│   │   ├── keymaps.lua
│   │   ├── lazy.lua
│   │   └── options.lua
│   └── plugins
│       ├── spec1.lua
│       ├── **
│       └── spec2.lua
└── init.toml
```
不需要手动使用 lua/config/或 LazyVim.config 下的 autocmds、 keymap、lazy or options，LazyVim 将自动加载这些文件。

### 插件
通过输入命令：LazyExtras可以看到有些预置没有安装的插件。勾选需要安装的插件即可。

#### copilot.vim
[GitHub - zbirenbaum/copilot.lua: Fully featured & enhanced replacement for copilot.vim complete with API for interacting with Github Copilot](https://github.com/zbirenbaum/copilot.lua)

[GitHub - zbirenbaum/copilot-cmp: Lua plugin to turn github copilot into a cmp source](https://github.com/zbirenbaum/copilot-cmp)

node的版本必须要大于18.x，lazyvim自动下载了上面两个插件，配置一下github的账号就可以再vim中使用copilot了。

使用下面的命令可以查看当前使用的copilot账号。
```bash
:Copilot auth
```