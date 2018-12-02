---
title: "在 GNU/Linux 的桌面环境中设置自动切换壁纸"
excerpt_separator: "<!--more-->"
---
在 GNU/Linux 的桌面环境中设置壁纸，是怎么样的呢？  
灵感来自萌狼的[同名文章](https://blog.yoitsu.moe/linux/setting_up_wallpapers.html)。

<!--more-->

## GNOME

首先打开 Tweaks（优化），你会看到这样的界面：  
（之所以是英文，要怪萌狼不用中文）

![GNOME Tweaks 界面（英文）](/assets/images/gnome-tweaks.png)

你大概注意到了设置墙纸的地方放的不是图片而是 XML。  
但是剩下的参考[萌狼的文章](https://blog.yoitsu.moe/linux/setting_up_wallpapers.html)吧（好懒）。

## MATE

使用如下命令：

```console
$ gsettings set org.mate.background picture-filename /path/to/xml
```

(其中 XML 和 GNOME 用的一样。)

## KDE

（待补充）

## Xfce

（待补充）

## Cinnamon

打开 Cinnamon 控制中心，选择「背景」，切换到「设置」选项卡：

![Cinnamon 背景设置](/assets/images/cinnamon-background-settings.png)

打开「背景作为幻灯片播放」，切换到「图像」选项卡。你会发现：

![Cinnamon 背景图选择](/assets/images/cinnamon-background-select.png)

你只能选择文件夹了。而文件夹里的*所有*图片会像幻灯片一样播放。

如果你不希望如此，你可以使用和 GNOME 一样的 XML，让 Cinnamon 桌面使用它，设置的指令是：

```console
$ gsettings set org.cinnamon.desktop.background picture-uri 'file:///path/to/xml'
```
