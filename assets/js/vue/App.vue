<template src>
  <div id="app" >

    <AppHeader/>

    <router-view></router-view>

    <AppFooter/>

  </div>
</template>



<script>

import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";


export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
  },
  data: () => ({
    //
  }),
  created() {
    let all = document.createElement('script')
    all.setAttribute('src', 'js/all.js')
    document.head.appendChild(all)
  },
};
</script>
