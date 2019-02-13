---
title: Nautilus 界面背景
---

由于看了某些 Windows 美化教程的突发奇想。

## 方法

（其实也就一步）

向 `~/.config/gtk-3.0/gtk.css` 写入如下内容：

```css
.nautilus-window notebook > stack {
    background-image: url("/home/shadowrz/.local/nautilus-background.png");
    
    /* 如果你想在右下角放 waifu 的话 :) */
    background-position: right bottom;
    background-repeat: no-repeat;
}
```

（CSS 选择器来源于 Materia）

## 效果

![设置了背景图的 Nautilus](https://i.loli.net/2019/02/13/5c64198bde399.png)
