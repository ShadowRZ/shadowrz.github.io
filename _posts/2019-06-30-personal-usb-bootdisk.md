---
title: "制作自己的启动 USB？"
excerpt: "我想做自己的启动 USB，不用 dd，然而……"
tags: ["Daily", "GRUB"]
---

**（这是一个不用 `dd` 的尝试，这可不是因为 DD 在 Vtuber 界的梗（虽然我也不懂））**

首先当然是准备 USB，我用了一个 4G 大小的存储卡。

## 分区准备

我这里用的是 FAT32 文件系统。

可能创建分区的方法我不需要多说。不过要给它加启动标志（可选地加上 ESP 标志，用于 UEFI）

## 安装 GRUB

（要不是因为 SYSLINUX 我跑不起来就用 SYSLINUX 了）

首先把你的 USB 插入电脑。

重启系统并进入 GRUB，按 c，接下来输入 ls，如果你的 USB 显示成 (fd0)，那么 BIOS（非常气人地）把它当成了 USB-FDD……（我掉坑了所以需要说一下）

启动你的 GNU/Linux 发行版，安装 GRUB：（假设你把 USB 的分区挂载到了 `/run/media/system/PHANTOM-F`，GRUB 文件目录在 `/System/Futaba`）

```console
# grub-install --target=i386-pc --debug --recheck --boot-directory=/run/media/system/PHANTOM-F/System/Futaba /dev/sdb
### -- 如果需要 UEFI -- ####
# grub-install --target=x86_64-efi --boot-directory=/run/media/system/PHANTOM-F/System/Futaba --efi-directory=/run/media/system/PHANTOM-F --bootloader-id=GRUB --removable --recheck --debug
```

如果被当成了 USB-FDD，加上 `--allow-floppy` 选项。`--debug` 可以不用。

## 配置文件

不推荐用 `grub-mkconfig` 生成，可以手打。（其实我为了主题用了生成器）

### 启动项

可以在[这里](http://pendrivelinux.com/downloads/multibootlinux/grub.cfg)获取一些启动 ISO 的配置样板。

至于基于 Windows PE 的系统我不知道如何写启动项……

## 后事

我在这上面放了一个（展开的）Manjaro Cinnamon Live image。

目录结构：
```
/System (PARTLABEL=PHANTOM-F)
├─ Initials
│   ├── Manjaro
│   │   ├── amd_ucode.img
│   │   ├── amd_ucode.LICENSE
│   │   ├── initramfs-x86_64.img
│   │   ├── intel_ucode.img
│   │   ├── intel_ucode.LICENSE
│   │   ├── memtest
│   │   ├── memtest.COPYING
│   │   └── vmlinuz-x86_64
│   └── Phantom
│       ├── initramfs-futaba.img
│       ├── rootfs-futaba.sfs
│       └── vmlinuz-linux
└── Runtimes
    ├── Manjaro
    │   └── x86_64
    │       ├── desktopfs.md5
    │       ├── desktopfs.sfs
    │       ├── livefs.md5
    │       ├── livefs.sfs
    │       ├── mhwdfs.md5
    │       ├── mhwdfs.sfs
    │       ├── rootfs.md5
    │       └── rootfs.sfs
    └── Phantom
```

启动参数：`checksum lang=en_US keytable=us tz=UTC driver=free misobasedir=System/Runtimes/Manjaro misolabel=PHANTOM-F quiet systemd.show_status=1`

然而不知道为什么 Manjaro 启动后，Xorg 整体黑屏……还有几个有反应的像素……

更神奇的是只要是从 USB 上的 GRUB 加载就会这样，从我的硬盘加载就不会……不知道发生了什么……

**17:42 更新：原来我把设定使用自由或非自由驱动的参数写错了，导致 Manjaro 不知所措……**
