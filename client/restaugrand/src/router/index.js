import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ViewMenus from '../views/ViewMenus.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:id',
    name: 'About',
    component: About
  }, {
    path: '/ViewMenus/:id',
    name: 'ViewMenus',
    component: ViewMenus
  }
]

const router = new VueRouter({
  routes
})

export default router
