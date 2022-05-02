import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Desktop/Home.vue'
import MobileHome from '../views/Mobile/MobileHome.vue'

Vue.use(VueRouter)
let { clientWidth, clientHeight } = document.documentElement;
let routes = [];

const mobileRoutes = [
  {
    path: '/',
    name: 'Home',
    component: MobileHome
  },
]
const desktopRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

if(clientWidth > 600 ) routes = desktopRoutes
else routes = mobileRoutes

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
