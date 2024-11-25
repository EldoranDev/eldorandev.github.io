<template>
  <div class="layout ">
    <div class="content">
        <NuxtPage />
    </div>
  </div>
</template>

<style lang="postcss">
  .layout {
    @apply min-h-screen min-w-full;
  }

  .content {
    @apply container mx-auto px-4;
  }

  .row {
    @apply flex flex-wrap flex-col xl:flex-row;
  }

  .left-column {
    @apply relative mt-4 text-center;
  }

  @media (min-width: 1280px) {
    .left-column {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .right-column {
      @apply relative mt-4;

      flex: 0 0 50%;
      max-width: 50%;
      margin-left: 8.33333%;
    }
  }
</style>
