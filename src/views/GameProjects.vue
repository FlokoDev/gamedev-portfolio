<template>
  <div>
    <h1>Games I worked on</h1>

    <div style="margin-bottom: 30px;">
      The following are some games I've made or heavily contributed to.  Click for more details!
    </div>
    
    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 60px; margin-bottom: 60px;">
      And here is what I'm working on at the moment on my free time!
      <div class="short-video">
        <iframe
          src="https://www.youtube-nocookie.com/embed/yFemzh-j43Y"
          title="UniReverse current game project"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
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
.short-video {
  aspect-ratio: 9 / 16;
  width: 100%;
  max-width: 360px;
  margin: 20px auto;
  overflow: hidden;
}

.short-video iframe {
  width: 100%;
  height: 100%;
}
</style>
