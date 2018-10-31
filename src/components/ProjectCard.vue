<template>
  <div class="row mb-3">
    <div class="col-sm-12">
    <div class="card">
        <div class="card-img-top">
          <div class="thumb-img" :style="imageStyle"></div>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ project.fields.date }}</h6>
          <div class="card-text" v-html="project.content"></div>

          <a class="icon card-link" v-if="project.fields && project.fields.github" :href="project.fields.github">
            <i class="fa fa-github"></i>
          </a>
          <a class="icon card-link" v-if="project.fields && project.fields.link" :href="project.fields.link" target='_blank'>
            <i class="fa fa-globe"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    computed: {
      imageStyle() {
        return `background: url(${this.project.fields.image});`
      }
    }
}
</script>

<style>
.thumb-img {
  height: 175px;
  border-radius: inherit;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

.card-img-top {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    overflow: hidden;
}
</style>
