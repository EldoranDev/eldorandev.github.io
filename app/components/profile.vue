<template>
  <div class="profile">
    <img class="avatar" src="/images/avatar.jpg" />
    <p class="profile-name">Marcel Behrmann</p>
    <p class="profile-sub">Games & Apps</p>
    <div class="social-profiles">
      <SocialLink
        icon="fa6-brands:github-square"
        href="https://github.com/EldoranDev"
      />
      <SocialLink
        icon="fa6-brands:linkedin"
        href="https://www.linkedin.com/in/marcel-behrmann/"
      />
    </div>
    <theme-switcher />
  </div>
</template>

<style lang="postcss" scoped>
.profile {
  @apply flex items-center flex-col;
}

.avatar {
  @apply rounded-full shadow-lg mx-auto;
  width: 125px;
  height: 125px;

  vertical-align: middle;
}

.profile-name {
  @apply text-3xl font-normal my-2;
}

.social-profiles {
  @apply flex justify-between mx-10 my-3;
  max-width: 250px;
  min-width: 250px;

  justify-self: center;

  @media (min-width: 1280px) {
    max-width: 100%;
    min-width: default;
  }
}
</style>
