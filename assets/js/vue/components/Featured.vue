<template>
  <section class="featured-section p-3 p-lg-5">
    <div class="container">
      <h2 class="section-title font-weight-bold mb-5">Featured Projects</h2>
      <div class="row">
        <div class="col-md-6 mb-5">
          <div class="card project-card">
            <div class="row no-gutters">
              <div class="col-lg-4 card-img-holder">
                <img src="img/project/project-1.jpg" class="card-img" alt="image">
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <h5 class="card-title"><a href="_project.html" class="theme-link">Project Heading</a></h5>
                  <p class="card-text">Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                  <p class="card-text"><small class="text-muted">Client: Google</small></p>
                </div>
              </div>
            </div>
            <div class="link-mask">
              <a class="link-mask-link" href="_project.html"></a>
              <div class="link-mask-text">
                <a class="btn btn-secondary" href="_project.html">
                  <i class="fas fa-eye mr-2"></i>View Case Study
                </a>
              </div>
            </div><!--//link-mask-->
          </div><!--//card-->
        </div><!--//col-->
        <div class="col-md-6 mb-5">
          <div class="card project-card">
            <div class="row no-gutters">
              <div class="col-lg-4 card-img-holder">
                <img src="img/project/project-2.jpg" class="card-img" alt="image">
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <h5 class="card-title"><a href="_project.html" class="theme-link">Project Heading</a></h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                  <p class="card-text"><small class="text-muted">Client: Dropbox</small></p>
                </div>
              </div>
            </div>
            <div class="link-mask">
              <a class="link-mask-link" href="_project.html"></a>
              <div class="link-mask-text">
                <a class="btn btn-secondary" href="_project.html">
                  <i class="fas fa-eye mr-2"></i>View Case Study
                </a>
              </div>
            </div><!--//link-mask-->
          </div><!--//card-->
        </div><!--//col-->
        <div class="col-md-6 mb-5">
          <div class="card project-card">
            <div class="row no-gutters">
              <div class="col-lg-4 card-img-holder">
                <img src="img/project/project-3.jpg" class="card-img" alt="image">
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <h5 class="card-title"><a href="_project.html" class="theme-link">Project Heading</a></h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                  <p class="card-text"><small class="text-muted">Client: Google</small></p>
                </div>
              </div>
            </div>
            <div class="link-mask">
              <a class="link-mask-link" href="_project.html"></a>
              <div class="link-mask-text">
                <a class="btn btn-secondary" href="_project.html">
                  <i class="fas fa-eye mr-2"></i>View Case Study
                </a>
              </div>
            </div><!--//link-mask-->
          </div><!--//card-->
        </div><!--//col-->
        <div class="col-md-6 mb-5">
          <div class="card project-card">
            <div class="row no-gutters">
              <div class="col-lg-4 card-img-holder">
                <img src="img/project/project-4.jpg" class="card-img" alt="image">
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                  <h5 class="card-title"><a href="_project.html" class="theme-link">Project Heading</a></h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                  <p class="card-text"><small class="text-muted">Client: Uber</small></p>
                </div>
              </div>
            </div>
            <div class="link-mask">
              <a class="link-mask-link" href="_project.html"></a>
              <div class="link-mask-text">
                <a class="btn btn-secondary" href="_project.html">
                  <i class="fas fa-eye mr-2"></i>View Case Study
                </a>
              </div>
            </div><!--//link-mask-->
          </div><!--//card-->
        </div><!--//col-->
      </div><!--//row-->

      <div class="text-center py-3">
        <router-link to="/portfolio">
          <a href="/portfolio" class="btn btn-primary"><i class="fas fa-arrow-alt-circle-right mr-2"></i>
            View Portfolio</a>
        </router-link>

      </div>

    </div><!--//container-->
  </section><!--//featured-section-->
</template>

<script>
export default {
name: "Featured"
}
</script>

<style scoped>

</style>