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

（待补充）
