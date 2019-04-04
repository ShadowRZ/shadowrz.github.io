---
title: 用其他工具设定 MATE 壁纸（仮
license: CC-BY-SA-4.0
---

（纯个人理解向）  
MATE 桌面自带一个壁纸设定工具，但是假如如果你厌(bu)倦(xi)了(huan)它呢？

## Step 01: 新的壁纸设定工具

在 [ArchWiki - List_of_applications/Other#Wallpaper_setters](https://wiki.archlinux.org/index.php/List_of_applications/Other#Wallpaper_setters) 寻找一个新工具

## Step 02: 关闭 MATE 的壁纸绘制

```console
$ gsettings set org.mate.background draw-background false # 让 MATE 不要绘制壁纸
```

## Step 03: 启动壁纸设定工具

在 MATE 控制中心，打开「启动应用程序」，添加壁纸设定工具的启动指令。

## 然后……

注销，重新进入 MATE。

以上。  
——因为 MATE 壁纸设定工具居然不能轮换壁纸，然后选择 Feh，又突然想写过程的布偶君
