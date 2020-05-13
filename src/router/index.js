import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/regist',
    name: 'Regist',
    component: () => import('../views/Regist.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/networktest',
    name: 'NetworkTest',
    component: () => import('../views/NetworkTest.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 挂在路由导航守卫
router.beforeEach((to, from, next) => {
//  to 将要访问的路径   from 从哪个路径跳转而来  next() 直接放行  next('/xxx') 放行且跳转
  if((to.path === '/login') ||(to.path ===  '/regist')) return next();
  const token = window.sessionStorage.getItem('token');
  if(!token) next('/login');
  next();
})
export default router
