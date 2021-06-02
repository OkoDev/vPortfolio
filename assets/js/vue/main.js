import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
// import jQuery from "jquery";
// window.$ = window.jQuery = window.jquery = jQuery;

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')