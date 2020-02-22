---
title: 我的伪春菜程序概念文档
layout: article
---

如题。是一个正在尝试开发的（机能不完整的）伪春菜程序的概念文档（也可能会更新）。

不知道伪春菜是什么的建议备好你们的 Google。

## 如何实现

在我的环境里有两种方案[^1]：

- 作为 Plasma 的一个小部件实现，可以放心考虑接入 Plasma 环境，但只能在 Plasma 工作空间里使用
- 独立的 Qt 程序，可以在 Windows[^2] / Mac / Linux 里运行，但是可能为了给每个平台适配需要一些处理

我暂定选择前者。

## 视觉呈现和用户交互

目前先实现显示静态图片的功能，动态图片和表情系统暂定。

用户交互方面，我所考虑的机能：

- 双击角色可以弹出气泡并随机从列表中获取一段文字（暂定的简单实现）
- 基于脚本驱动的对话框系统，类似 MCS[^3] 所提供的。未确定的事项：
  - 脚本引擎，使用 [`QJSEngine`](https://doc.qt.io/qt-5/qjsengine.html) 还是一个自创的脚本解析器
- 可交互区域，如果实现了脚本引擎，可交互区域内的事件，除了系统要的那些都会无条件分配给脚本引擎
- 文本输入
- 角色安装系统
- 角色间交互
- 接入 IPC（比如如果有 D-Bus 就可以选择注册通知接收端，然后选择一个角色处理通知事件，或者 MPRIS）
- 伴侣角色（MCS[^3] 里称为使魔 Kero）

### 给角色作者提供的事件

TBD

## 管理角色

角色会被放到 `$HOME` 的一个目录下，也可以通过拖拽文件安装新角色。

目录结构未定。

## 角色的描述文件（暂定格式，这个有可能要改）

**（只能 UTF-8！！）**

```ini
[General]
Name=显示的名字
ID=DirName_Use_ASCII_ONLY
Creator=作者
CreatorURL=https://example.com

[Shell]
Name=显示的名字
ID=DirName_Use_ASCII_ONLY
Creator=作者
CreatorURL=https://example.com
ShellPicture=path/to/pic

[Balloon]
Name=显示的名字
ID=DirName_Use_ASCII_ONLY
Creator=作者
CreatorURL=https://example.com
BalloonPicture=path/to/pic
```

描述如下：

### [General]

因为 Qt 的 [`QSettings`](https://doc.qt.io/qt-5/qsettings.html) 不给组名就是这个组（

Name
: 在程序里显示的名字

ID
: 目录名字，（暂定）只能使用 ASCII 字符集

Creator
: 作者名

CreatorURL
: 作者的主页

### [Shell]

同上，但多一项：

ShellPicture
: 角色图片，相对路径推荐

### [Balloon]

同上，ShellPicture 改成 BalloonPicture

---

（一切都是暂定）

[^1]: 本来想过 GTK 但是坑了
[^2]: Windows 有 SSP 可以用，而且应该比 Qt 程序启动更快
[^3]: Materia / Crow / SSP，第一个不但坑了网站也没了，第二个坑了，第三个本体甚至疫情下都在更新，然而中文翻译还坑了（气）
