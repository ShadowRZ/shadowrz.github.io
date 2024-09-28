<template>
  <div grid="~ cols-1 sm:cols-2 md:cols-3 gap-4">
    <template
      v-for="link in links"
      :key="link.url"
    >
      <NuxtLink
        :href="link.url"
        target="_blank"
        px="4"
        py="2"
        bg="gray-200 hover:pink-200 dark:pink-900 dark:hover:gray-900"
        un-text="hover:pink-700"
        transition
        duration="200"
        inline-flex
        flex="row"
        items="center"
        decoration="none"
        min-w="16"
        rounded="4"
        gap="2"
      >
        <NuxtImg
          :src="link.img"
          size="12"
          rounded="full"
        />
        <span
          flex="~ col"
          min-w="0"
        >
          <span font="bold">{{ link.name }}</span>
          <span
            un-opacity="50"
            truncate
            min-w="0"
            break-all
            :title="link.description"
          >{{ link.description }}</span>
        </span>
      </NuxtLink>
    </template>
  </div>
</template>

<script lang="ts" setup>
type LinkItem = {
  img: string
  name: string
  description: string
  url: string
}
type ComponentProps = {
  links: LinkItem[]
}

defineProps<ComponentProps>()
</script>
