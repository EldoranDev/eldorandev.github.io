<template>
    <v-flex ma-2>
      <v-card>
        <v-img
          class="white--text"
          height="170px"
          :src="project.fields.image" />
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ project.title }}</h3>
            <div class="caption grey--text" v-html="project.fields.date"></div>
            <div v-html="project.content"></div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn icon v-if="project.fields && project.fields.github" :href="project.fields.github" target='_blank'>
          <v-icon medium :href="project.github" target="_blank">fa-github</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
}
</script>
