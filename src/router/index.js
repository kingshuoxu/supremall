import Vue from "vue";
import VueRouter from "_vue-router@3.5.1@vue-router";

const Home = ()=> import('../views/home/Home.vue')
const Category = () => import('../views/category/Catgory.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import ('../views/profile/Profile.vue')
// const Home = () => import ()


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
