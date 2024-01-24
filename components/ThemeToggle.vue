<script setup lang="ts">
const colors = [
  {
    id: 'system',
    icon: 'ph:monitor-duotone',
    title: 'System',
  },
  {
    id: 'light',
    icon: 'ph:sun-duotone',
    title: 'Light',
  },
  {
    id: 'dark',
    icon: 'ph:moon-duotone',
    title: 'Dark',
  }
]
</script>
<template>
  <ul flex="~ row" gap="2">
    <li v-for="color of colors">
      <button
        :disabled="$colorMode.preference === color.id"
        @click="$colorMode.preference = color.id"
        :title="color.title"
        type="button"
        flex
        w="8"
        h="8"
        ring="pink-500 focus:2"
        :class="{ 'ring-2 text-pink-500 bg-pink-200': $colorMode.preference === color.id }"
        rounded="full"
        bg="gray-200 dark:pink-950 dark:hover:gray-900 hover:pink-200"
        items="center"
        justify="center"
        transition
        duration="200"
        un-text="hover:pink-500"
      >
        <Icon :name="color.icon" size="1.25rem" />
        <span sr-only>{{ color.title }}</span>
      </button>
    </li>
  </ul>
</template>
