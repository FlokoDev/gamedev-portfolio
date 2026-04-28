<template>
  <div>
    <h1>Games I worked on</h1>

    <div style="margin-bottom: 30px;">
      The following are some games I've made or heavily contributed to.  Click for more details!
    </div>
    
    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 60px; margin-bottom: 60px;">
      And here is what I'm working on at the moment on my free time!
      <div class="project-item">
        <iframe class="youtube" src="https://www.youtube-nocookie.com/embed/F9jw_zCf2sk?si=32eNQRyf5VDaWqXV&amp;start=12" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>

<style scoped>
.project-item {
  height: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

iframe.youtube {
        width: 100%;
        min-height: 500px;
    }
</style>
