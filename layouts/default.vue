<template>
  <div class="layout ">
    <div class="content">
        <Nuxt />
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
</style>