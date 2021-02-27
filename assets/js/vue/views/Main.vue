<template>
    <div class="main-wrapper">
      <AboutMe/>

      <Overview/>

      <div class="container"><hr></div>

<!--      <Testimonials/>-->

<!--      <div class="container"><hr></div>-->

      <Featured/>

      <div class="container"><hr></div>

<!--      <LatestBlog/>-->

      <GitHubContrib/>

  </div><!--//main-wrapper-->


</template>

<script>

import GitHubContrib from "../components/GitHubContrib.vue";
import AboutMe from "../components/AboutMe.vue";
import Overview from "../components/Overview.vue";
import Testimonials from "../components/Testimonials.vue";
import Featured from "../components/Featured.vue";
import LatestBlog from "../components/LatestBlog.vue";


export default {
  name: "Main",
  components: {
    LatestBlog,
    Featured,
    Testimonials,
    Overview,
    AboutMe,
    GitHubContrib,
  },
  data: () => ({}),
};
</script>

<style scoped>

</style>