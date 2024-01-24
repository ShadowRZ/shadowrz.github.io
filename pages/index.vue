<script setup lang="ts"></script>

<template>
  <div flex="~ col" px="8 md:16" pt="32">
    <header>
      <div class="flex flex-col gap-8">
        <section flex="~ col" gap="4" pt="4">
          <h2 text="4xl" font="bold">
            Hi there!<Icon
              ml="2"
              name="fluent-emoji-flat:waving-hand"
              style="vertical-align: -0.125em"
            />
          </h2>
          <section text="2xl">
            <p>
              I'm <span font="bold">Yorusaka Miyabi</span>, more commonly known
              as the handle
              <WithUnderline
                is="span"
                transition="all"
                duration="200"
                class="bg-underline-large"
                font="bold"
                >@ShadowRZ</WithUnderline
              >.
            </p>
            <div text="xl" mt="4">
              <p>
                I'm just a wanderer that may go anywhere and try to justify what
                happened here and there.
              </p>
              <p>
                Personally busy and may not respond quickly, so don't expect a
                timely response from me.
              </p>
              <p>
                <WithUnderline
                  is="a"
                  transition="all"
                  duration="200"
                  font="bold"
                  class="bg-underline"
                  href="https://nixos.org"
                  target="_blank"
                  rel="noopener"
                >
                  <Icon
                    name="simple-icons:nixos"
                    mr="1"
                    size="0.95em"
                    style="vertical-align: -0.125rem"
                  />NixOS</WithUnderline
                >
                liker.
                <a
                  href="https://github.com/NixOS/nixpkgs"
                  target="_blank"
                  rel="noopener"
                >
                  <WithUnderline
                    transition="all"
                    duration="200"
                    is="span"
                    font="bold"
                    class="bg-underline"
                    >Nixpkgs</WithUnderline
                  >
                </a>
                contributor.
              </p>
              <br />
              <p>
                I also works on other side projects that are of personal tastes.
              </p>
              <p font="bold">TODO: Other Pages</p>
            </div>
          </section>
        </section>
        <section>
          <h3 text="2xl" font="bold">
            <Icon
              name="ph:link-duotone"
              mr="1"
              style="vertical-align: -0.125rem"
            />External Links
          </h3>
          <section>
            <p font="bold">TODO</p>
          </section>
        </section>
      </div>
    </header>
  </div>
</template>
