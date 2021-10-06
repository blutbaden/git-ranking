import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ParentInfoEnum from "../enum/ParentInfoEnum";

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/organizations',
    name: 'Organizations',
    props: { parentInfo: ParentInfoEnum.ORG },
    component: () => import(/* webpackChunkName: "organizations" */ '../views/Rank.vue')
  },
  {
    path: '/users',
    name: 'User',
    props: { parentInfo: ParentInfoEnum.USER },
    component: () => import(/* webpackChunkName: "organizations" */ '../views/Rank.vue')
  },
  {
    path: '/repositories',
    name: 'Repositories',
    props: { parentInfo: ParentInfoEnum.REPO },
    component: () => import(/* webpackChunkName: "organizations" */ '../views/Rank.vue')
  },
  {
    path: '/:name',
    name: 'Search Organization Or User',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
  {
    path: '/:owner/:name',
    name: 'Search Repository',
    props: { parentInfo: ParentInfoEnum.REPO },
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
