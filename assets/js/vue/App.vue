<template>

  <v-app>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" >

    <AppHeader/>
    <v-content>
      <router-view/>

    </v-content>
<!--<Socials/>-->
    <AppFooter/>
  </v-app>
</template>

<script>

import AppHeader from './components/AppHeader';
import AppFooter from "./components/AppFooter";
// import Socials from "./components/Socials";


export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
    // Socials,
  },
  data: () => ({
    //
  }),
};
</script>
