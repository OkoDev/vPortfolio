<template>
  <!--TODO:new fetch -->
  <section class="github-contribution p-3 p-lg-5">
    <div class="container">
      <h2 class="section-title font-weight-bold mb-5">GitHub Contributions</h2>

      <div id="github-widget"
           data-user="OkoDev"
           data-display="pop_repos,calendar">
      </div>

      <div class="text-center mt-5 py-3">
        <a href="https://github.com/OkoDev" class="btn btn-primary">
          <i class="fas fa-arrow-alt-circle-right mr-2"></i>
          View GitHub
        </a>
      </div>
    </div>
  </section>
  <!-- //github-contribution -->


</template>
<script>

export default {
name: "GitHubContrib",
  // mounted() {
  //   const r = new XMLHttpRequest();
  //   const widget = document.getElementById('github-widget');
  //   let username, pathname = location.pathname.split('/');
  //   if (widget.dataset.user)
  //     username = widget.dataset.user;
  //   r.overrideMimeType("application/json");
  //   r.open("GET", "https://gist.github.com.ru/jcouyang/aec5210828043d5505bd?username=" + username);
  //   r.onreadystatechange = function () {
  //     if (r.readyState != 4 || r.status != 200) return;
  //     const response = JSON.parse(r.response.replace(/href=\\"\//g, 'href=\\"https://github.com/'));
  //     if (response.error) {
  //       widget.innerHTML = 'Oooooops, please make sure your name in "data-user" is a real person on github';
  //       return;
  //     }
  //     const result = response.result;
  //     const display = widget.dataset.display.split(',').forEach(function (d) {
  //       widget.innerHTML += result[d];
  //
  //       console.log(result);
  //     })
  //
  //   };
  //   r.send();
  // },
}

</script>

<style scoped>

</style>