<template>
  <div class="card">
      <div class="card-image">
        <img :src="project.fields.image" />
      </div>
      <div class="card-content">
        <h3 class="headline mb-0">{{ project.title }}</h3>
        <div v-html="project.content"></div>
      </div>
      <div class="card-action">
        <a class="icon" v-if="project.fields && project.fields.github" :href="project.fields.github">
          <i class="fa fa-github"></i>
        </a>
        <a class="icon" v-if="project.fields && project.fields.link" :href="project.fields.link" target='_blank'>
          <i class="fa fa-globe"></i>
        </a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
}
</script>

<style>
.card-image {
  max-height: 170px !important;
  overflow: hidden;
}

.card-iamge img {
  max-height: 170px;
}
</style>
