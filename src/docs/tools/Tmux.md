---
title: "Tmux使用记录"
date: 2024-04-02
# icon: info
category: 
 - Tools
tags: 
 - Tools
# sidebar: false
---
# Tmux

## 使用

[Tmux 使用教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

[调教终端神器——tmux - 知乎](https://zhuanlan.zhihu.com/p/261207028)

[tao-of-tmux 中文版! — tao-of-tmux v1.0.2 文档](https://tao-of-tmux.readthedocs.io/zh-cn/latest/)

安装了nerd字体之后使用更好。

### 常用命令

#### 会话管理

```bash
# 新建对话
tmux new -s <session-name>
# 分离会话 / C-b d
tmux detach
# 查看当前所有会话 / C-b s
tmux ls
# 接入会话
tmux attach -t <session-name>
# 杀死会话
tmux kill-session -t <session-name>
# 切换会话
tmux switch -t <session-name>
# 重命名会话 / C-b $
tmux rename-session -t <session-name> <new-name>
```

#### 窗格操作

```bash
# 划分上下两个窗格
tmux split-window
# 划分左右两个窗格
tmux split-window -h
# 移动光标到上 up / C-b up
tmux select-pane -U 
# 下 down
tmux select-pane -D
# 左 left
tmux select-pane -L
# 右 right
tmux select-pane -R
# 移动当前窗格上 / C-b {
tmux swap-pane -U 
# 移动当前窗格下 / C-b }
tmux swap-pane -D 
```

#### 窗口管理

在一个窗格中添加窗口

可以通过下面来切换

```bash
# 创建新窗口
tmux new-window
# 创建指定名称的窗口
tmux new-window -n <window-name>
# 切换到指定编号的窗口
tmux select-window -t <window-name>
# 重命名窗口
tmux rename-window <new-name>
```

| 操作               | 对应的Tmux命令                     |
| ---------------- | ----------------------------- |
| 列出所有快捷键及对应Tmux命令 | tmux list-keys                |
| 列出所有Tmux命令及参数    | tmux list-commands            |
| 列出当前所有Tmux会话的信息  | tmux info                     |
| 重新加载当前的Tmux配置    | tmux source-file ~/.tmux.conf |

### 快捷键

#### 窗格快捷键

| 操作         | 快捷键          | 说明                       |
|--------------|-----------------|----------------------------|
| 划分左右两个窗格 | Ctrl+b %       |                            |
| 划分上下两个窗格 | Ctrl+b "       |                            |
| 切换到其他窗格   | Ctrl+b \<arrow key> | \<arrow key>指向要切换到的窗格的方向键 |
| 切换到上一个窗格 | Ctrl+b ;       |                            |
| 切换到下一个窗格 | Ctrl+b o       |                            |
| 交换位置         | Ctrl+b {       | 当前窗格与上一个窗格交换位置 |
| 交换位置         | Ctrl+b }       | 当前窗格与下一个窗格交换位置 |
| 向前移动一个位置 | Ctrl+b Ctrl+o  | 所有窗格向前移动一个位置，第一个窗格变成最后一个窗格 |
| 向后移动一个位置 | Ctrl+b Alt+o   | 所有窗格向后移动一个位置，最后一个窗格变成第一个窗格 |
| 关闭当前窗格     | Ctrl+b x       |                            |
| 拆分为独立窗口   | Ctrl+b !       | 将当前窗格拆分为一个独立窗口 |
| 全屏显示         | Ctrl+b z       | 当前窗格全屏显示，再使用一次会变回原来大小 |
| 调整窗格大小     | Ctrl+b Ctrl+\<arrow key> | 按箭头方向调整窗格大小 |
| 显示窗格编号     | Ctrl+b q       |                            |

#### 窗口快捷键

| 操作                    | 快捷键           | 说明                               |
|-------------------------|------------------|------------------------------------|
| 创建新窗口              | Ctrl+b c          | 状态栏显示多个窗口信息               |
| 切换到上一个窗口        | Ctrl+b p          | 按状态栏顺序切换到上一个窗口         |
| 切换到下一个窗口        | Ctrl+b n          | 切换到下一个窗口                     |
| 切换到指定编号的窗口    | Ctrl+b \<number>   | \<number>是窗口编号，从状态栏上选择   |
| 从列表中选择窗口        | Ctrl+b w          |                                    |
| 窗口重命名              | Ctrl+b ,          |                                    |

#### 通过插件和配置文件添加的快捷键

| 快捷键  | 功能                                  |
| ------- | ------------------------------------|
| C-b e   | 用$EDITOR环境变量定义的编辑器打开.local定制文件（为空时默认为vim）|
| C-b r   | 重新加载配置|
| C-l     | 清空屏幕和tmux历史|
| C-b C-c | 创建一个新会话|
| C-b C-f | 通过名称切换到另一个会话|
| C-b C-h 和 C-b C-l | 导航窗口（默认情况下，C-b n和C-b p未绑定）|
| C-b Tab | 切换到上一个活动窗口|
| C-b -   | 在当前窗格垂直分割|
| C-b _   | 在当前窗格水平分割|
| C-b h, C-b j, C-b k 和 C-b l | 方向键导航窗格（类似Vim）|
| C-b H, C-b J, C-b K, C-b L | 调整窗格大小|
| C-b <   | 交换窗格|
| C-b >   | 交换窗格|
| C-b +   | 将当前窗格最大化到新窗口|
| C-b m   | 切换鼠标模式开关|
| C-b U   | 启动Urlscan（首选）或Urlview（如果可用）|
| C-b F   | 启动Facebook PathPicker（如果可用）|
| C-b Enter | 进入复制模式|
| C-b b   | 列出粘贴缓冲区|
| C-b p   | 从顶部粘贴缓冲区粘贴|
| C-b P   | 选择要粘贴的粘贴缓冲区|

### 插件

[GitHub - rothgar/awesome-tmux: A list of awesome resources for tmux](https://github.com/rothgar/awesome-tmux?tab=readme-ov-file)

[tmux-plugins · GitHub](https://github.com/tmux-plugins)

### 配置

[tmux美化（基于oh-my-tmux) - 知乎](https://zhuanlan.zhihu.com/p/112426848)

[GitHub - gpakosz/.tmux: 🇫🇷 Oh my tmux! My self-contained, pretty & versatile tmux configuration made with ❤️](https://github.com/gpakosz/.tmux)

主要使用了这个.tmux中的设置，包含很多有意思的预设。

以下是主要的修改个人习惯

```js
tmux_conf_theme_status_right='#{prefix}#{mouse}#{pairing}#{synchronized} | #{weather_Hongshan} | %R | #{username}#{root} | #{online} #{hostname}'

# to enable a plugin, use the 'set -g @plugin' syntax:
# visit https://github.com/tmux-plugins for available plugins
#set -g @plugin 'tmux-plugins/tmux-copycat'
set -g @plugin 'tmux-plugins/tmux-cpu'
set -g @plugin 'tmux-plugins/tmux-open'
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @plugin 'tmux-plugins/tmux-continuum'
set -g @continuum-restore 'on'

# weather() {                                         # see https://github.com/chubin/wttr.in#one-line-output
#   curl -f -s -m 2 'wttr.in?format=3' || printf '\n' # /!\ make sure curl is installed
#   sleep 900                                         # sleep for 15 minutes, throttle network requests whatever the value of status-interval
# }
# weather_Hongshan() {
#   curl -f -s -m 2 wttr.in/Hongshan,Hubei?format="%c+%t+%m+%w+%l\n"  || printf '\n'
#   sleep 3600
# }
#
# online() {
#   ping -c 1 1.1.1.1 >/dev/null 2>&1 && printf '✔' || printf '✘'
# }
#
```

## Tmux插件使用

### Tmux open

[GitHub - tmux-plugins/tmux-open: Tmux key bindings for quick opening of a highlighted file or url](https://github.com/tmux-plugins/tmux-open)

可以快速打开文件，链接等。

### Tmux Resurrect

[GitHub - tmux-plugins/tmux-resurrect: Persists tmux environment across system restarts.](https://github.com/tmux-plugins/tmux-resurrect)

系统重启后恢复环境。

#### Key bindings

- `prefix + Ctrl-s` - save
- `prefix + Ctrl-r` - restore

### Tmux continuum

[GitHub - tmux-plugins/tmux-continuum: Continuous saving of tmux environment. Automatic restore when tmux is started. Automatic tmux start when computer is turned on.](https://github.com/tmux-plugins/tmux-continuum)

- 持续保存 TMUX 环境
- 计算机/服务器打开时自动启动 TMUX
- 启动 TMUX 时自动恢复

这些功能共同实现了不间断的 tmux 使用。不管是哪台电脑 或服务器重新启动，如果机器处于打开状态，TMUX 将按照您离开的方式出现 最后一次使用。

需要和resurrect插件一起使用。

```bash
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @plugin 'tmux-plugins/tmux-continuum'
set -g @continuum-save-interval '60' # save 1 hour 
set -g @continuum-restore 'on' # auto restore
```
