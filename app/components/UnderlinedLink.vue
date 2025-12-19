<template>
  <NuxtLink
    style="background-position-y: 85%; transition-property: background-position;"
    class="duration-200 bg-gradient-to-r bg-no-repeat bg-underline-start hover:bg-underline-end from-50% from-pink-400 dark:from-pink-700 to-50% to-pink-200 dark:to-pink-900"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
</template>
