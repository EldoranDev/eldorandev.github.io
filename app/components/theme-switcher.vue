<template>
  <ClientOnly>
    <div class="theme-switcher">
      <span class="text"> Dark Mode </span>
      <button
        type="button"
        role="switch"
        aria-checked="false"
        :class="{
          button: true,
          'button--enabled': enabled,
        }"
        @click="onClick()"
      >
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          :class="{
            toggle: true,
            'toggle--enabled': enabled,
          }"
        ></span>
      </button>
    </div>
    <template #fallback>
      <div class="theme-switcher">
        <span class="text"> Dark Mode </span>
        <button type="button" role="switch" class="button">
          <span class="sr-only">Use setting</span>
          <span aria-hidden="true" class="toggle toggle"></span>
        </button>
      </div>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const enabled = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(dark: bool) {
    colorMode.preference = dark ? "dark" : "light";
  },
});

const onClick = () => {
  enabled.value = !enabled.value;
};
</script>

<style lang="postcss" scoped>
.theme-switcher {
  @apply my-1 flex;
}

.text {
  @apply mr-3;
}

.button {
  @apply bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600;
}

.button--enabled {
  @apply bg-blue-600 !important;
}

.toggle {
  @apply translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200;
}

.toggle--enabled {
  @apply translate-x-5 !important;
}
</style>
