<template>
  <div pt="4" flex="~ row wrap" gap="2">
    <NuxtLink href="https://shadowrz.github.io/blog/" target="_blank" class="group">
      <span
        rounded="2" text="lg" px="2" py="1"
        ring="pink-500 group-focus:2"
        bg="gray-200 hover:pink-200 dark:pink-900 dark:hover:gray-900"
        un-text="hover:pink-700"
        transition duration="200"
      >
        <Icon name="ph:pen-duotone" style="vertical-align: -0.125rem" /> Blog
      </span>
    </NuxtLink>
    <NuxtLink href="https://codepen.io/ShadowRZ" target="_blank" class="group">
      <span
        rounded="2" text="lg" px="2" py="1"
        ring="pink-500 group-focus:2"
        bg="gray-200 hover:pink-200 dark:pink-900 dark:hover:gray-900"
        un-text="hover:pink-700"
        transition duration="200"
      >
        <Icon name="ph:codepen-logo-duotone" style="vertical-align: -0.125rem" /> Codepen
      </span>
    </NuxtLink>
    <NuxtLink href="https://social.boiledscript.com/@ShadowRZ" target="_blank" class="group">
      <span
        rounded="2" text="lg" px="2" py="1"
        ring="pink-500 group-focus:2"
        bg="gray-200 hover:pink-200 dark:pink-900 dark:hover:gray-900"
        un-text="hover:pink-700"
        transition duration="200"
      >
        <Icon name="ph:cat-duotone" style="vertical-align: -0.125rem" /> Fediverse
      </span>
    </NuxtLink>
    <NuxtLink href="https://matrix.to/#/@shadowrz:nixos.dev" target="_blank" class="group">
      <span
        rounded="2" text="lg" px="2" py="1"
        ring="pink-500 group-focus:2"
        bg="gray-200 hover:pink-200 dark:pink-900 dark:hover:gray-900"
        un-text="hover:pink-700"
        transition duration="200"
      >
        <Icon name="ph:at-duotone" style="vertical-align: -0.125rem" /> Matrix
      </span>
    </NuxtLink>
  </div>
</template>
