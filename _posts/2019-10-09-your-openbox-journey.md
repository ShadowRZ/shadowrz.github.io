---
title: Openbox 旅途
date: 2019-10-09 13:10 +0800
tags: Openbox
---

Welcome to Openbox world ???

不皮了，不皮了。本文意在教你如何正确（？）使用 Openbox，在那样的世界里游走。

~~（要不是因为某些事我都不写这东西）~~

## 但首先你要有一个 Openbox

确保你的 X.Org 安装能够正常使用。安装 Openbox：

    sudo pacman -Syu openbox python2-xdg

- `python2-xdg` 用于 XDG Autostart。

## 其次不要不知所措

Openbox 默认的几个键位如下：

- Alt-F4: 关闭窗口
- Alt-Space: 激活窗口的窗口菜单
- Alt-Tab, Alt-Shift-Tab: 正向/逆向切换窗口
- Windows-D: 显示桌面

右键可以打开一个菜单。

## 然后我想……

（这一部分可能不完整）

### 设张墙纸

安装 Feh：（赠一个图片查看器！）

    sudo pacman -Syu feh

然后用 Feh 的 `--bg` 系选项设置墙纸。

切记！一定要在 `~/.config/openbox/autostart/` 里加 `sh -c ~/.fehbg`，否则下次登录你的墙纸就没了！

### 有个启动器

我这里使用了 Gnome-Pie。

    sudo pacman -Syu gnome-pie

启动 Gnome-Pie 两次以打开其设置，然后打开其自动启动选项。先不要走！改一下 `~/.config/autostart/gnome-pie.desktop` 在 Exec 前面加 `env XDG_MENU-PREFIX=gnome-` 不然 Gnome-Pie 不知道你的应用程序在哪里！

默认用 Ctrl-Alt-Space 就可以打开应用程序菜单。

---

希望这些内容能帮你用上 Openbox。
