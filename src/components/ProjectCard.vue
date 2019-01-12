<template>
  <div class="row mb-3">
    <div class="col-sm-12">
    <div class="card">
        <div class="card-img-top">
          <div class="thumb-img" :style="imageStyle"></div>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ project.date }}</h6>
          <div class="card-text" v-html="project.content"></div>

          <app-link icon v-if="project.link" :href="project.link" style="margin-right: 10px;">
            <i class="fa fa-globe"></i>
          </app-link>
          <app-link icon v-if="project.github" :href="project.github" style="margin-right: 10px;">
            <i class="fa fa-github"></i>
          </app-link>
          <app-link icon v-if="project.gitlab" :href="project.gitlab" style="margin-right: 10px;">
            <i class="fa fa-gitlab"></i>
          </app-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLink from './Link';

export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    computed: {
      imageStyle() {
        return `background: url(${this.project.image.src});`
      }
    },
    components: {
      AppLink
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
