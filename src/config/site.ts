import { PUBLIC_ARTALK_ENABLED, PUBLIC_ARTALK_SERVER } from "astro:env/server";

const artalkServer = PUBLIC_ARTALK_SERVER?.trim() || "";
const artalkEnabled =
  PUBLIC_ARTALK_ENABLED === undefined
    ? Boolean(artalkServer)
    : PUBLIC_ARTALK_ENABLED;

const site = {
  // --- Site Metadata ---
  meta: {
    title: "@ShadowRZ's Bitfield",
    description: "The NOexistenceN of something?",
    author: "ShadowRZ",
    logo: "/assets/avatar.png",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "en",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "Home", subtitle: "Index", href: "/" },
    { name: "Projects", subtitle: "Works", href: "/projects" },
    { name: "Tools", subtitle: "Stack", href: "/tools" },
    { name: "Friends", subtitle: "Links", href: "/friends" },
  ],

  // --- Social Links ---
  social: [
    {
      name: "GitHub",
      href: "https://github.com/ShadowRZ",
      icon: "ph:github-logo-duotone",
    },
    {
      name: "CodePen",
      href: "https://codepen.io/ShadowRZ",
      icon: "ph:codepen-logo-duotone",
    },
    {
      name: "Fediverse",
      href: "https://miruku.cafe/@ShadowRZ",
      icon: "ph:cat-duotone",
    },
    {
      name: "Matrix",
      href: "https://matrix.to/#/@shadowrz:nixos.dev",
      icon: "ph:matrix-logo-duotone",
    },
  ],

  friendCard: {
    name: "@ShadowRZ's Bitfield",
    description: "The NOexistenceN of something?",
    link: "https://shadowrz.github.io",
    avatar: "https://shadowrz.github.io/assets/avatar.png",
  },

  // --- Homepage Hero ---
  hero: {
    greeting: "Hi there! 👋",
    // Supports HTML. Use <span class="font-medium text-foreground underline decoration-primary/30"> to highlight keywords
    description:
      '<div class="text-2xl mb-4">I\'m Yorusaka Miyabi, more commonly known as the handle <span class="font-medium text-foreground underline decoration-primary/30">@ShadowRZ</span></div>I\'m just a wanderer that may go anywhere and try to justify what happened here and there.<br/>Personally busy and may not respond quickly, so don\'t expect a timely response from me.<br/><span class="font-medium text-foreground underline decoration-primary/30">NixOS</span> liker. <span class="font-medium text-foreground underline decoration-primary/30">Nixpkgs</span> contributor.',
    cards: [
      { icon: "ph:clock-user-duotone", label: "Status", value: "(Aribnatry)" },
      { icon: "ph:globe-duotone", label: "Location", value: "Unknown" },
    ],
  },

  // --- Comments ---
  comments: {
    enabled: artalkEnabled,
    provider: "artalk" as const,
    artalk: {
      server: artalkServer,
    },
  },

  // --- Footer ---
  footer: {
    copyright: "© 2023-2026 Yorusaka Miyabi",
    builtWith: "Built with Astro + Breeze",
  },

  // --- Feature Toggles ---
  features: {
    search: false,
    rss: false,
    // Auto-mark posts as "new" if published within this many days (0 to disable)
    newPostDays: 0,
  },

  // --- Tools Page Data ---
  // Each item can use either `icon` (Iconify name) or `logo` (public path or { light, dark } paths)
  tools: [
    {
      name: "development",
      items: [
        {
          name: "Zed",
          link: "https://zed.dev",
          icon: "simple-icons:zedindustries",
        },
        { name: "Terminal", icon: "ph:terminal-duotone" },
        {
          name: "Git",
          link: "https://git-scm.com",
          icon: "ph:git-branch-duotone",
        },
      ],
    },
    // {
    //   name: "design",
    //   items: [
    //     { name: "Figma", link: "https://www.figma.com", icon: "mdi:vector-polygon" },
    //     { name: "Sketch", link: "https://www.sketch.com", icon: "mdi:vector-square" },
    //     { name: "Adobe XD", link: "https://www.adobe.com/products/xd.html", icon: "mdi:pencil-ruler" },
    //     { name: "Photoshop", link: "https://www.adobe.com/products/photoshop.html", icon: "mdi:image-edit" },
    //   ]
    // },
    // {
    //   name: "productivity",
    //   items: [
    //     { name: "Notion", link: "https://www.notion.so", icon: "mdi:notebook" },
    //     { name: "Obsidian", link: "https://obsidian.md", icon: "mdi:diamond-stone" },
    //     { name: "Raycast", link: "https://www.raycast.com", icon: "mdi:lightning-bolt" },
    //     { name: "Arc Browser", link: "https://arc.net", icon: "mdi:web" },
    //   ]
    // },
  ],

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    projectsTitle: "Projects",
    projectsDescription: "What I did.",
    friendsTitle: "Friends",
    friendsDescription: "Where others come and go.",
    toolsTitle: "Tools",
    backToPosts: "Back to posts",
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription:
      "The page you're looking for may have been removed or the link is broken.",
    endOfPost: "End of Post",
    tableOfContents: "Table of Contents",
    searchPlaceholder: "Search posts, tags, or commands...",
    searchNavigate: "Navigate",
    commentSuccess: "Comment submitted",
  },
} as const;

export default site;
