import Vue from 'vue'
import Router from 'vue-router'

import Portfolio from './views/Portfolio.vue'
import Main from './views/Main.vue'
import Services from './views/Services.vue'
import Resume from './views/Resume.vue'
import Contact from './views/Contact.vue'
import Blog from "./views/Blog.vue"
// import Profile from "./views/Profile.vue"
// import SignIn from "./views/SignIn.vue"
// import SignUp from "./views/SignUp.vue"
// import Store from "./store"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    // {
    //   path: '/item/:id',
    //   name: 'item',
    //   props: true,
    //   component: Item
    // },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    // {
    //   path: '/signin',
    //   name: 'signin',
    //   component: SignIn
    // },
    // {
    //   path: '/signup',
    //   name: 'signup',
    //   component: SignUp
    // },
  ],
  mode:'history'
})

// function AuthGuard(from,to,next) {
//   if (Store.getters.isUserAuthenticated)
//     next()
//   else
//     next('/signin')
// }