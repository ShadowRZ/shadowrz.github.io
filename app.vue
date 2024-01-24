<script setup lang="ts">
import "@unocss/reset/tailwind-compat.css";
import "@fontsource-variable/jost";
import "@fontsource-variable/sora";
import "@fontsource-variable/jetbrains-mono";

import { useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll();
const showTop = computed(() => y.value >= 100);

useHead({
  titleTemplate: (subtitle) => {
    return subtitle
      ? `${subtitle} || @ShadowRZ's Bitfield`
      : "@ShadowRZ's Bitfield";
  },
});
</script>

<template>
  <div
    flex="~ col"
    bg="pink-50 dark:pink-950"
    text="pink-800 dark:pink-200"
    min-h="dvh"
    font="sans"
  >
    <Header />
    <NuxtPage grow />
    <Footer />
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <ScrollToTop v-if="showTop" />
    </Transition>
  </div>
</template>
