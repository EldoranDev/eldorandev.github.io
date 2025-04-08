<template>
    <div class="profile">
        <img
            class="avatar"
            src="/images/avatar.jpg"
        />
        <p class="profile-name">Marcel Behrmann</p>
        <p class="profile-sub">Games & Apps </p>
        <div class="social-profiles">
            <a href="https://github.com/EldoranDev" target="_blank" rel="noopener">
                <Icon name="fa6-brands:github-square" class="profile-icon" size="2.25rem"/>
            </a>
            <a href="https://www.linkedin.com/in/marcel-behrmann/" target="_blank" rel="noopener">
              <Icon name="fa6-brands:linkedin" class="profile-icon" />
            </a>
        </div>

        <!-- <nuxt-link to="/blog">Blog</nuxt-link> -->

        <theme-switcher />
    </div>
</template>

<style lang="postcss" scoped>
    .profile {
        @apply flex items-center flex-col;
    }

    .avatar {
        @apply rounded-full shadow-md shadow-lg mx-auto;
        width: 125px;
        height: 125px;

        vertical-align: middle;
    }

    .profile-name {
        @apply text-3xl font-normal my-2;
    }

    .social-profiles {
        @apply flex justify-between mx-10 my-3;
        max-width: 300px;
        min-width: 300px;

        justify-self: center;

        @media (min-width: 1280px) {
            max-width: 100%;
            min-width: default;
        }
    }

    .profile-icon {
        @apply w-9 h-9 relative inline-block text-black dark:text-white hover:text-blue-600;
        @apply hover:text-blue-600 !important;
    }
</style>
