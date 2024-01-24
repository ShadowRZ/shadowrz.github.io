<script setup lang="ts">
const toTop = (event: Event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <a
    href="#"
    title="Scroll to Top"
    @click="toTop"
    flex
    items="center"
    justify="center"
    rounded="full"
    shadow="lg"
    transition
    duration="200"
    ring="pink-500 hover:2"
    bottom="8" right="8 md:16"
    un-text="hover:pink-500"
    bg="dark:pink-900"
    fixed
    w="12"
    h="12"
  >
    <Icon name="ph:arrow-line-up-duotone" size="1.5rem" />
    <span sr-only>Scroll to Top</span>
  </a>
</template>
