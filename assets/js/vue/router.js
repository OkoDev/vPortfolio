import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Items from './views/Items.vue'
import Item from './views/Item.vue'
import Words from './views/Words.vue'
import LogOut from "./views/LogOut.vue"
import Profile from "./views/Profile.vue"
import SignIn from "./views/SignIn.vue"
import SignUp from "./views/SignUp.vue"
import Store from "./store"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/items',
      name: 'items',
      component: Items
    },
    {
      path: '/item/:id',
      name: 'item',
      props: true,
      component: Item
    },
    {
      path: '/words',
      name: 'words',
      component: Words
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogOut
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter:AuthGuard
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
  ],
  mode:'history'
})

function AuthGuard(from,to,next) {
  if (Store.getters.isUserAuthenticated)
    next()
  else
    next('/signin')
}