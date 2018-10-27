<template>
  <Layout>
    <v-content>
      <v-container>
        <v-layout row wrap align-start>
          <v-flex xs12 md2 offset-md1>
            <div class="text-xs-center">
              <v-avatar size="125px">
                <g-image
                  class="img-circle elevation-7 mb-1"
                  src="../../images/avatar.jpg"
                ></g-image>
              </v-avatar>
              <div class="headline">Marcel <span style="font-weight:bold">Behrmann</span></div>
              <div class="subheading text-xs-center grey--text pt-1 pb-3">Games & Apps</div>
              <v-layout justify-space-between>
                <v-btn icon
                  href='https://www.marcelbehrmann.de/'>
                  <v-icon medium>home</v-icon>
                </v-btn>
                <v-btn icon
                  rel
                  target='_blank'
                  href='https://github.com/EldoranDev'>
                  <v-icon medium>fa-github</v-icon>
                </v-btn>
                <v-btn icon
                  target='_blank'
                  href='https://www.xing.com/profile/Marcel_Behrmann2'>
                  <v-icon medium>fa-xing</v-icon>
                </v-btn>
                <v-btn icon
                  target='_blank'
                  href='https://twitter.com/EldoranDev'>
                  <v-icon medium>fa-twitter</v-icon>
                </v-btn>
              </v-layout>
            </div>
          </v-flex>
          <v-flex xs12 md6 offset-md2>
            <project-card v-for="edge in $page.allProject.edges" :key="edge.node._id" :project="edge.node" />            
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer class="secondary" app dark>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="white--text ml-3">
                Made with  <v-icon class="red--text">favorite</v-icon> and <a href="https://gridsome.org/" target="_blank" rel="nofollow noopener noreferrer">Gridsome</a>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-footer>
  </Layout>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';

export default {
  metaInfo: {
    title: "Home",
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/73c8e2621d.css'
      }
    ]
  },
  components: {
    ProjectCard
  }
}
</script>

<style>
</style>

<page-query>
query Project {
  allProject {
    edges {
      node {
        _id,
        title,
        path,
        content,
        fields {
          image,
          date,
          github
        }
      }
    }
  }
}
</page-query>
