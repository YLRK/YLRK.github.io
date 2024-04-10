---
title: "Ubuntu使用记录"
date: 2024-04-10
category: 
 - Tools
tags: 
 - Tools
---
# Ubuntu

## 常用软件安装

### Peek- 录制软件
[Linux上一款强大的GIF录制软件，Peek](https://blog.csdn.net/qq_36393978/article/details/112365226)

```bash
sudo add-apt-repository ppa:peek-developers/stable
sudo apt-get install peek
```

### Touchpad-indicator 触控板控制
[Ubuntu中触摸板如何开启，关闭_止步听风的博客-CSDN博客_ubuntu 触摸板](https://blog.csdn.net/SAKURASANN/article/details/104262048)

```bash
sudo add-apt-repository ppa:atareao/atareao
sudo apt-get update
sudo apt-get install touchpad-indicator
```

妙控板无法被这个软件关闭。。

妙控板关闭得直接使用xinput

### Guake 下拉式终端
[How To Use Guake Terminal Under Wayland (GNOME) - Linux Uprising Blog](https://www.linuxuprising.com/2021/12/how-to-use-guake-terminal-under-wayland.html)

```bash
sudo add-apt-repository ppa:linuxuprising/guake
sudo apt-get install guake
```

### CopyQ剪切板

```bash
sudo add-apt-repository ppa:hluk/copyq
sudo apt update
sudo apt install copyq
```

### Baobab 磁盘分析软件
```bash
sudo apt-get install baobab
sudo baobab 
```

### Flameshot 截图软件
[GitHub - flameshot-org/flameshot: Powerful yet simple to use screenshot software](https://github.com/flameshot-org/flameshot)

下载：
[Releases · flameshot-org/flameshot · GitHub](https://github.com/flameshot-org/flameshot/releases)

通过命令下载的是老版本
```bash
sudo apt-get install flameshot 
```
下载 deb 安装就行
```bash
sudo dpkg -i flameshot-11.0.0-1.ubuntu-20.04.amd64.deb
```

去设置里面添加快捷键就可以使用。
```bash
## 1 开启捕捉界面
flameshot gui
## 2 开启捕捉并设置存储位置
flameshot gui -p /path/to/captures
## 3 开启全屏捕捉
flameshot full
## 4 开启配置界面
flameshot config
## 5 万能的man
man flameshot
```

ubuntu22 安装 12.0 版本使用时，如果打开Displays中的分数比例缩放（Fractional Scaling）这个选项后使用截图会黑屏。

[Fails when fractional scaling <> 100% · Issue #564 · flameshot-org/flameshot · GitHub](https://github.com/flameshot-org/flameshot/issues/564)

添加这条命令就可以在分数比例缩放下使用了。。。
```bash
env QT_AUTO_SCREEN_SCALE_FACTOR=1 flameshot gui
```

### Yesplaymusic第三方网易云播放器
[GitHub - qier222/YesPlayMusic: 高颜值的第三方网易云播放器，支持 Windows / macOS / Linux](https://github.com/qier222/YesPlayMusic)

[Install YesPlayMusic on Ubuntu using the Snap Store | Snapcraft](https://snapcraft.io/install/yesplaymusic/ubuntu)

### 垃圾清理软件 stacer
[GitHub - oguzhaninan/Stacer: Linux System Optimizer and Monitoring - https://oguzhaninan.github.io/Stacer-Web](https://github.com/oguzhaninan/Stacer)

```bash
sudo apt-get install stacer
```

## Tips

### 查看内核版本
```bash
uname -r
neofetch 
screenfetch
```

### 更改双系统启动顺序
修改grub文件。
```bash
sudo vim /etc/default/grub
```

```objectivec
GRUB_DEFAULT="0"
#GRUB_HIDDEN_TIMEOUT="0"
GRUB_HIDDEN_TIMEOUT_QUIET="true"
GRUB_TIMEOUT="10"
GRUB_DISTRIBUTOR="`lsb_release -i -s 2> /dev/null || echo Debian`"
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
GRUB_CMDLINE_LINUX=""
```

这是我们关注的内容，只需要把第 1 行的 `GRUB_DEFAULT="0"` 改成你想要默认选中的序号减去 1 就行，比如想要默认选中 `Windows boot manger`，修改 `GRUB_DEFAULT="2"` 保存，退出

**然后执行关键的一步 `sudo update-grub`**
这样，下次开机的时候默认选中的启动项就是 Windows 了。

### Find 查找文件
查找以 vmoptions 为文件名后缀的文件。
```bash
sudo find / -name "*vmoptions"
```

### Apt-get 走代理
[Ubuntu的apt-get代理设置_懒得打字的博客-CSDN博客_apt 代理](https://blog.csdn.net/lonelysky/article/details/81059339)

[【ubuntu】系统代理的设置_牛andmore牛的博客-CSDN博客_ubuntu 代理](https://blog.csdn.net/u011119817/article/details/110856212)

#### 环境变量方法
```bash
export http_proxy=http://127.0.0.1:8000
sudo apt-get update
```
#### 设置 apt-get 的配置
修改/etc/apt/apt.conf（或者/etc/envrionment），增加
```
Acquire::http::proxy "http://127.0.0.1:8000/";
Acquire::ftp::proxy "ftp://127.0.0.1:8000/";
Acquire::https::proxy "https://127.0.0.1:8000/";
```
#### 在命令行临时带入
感觉这个比较方便。
```bash
sudo apt-get -o Acquire::http::proxy="http://127.0.0.1:8000/" update
```

### 双系统引导修复

[Win10+Ubuntu双系统修复Ubuntu系统引导_breeze_csdn的博客-CSDN博客_grub添加win10](https://blog.csdn.net/u012254599/article/details/109217143)

准备一个 U 盘，使用 Ubuntu 的镜像打开，使用 `Try ubuntu without install`

进入系统后，安装 boot-repair
```bash
sudo passwd
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:yannubuntu/boot-repair
sudo apt-get install boot-repair 
sudo boot-repair 
```

### 压缩包分割、合并、解压
[Linux压缩包分割、合并、解压_Luban250的博客-CSDN博客_linux 合并分割文件zip](https://blog.csdn.net/huludan/article/details/104106095)
应用场景：某些文件太大不能直接上传为邮箱附件或者直接上传网盘，需要压缩，压缩之后大小仍然超过限制，那就分割压缩包（分卷压缩）；将多个分割的压缩包下载后，需要合并成一个压缩包再解压（合并解压）。

解决方法：以 zip 压缩文件为例说明在 Ubuntu 16.04 系统上如何使用命令行完成上述操作。现有文件 input.pdf，首先对其进行分卷压缩，然后进行合并解压：
```bash
# ----- 分卷压缩 -----
# 将文件或者文件件打包为zip压缩包，book.zip大小为38.8M
zip -r book.zip ./input.pdf
# 将book.zip分割，每个压缩包不超过20M，生成两个压缩包subbook.zip（17.8M）和subbook.z01（21M）
zip -s 20m book.zip --out subbook.zip

# ----- 合并解压 -----
# 将上述两个压缩包合并为一个压缩文件single.zip
zip subbook.zip -s=0 --out single.zip
# 解压single.zip
unzip -d ./ single.zip
```

#### Cat 合并文件
[Linux 压缩文件tar.gz的压缩、解压、分割、合并_summer_west_fish的博客-CSDN博客_tar.gz.001切块](https://blog.csdn.net/summer_fish/article/details/108073806)
**合并文件：** cat tiller.tar.gz* > tiller.tar.gz  
**合并解压：** cat bigfile.tar.gz.* | tar -zxv
