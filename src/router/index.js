import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('@/views/Gallery')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('@/views/Shop')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/painting/:id',
    name: 'Painting',
    props: true,
    component: () => import('@/views/Painting.vue')
  },
  {
    path: '/thankYou/:id',
    name: 'ThankYou',
    props: true,
    component: () => import('@/views/ThankYou')
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
