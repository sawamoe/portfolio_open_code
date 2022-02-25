import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('../views/Me.vue')
  },
  {
    path: '/think',
    name: 'Think',
    component: () => import('../views/Think.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Skills.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/donburi',
    name: 'Donburi',
    component: () => import('../views/Donburi.vue')
  },
  {
    path: '/kanbanken',
    name: 'Kanbanken',
    component: () => import('../views/Kanbanken.vue')
  },
  {
    path: '/timedifference',
    name: 'TimeDifference',
    component: () => import('../views/TimeDifference.vue')
  },
  {
    path: '/twitterInfo',
    name: 'twitterInfo',
    component: () => import('../views/twitterInfo.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(savedPosition)
        },500)
      })
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
