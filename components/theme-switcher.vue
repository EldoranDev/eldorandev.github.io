<template>
    <div class="theme-switcher">
        <span class="theme-switcher__text">
            Dark Mode
        </span>
        <button
            type="button"
            role="switch" 
            aria-checked="false"

            :class="buttonClasses"
            @click="onClick()"
        >
            <span class="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                :class="toggleClasses"
            ></span>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            enabled: false,
        };
    },
    computed: {
        buttonClasses() {
            return {
                'theme-switcher__button': true,
                'theme-switcher__button--enabled': this.enabled
            };
        },
        toggleClasses() {
            return {
                'theme-switcher__toggle': true,
                'theme-switcher__toggle--enabled': this.enabled
            };
        },
    },
    methods: {
        onClick() {
            this.enabled = !this.enabled;
        }
    },
    watch: {
        enabled(value) {
            const body = document.body;

            if (value) {
                body.classList.add('dark')
                window.localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark');
                window.localStorage.setItem('theme', 'light');
            }
        }
    },
    beforeMount() {
        if(window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
            this.enabled = true;
        }

        const theme = window.localStorage.getItem('theme');

        if (theme !== undefined) {
            this.enabled = theme === 'dark';
        }
    }
}
</script>

<style lang="postcss">
    .theme-switcher {
        @apply my-1 flex;
    }

    .theme-switcher__text {
        @apply mr-3;
    }

    .theme-switcher__button {
        @apply bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600;
    }

    .theme-switcher__button--enabled {
        @apply bg-blue-600 !important;
    }

    .theme-switcher__toggle {
        @apply translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200;
    }

    .theme-switcher__toggle--enabled {
        @apply translate-x-5 !important;
    }
</style>