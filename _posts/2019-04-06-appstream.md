---
title: "AppStream：两边世界的互相连接"
---

随着社区的进步，我们现在有了 PackageKit 用于管理软件包，然而只有这一样东西还不够做一个应用商店的体验的～
那么用什么呢？有请 AppStream！

本文章是 [PackageKit：统一（？）GNU/Linux 发行版包管理器操作的前端 - 约伊兹的萌狼乡手札](https://blog.yoitsu.moe/linux/packagekit.html) 的双子文章。

## 什么是 AppStream？

> AppStream is a cross-distribution effort for enhancing the way we interact with the software repositories provided by (Linux) distributions by standardizing software component metadata.
>It provides the foundation to build software-center applications, by providing metadata necessary for an application-centric view on package repositories. AppStream additionally provides specifications for things like an unified software metadata database, screenshot services and various other things needed to create user-friendly application-centers for (Linux) distributions.

> -- https://www.freedesktop.org/wiki/Distributions/AppStream/

他的架构是这样的：

- 提供商创建 XML 用于描述软件的信息
- 发行版提供数据以与 PackageKit 包互相对应。

## 用途

（暂定）

## 他不是什么？

只有这个东西是不可以的～你还需要 PackageKit。

—— End.