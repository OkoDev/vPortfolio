<template>
  <section class="about-me-section p-3 p-lg-5 theme-bg-light">
    <div class="container">
      <div class="profile-teaser media flex-column flex-lg-row">

        <div class="media-body">
          <h2 class="name font-weight-bold mb-1">Egor Seleznev</h2>
          <div class="tagline mb-3">Junior Web Developer</div>
          <div class="bio mb-4">
            I am a web developer specializing in simple scalable web apps.
            <br>Want to know how I may help your project?
            <br>Check out my project portfolio and online resume.

          </div><!--//bio-->
          <div class="mb-4">

            <router-link to="/portfolio">
              <a class="btn btn-primary mr-2 mb-3" href="/portfolio">
                <i class="fas fa-arrow-alt-circle-right mr-2"></i>
                <span class="d-none d-md-inline">View</span> Portfolio</a>
            </router-link>

            <router-link to="/resume">
              <a class="btn btn-secondary mb-3" href="/resume">
                <i class="fas fa-file-alt mr-2"></i>
                <span class="d-none d-md-inline">View</span> Resume</a>
            </router-link>

          </div>
        </div><!--//media-body-->
        <img class="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0 " src="img/profile-lg1.webp" alt="">
      </div>
    </div>
  </section><!--//about-me-section-->
</template>

<script>
export default {
name: "AboutMe"
}
</script>

<style lang="css">
.about-me-section{
  height: 100vh;
}

</style>