<template>
    <a v-bind:class="classObject" :href="href" :target="target" :rel="rel">
        <slot></slot>
    </a>
</template>

<script>
export default {
    props: {
        href: String,
        icon: Boolean,
    },
    computed: {
        classObject() {
            return {
                icon: this.icon
            }; 
        },
        target() {
            if (!this.href.startsWith('http')) {
                return null;
            }
            return '_blank';
        },
        rel() {
            if (!this.href.startsWith('http')) {
                return null;
            }
            return 'noopener';
        }
    }
}
</script>
