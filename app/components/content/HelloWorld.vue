<template>
  <header class="flex flex-col text-base xl:text-xl text-left">
    <div class="flex flex-col gap-8">
      <section class="flex flex-col gap-4">
        <h2 class="text-4xl xl:text-5xl font-bold">
          Hi there!
          <Icon ml="2" name="fluent-emoji-flat:waving-hand" style="vertical-align: -0.125em" />
        </h2>
        <section class="text-2xl xl:text-3xl">
          <p>
            I'm <span class="font-bold">Yorusaka Miyabi</span>, more commonly known
            as the handle
            <WithUnderline is="span" class="bg-underline-large transition-all duration-200 font-bold">
              {{ "@ShadowRZ" }}
            </WithUnderline>.
          </p>
          <div class="text-xl xl:text-2xl">
            <p>
              I'm just a wanderer that may go anywhere and try to justify what
              happened here and there.
            </p>
            <p>
              Personally busy and may not respond quickly, so don't expect a
              timely response from me.
            </p>
            <p>
              <UnderlinedLink href="https://nixos.org" target="_blank" rel="noopener" class="bg-underline font-bold">
                <Icon name="simple-icons:nixos" size="0.9em" class="mr-1" style="vertical-align: -0.125rem" />{{ "NixOS"
                }}
              </UnderlinedLink>
              liker.
              <UnderlinedLink href="https://github.com/NixOS/nixpkgs" target="_blank" rel="noopener"
                class="bg-underline font-bold">
                {{ "Nixpkgs" }}
              </UnderlinedLink>
              contributor.
            </p>
            <br>
            <p>
              I also works on other side projects that are of personal tastes.
            </p>
            <HelloPageChips />
          </div>
        </section>
      </section>
    </div>
  </header>
  <slot />
</template>
