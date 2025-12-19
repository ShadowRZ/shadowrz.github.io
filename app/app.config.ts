export default defineAppConfig({
  header: {
    title: '@ShadowRZ\'s Bitfield'
  },
  seo: {
    titleTemplate: '%s - @ShadowRZ\'s Bitfield',
  },
  ui: {
    colors: {
      primary: 'pink',
      neutral: 'pink'
    },
    icons: {
      arrowDown: 'i-ph-arrow-down',
      arrowLeft: 'i-ph-arrow-left',
      arrowRight: 'i-ph-arrow-right',
      arrowUp: 'i-ph-arrow-up',
      caution: 'i-ph-warning-circle',
      check: 'i-ph-check',
      chevronDoubleLeft: 'i-ph-caret-double-left',
      chevronDoubleRight: 'i-ph-caret-double-right',
      chevronDown: 'i-ph-caret-down',
      chevronLeft: 'i-ph-caret-left',
      chevronRight: 'i-ph-caret-right',
      chevronUp: 'i-ph-caret-up',
      close: 'i-ph-x',
      copy: 'i-ph-copy',
      copyCheck: 'i-ph-check-circle',
      dark: 'i-ph-moon',
      drag: 'i-ph-dots-six-vertical',
      ellipsis: 'i-ph-dots-three',
      error: 'i-ph-x-circle',
      external: 'i-ph-arrow-up-right',
      eye: 'i-ph-eye',
      eyeOff: 'i-ph-eye-slash',
      file: 'i-ph-file',
      folder: 'i-ph-folder',
      folderOpen: 'i-ph-folder-open',
      hash: 'i-ph-hash',
      info: 'i-ph-info',
      light: 'i-ph-sun',
      loading: 'i-ph-circle-notch',
      menu: 'i-ph-list',
      minus: 'i-ph-minus',
      panelClose: 'i-ph-caret-left',
      panelOpen: 'i-ph-caret-right',
      plus: 'i-ph-plus',
      reload: 'i-ph-arrow-counter-clockwise',
      search: 'i-ph-magnifying-glass',
      stop: 'i-ph-square',
      success: 'i-ph-check-circle',
      system: 'i-ph-monitor',
      tip: 'i-ph-lightbulb',
      upload: 'i-ph-upload',
      warning: 'i-ph-warning'
    },
    // Components
    header: {
      slots: {
        root: 'bg-pink-50 dark:bg-pink-950 text-pink-800 dark:text-pink-200'
      }
    },
    contentToc: {
      slots: {
        root: 'sticky top-(--ui-header-height) z-10 bg-[initial] backdrop-blur -mx-4 px-4 sm:px-6 sm:-mx-6 overflow-y-auto max-h-[calc(100vh-var(--ui-header-height))]',
      }
    },
    footer: {
      slots: {
        left: 'flex items-center justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1',
      }
    }
  },
  toc: {
    bottom: {
      title: 'To Somewhere Else',
      links: [
        {
          icon: 'i-ph-pen-duotone',
          label: 'Blog',
          to: 'https://shadowrz.github.io/blog/',
          target: '_blank'
        },
        {
          icon: 'i-ph-codepen-logo-duotone',
          label: 'Codepen',
          to: 'https://codepen.io/ShadowRZ',
          target: '_blank'
        },
        {
          icon: 'i-ph-cat-duotone',
          label: 'Fediverse',
          to: 'https://boiledscript.com/@ShadowRZ',
          target: '_blank'
        },
        {
          icon: 'i-ph-matrix-logo-duotone',
          label: 'Matrix',
          to: 'https://matrix.to/#/@shadowrz:nixos.dev',
          target: '_blank'
        }
      ]
    }
  }
})
