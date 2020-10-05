import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: () => import('@/components/Home'),
  name: 'home'
},
{
  path: '/shoplist',
  component: () => import('@/components/shoplist'),
  name: 'shoplist'
},
{
  path: '/viewproduct',
  component: () => import('@/components/viewproduct'),
  name: 'viewproduct'
},
{
  path: '/productlist',
  component: () => import('@/components/productlist'),
  name: 'productlist'
},
{
  path: '/reportA',
  name: 'ReportA',
  component: () => import('@/components/reportA.vue')
},
{
  path: '/shopping',
  component: () => import('@/components/shopping'),
  name: 'shopping'
},
{
  path: '/product_list',
  name: 'product_list',
  component: () => import('@/components/product_list')
},
{
  path: '/fcshop',
  name: 'fcshop',
  component: () => import('@/components/fcshop')
},
{
  path: '/slider',
  name: 'slider',
  component:  () => import('@/components/slider')
},
{
  path: '/boys_dress',
  name: 'boys_dress',
  component:  () => import('@/components/boys_dress')
},
{
  path: '/modal',
  name: 'modal',
  component:  () => import('@/components/modal')
},
{
  path: "/boys_nightdress",
  name: "boys_nightdress",
  component: () => import("@/components/boys_nightdress")
},
{
  path: "/boys_winter",
  name: "boys_winter",
  component: () => import("@/components/boys_winter")
}
]

const router = new VueRouter({
  el: '#app',
  mode: 'history',
  saveScrollPosition: false,
  routes
})

export default router
