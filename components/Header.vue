<template>
  <nav flex="~ row" gap="8" justify="end" px="8 md:16" py="4">
    <ul flex="~ row" gap="2">
      <li>
        <NuxtLink
          flex
          w="8"
          h="8"
          ring="pink-500 focus:2"
          rounded="full"
          bg="hover:gray-200"
          items="center"
          justify="center"
          transition
          duration="200"
          un-text="hover:pink-500"
          to="/about"
          title="About"
        >
          <Icon name="ph:info-duotone" size="1.25rem" />
          <span sr-only>About</span>
        </NuxtLink>
      </li>
    </ul>
    <ThemeToggle />
  </nav>
</template>
