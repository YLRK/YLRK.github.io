---
date: 2024-04-02
category: 
 - Tools
tags: 
 - Tools
---
# Flatpak

## 介绍
[什么是Flatpak？ - 知乎](https://zhuanlan.zhihu.com/p/267160794)

[Flatpak—the future of application distribution](https://www.flatpak.org/)

[Introduction to Flatpak — Flatpak documentation](https://docs.flatpak.org/en/latest/introduction.html)

[Flathub—An app store and build service for Linux](https://flathub.org/home)

简单来说，就是打包所有软件需要的依赖项和环境，可以快速的在任何linux发行版上运行，并且使用沙盒应用程序有一定的安全性。坏处是比较占用磁盘空间。

## 安装
[Flatpak—the future of application distribution](https://www.flatpak.org/setup/Ubuntu)

```bash
sudo apt-get install flatpak
# 对于较旧的Ubuntu版本
sudo add-apt-repository ppa:flatpak/stable
sudo apt-get update
sudo apt-get install flatpak 
sudo apt-get install gnome-software-plugin-flatpak
# 添加Flatbug存储库
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

## 常用命令
[Using Flatpak — Flatpak documentation](https://docs.flatpak.org/en/latest/using-flatpak.html)

```bash
# 搜索应用程序
flatpak search gimp
# 安装应用程序
flatpak install flathub org.gimp.GIMP
# 从flatpak1.2开始，该命令可以搜索应用程序
flatpak install gimp
# 运行应用程序
flatpak run org.gimp.GIMP
# 更新
flatpak update
# 列出已安装的应用程序和包
flatpak list 
# 仅列出已安装的应用程序
flatpak list --app
# 删除应用程序
flatpak uninstall org.gimp.GIMP
# 删除已安装的应用程序未使用的包
flatpak uninstall --unused
# 修复与本地安装的不一致
flatpak repair
# 查看当前正在运行的应用程序
flatpak ps
# 强制终止一个程序
flatpak kill <application-id>
```

## Tips
### Flatseal 权限管理

[分享|使用 Flatseal 管理 Flatpak 的权限](https://linux.cn/article-14736-1.html)
```bash
flatpak install --system -y flathub com.github.tchx84.Flatseal
```

### Flatpak安装软件历史版本

由于安装的obsidian自动升级到了1.0.0，所以进行软件回溯。

<https://gist.github.com/barseghyanartur/e8649f6c269b089a8e777d8bd934a952>

```bash
flatpak remote-info --log flathub us.zoom.Zoom
```

**Output**
```bash
$ flatpak remote-info --log flathub us.zoom.Zoom
        ID: us.zoom.Zoom
       Ref: app/us.zoom.Zoom/x86_64/stable
      Arch: x86_64
    Branch: stable
Collection: org.flathub.Stable
  Download: 134.4 kB
 Installed: 159.7 kB
   Runtime: org.freedesktop.Platform/x86_64/21.08
       Sdk: org.freedesktop.Sdk/x86_64/21.08

    Commit: c82bfaaa1e765d92037e64f496836cae99413f979945faef9ce20fe9f9a3bb03
    Parent: a4a6a5c0c55a06ed7786276c9758baf7578e30bc1db4dd5d267cbb39d18884d3
   Subject: Update zoom.tar.xz to 5.10.0.2450 (eb405f5c)
      Date: 2022-03-22 05:54:16 +0000
   History: 

    Commit: a4a6a5c0c55a06ed7786276c9758baf7578e30bc1db4dd5d267cbb39d18884d3
   Subject: Update zoom.tar.xz to 5.9.6.2225 (32830a02)
      Date: 2022-02-28 11:58:24 +0000

```

#### Install a specific version
```bash
flatpak update --commit=a4a6a5c0c55a06ed7786276c9758baf7578e30bc1db4dd5d267cbb39d18884d3 us.zoom.Zoom
```
