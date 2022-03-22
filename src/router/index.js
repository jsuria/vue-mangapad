import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: () => import(/* webpackChunkName: "invoices" */ '../views/InvoiceView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import(/* webpackChunkName: "checkout" */ '../views/CheckoutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
