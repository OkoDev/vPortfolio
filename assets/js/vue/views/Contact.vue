<template>
  <section class="contact-section px-3 py-5 p-md-5">
    <div class="container">
      <form id="contact-form" class="contact-form col-lg-8 mx-lg-auto" method="post" action="#">
        <h3 class="text-center mb-3">Get In Touch</h3>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label class="sr-only" for="cname">Name</label>
            <input type="text" class="form-control" id="cname" name="name" placeholder="Name" minlength="2" required="" aria-required="true">
          </div>
          <div class="form-group col-md-6">
            <label class="sr-only" for="cemail">Email</label>
            <input type="email" class="form-control" id="cemail" name="email" placeholder="Email" required="" aria-required="true">
          </div>
          <div class="form-group col-12">
            <select id="services" class="custom-select" name="services">
              <option selected>Select a service package you're interested in...</option>
              <option value="basic">Basic</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
              <option value="not sure">Not sure</option>
            </select>
            <small class="form-text text-muted pt-1"><i class="fas fa-info-circle mr-2 text-primary"></i>Want to know what's included in each package? Check the <a href="services.html" target="_blank">Services &amp; Pricing</a> page.</small>
          </div>
          <div class="form-group col-12">
            <label class="sr-only" for="cmessage">Your message</label>
            <textarea class="form-control" id="cmessage" name="message" placeholder="Enter your message" rows="10" required="" aria-required="true"></textarea>
          </div>
          <div class="form-group col-12">
            <button type="submit" class="btn btn-block btn-primary py-2">Send Now</button>
          </div>
        </div><!--//form-row-->
      </form>
    </div><!--//container-->
  </section>
</template>

<script>
export default {
name: "Contact"
}
</script>

<style scoped>

</style>