<template>
    <article class="article-intro">
        <div class="card-img-top">
            <div class="thumb-img" :style="`background: url('${article.cover}')`"></div>
        </div>
        <span>{{ date }}</span>
        <h3 class="article-intro__title">{{ article.title }}</h3>
        <div>
            <tag
                v-for="tag in article.tags"
                :key="tag"
                :tag="tag"
            >
                {{tag}}
            </tag>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        article: Object,
    },
    computed: {
        date() {
            return new Date(this.article.createdAt).toLocaleDateString("de-DE", {day: '2-digit', month: "long", year: "numeric"});
        }
    }
}
</script>

<style lang="postcss">
    .article-intro {
        @apply flex flex-col items-center;
    }
    .article-intro__title {
        @apply text-4xl font-light;
    }
</style>
