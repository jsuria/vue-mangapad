import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      layout: 'AppLayoutMain'
    }
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: () => import(/* webpackChunkName: "invoices" */ '../views/InvoiceView.vue'),
    meta:{
      layout: 'AppLayoutMain'
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import(/* webpackChunkName: "checkout" */ '../views/CheckoutView.vue'),
    meta:{
      layout: 'AppLayoutMain'
    }
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import(/* webpackChunkName: "checkout" */ '../views/ContactFormView.vue'),
    meta:{
      layout: 'AppLayoutDefault'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
