import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ParentInfoEnum from '../enum/ParentInfoEnum.js'

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
    path: '/organizations',
    name: 'Organizations',
    props: { parentInfo: ParentInfoEnum.ORG },
    component: () => import('../views/Rank.vue')
  },
  {
    path: '/users',
    name: 'User',
    props: { parentInfo: ParentInfoEnum.USER },
    component: () => import('../views/Rank.vue')
  },
  {
    path: '/repositories',
    name: 'Repositories',
    props: { parentInfo: ParentInfoEnum.REPO },
    component: () => import('../views/Rank.vue')
  },
  {
    path: '/:name',
    name: 'Search Organization Or User',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/:owner/:name',
    name: 'Search Repository',
    props: { parentInfo: ParentInfoEnum.REPO },
    component: () => import('../views/Search.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
