<template>
  <Layout>
    <div class="row">
      <div class="col-s-12 col-m-12 col-xl-3 mt-3">
        <div style="text-align: center">
          <g-image 
            class="rounded-circle avatar"
            src="../../images/avatar.jpg"
          ></g-image>
          <div class="h3 mt-2">Marcel Behrmann</div>
          <div class="subheading">Games & Apps</div>
          <div class="nav-links row justify-content-between">
            <app-link icon href='https://github.com/EldoranDev'>
              <i class="fa fa-github"></i>
            </app-link>
            <app-link icon href='https://www.xing.com/profile/Marcel_Behrmann2'>
              <i class="fa fa-xing"></i>
            </app-link>
            <app-link icon href='https://twitter.com/EldoranDev'>
              <i class="fa fa-twitter"></i>
            </app-link>
          </div>
        </div>
      </div>
      <div class="col-l-6 col-xl-6 mt-3 offset-xl-1">
        <project-card v-for="edge in $page.allProject.edges" :key="edge.node._id" :project="edge.node" />            
      </div>
    </div>
  </Layout>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import AppLink from "@/components/Link.vue";

export default {
  metaInfo: {
    title: "Home",
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/73c8e2621d.css"
      }
    ]
  },
  components: {
    ProjectCard,
    AppLink
  }
};
</script>

<style>
.avatar {
  height: 125px;
  width: 125px;
  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2),
    0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12) !important;
}

.icon {
  font-size: 28px;
  border-radius: 50%;
  color: black;
  position: relative;
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
