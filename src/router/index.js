import Vue from "vue";
import VueRouter from "_vue-router@3.5.1@vue-router";

const Home = ()=> import('../views/home/Home.vue')
const Category = () => import('../views/category/Catgory.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import ('../views/profile/Profile.vue')
const Detail = () => import ('../views/detail/Detail.vue')


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
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
