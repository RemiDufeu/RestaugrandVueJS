import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetailsRestaurant from '../views/DetailsRestaurant.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:id',
    name: 'DetailsRestaurant',
    component: DetailsRestaurant
  }
]

const router = new VueRouter({
  routes
})

export default router
