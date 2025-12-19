<template>
  <UPageList class="gap-4">
    <UPageCard variant="soft" target="_blank" v-for="link in links" :key="link.url" :to="link.url">
      <UUser size="3xl" :name="link.name" :description="link.description" :avatar="{
        src: link.img,
        icon: 'i-ph-user-circle-dashed-duotone',
        ui: {
          icon: 'w-8 h-8',
        },
      }" />
    </UPageCard>
  </UPageList>
</template>

<script lang="ts" setup>
type LinkItem = {
  img: string;
  name: string;
  description: string;
  url: string;
};
type ComponentProps = {
  links: LinkItem[];
};

defineProps<ComponentProps>();
</script>
