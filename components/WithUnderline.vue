<script setup lang="ts">
const props = defineProps<{
  is: Component | string;
}>();
</script>

<template>
  <component
    style="background-position-y: 80%"
    from="50% pink-400 dark:pink-700"
    to="50% pink-200 dark:pink-900"
    bg="gradient-to-r no-repeat underline-start hover:underline-end"
    :is="props.is"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>
