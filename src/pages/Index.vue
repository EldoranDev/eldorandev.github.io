<template>
  <Layout>
        <div class="row wrap align-start">
          <div id="info" class="col s12 m12 l2 offset-l2">
            <div class="center-align">
                <g-image 
                  class="circle z-depth-2 m-1 avatar"
                  src="../../images/avatar.jpg"
                ></g-image>
              <div class="headline">Marcel Behrmann</div>
              <div class="subheading">Games & Apps</div>
              <div class="nav-links">
                <a href='https://www.marcelbehrmann.de/' class="icon">
                  <div class="content">
                    <i class="fa fa-home"></i>
                  </div>
                </a>
                <a href='https://github.com/EldoranDev' class="icon">
                  <i class="fa fa-github"></i>
                </a>
                <a href='https://www.xing.com/profile/Marcel_Behrmann2' class="icon">
                  <i class="fa fa-xing"></i>
                </a>
                <a href='https://twitter.com/EldoranDev' class="icon">
                  <i class="fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col offset-l1 l6 offset-xl1 xl4">
          <!-- <div class="col s12 m6 xl4 offset-m2"> -->
            <project-card v-for="edge in $page.allProject.edges" :key="edge.node._id" :project="edge.node" />            
          </div>
        </div>
<!--
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
    -->
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
.headline {
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
  letter-spacing: normal;
}

.subheading {
  font-size: 16px;
  font-weight: 400;

  color: #9e9e9e;
}

.nav-links {
  justify-content: space-between;
  display: flex;
}

.avatar {
  height: 125px;
  width: 125px;
}
.icon {
  color: rgba(0, 0, 0, .87) !important;
  justify-content: center;
  display: inline-flex;
  align-items: center;
  width: 36px;
  height: 36px;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 500;
  flex: 0 0 auto;
  margin: 6px 8px;
  position: relative;
  text-decoration: none;
  font-size: 28px;
}


.icon div.content i {
  
  font-feature-settings: "liga";
  line-height: 1;
}

</style>

<page-query>
query Project {
  allProject (order: DESC) {
    edges {
      node {
        _id,
        title,
        path,
        content,
        fields {
          image,
          date,
          github,
          link,
        }
      }
    }
  }
}
</page-query>
