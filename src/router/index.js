import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Index',
  //   component: () => import('../views/Index'),
  //   redirect: '/index',
  // },
  {
    path: '/',
    component: () => import('../views/Index'),
    redirect: '/index',
    children:[
      {
      path: '/index',
      component: () => import('../components/Content/Article')
      },
      {
      path: '/statistic',
      component: () => import('../components/Content/Statistic')
      },
      {
        path: '/category',
        component: () => import('../components/Content/Category')
      },
      {
        path: '/gallery',
        component: () => import('../components/Content/Gallery')
      },
      {
        path: '/share',
        component: () => import('../components/Content/Share')
      },
      {
      path: '/message',
      component: () => import('../components/Content/Message')
      },
      {
      path: '/profile',
      component: () => import('../components/Content/Profile')
      },
      {
      path: '/label',
      component: () => import('../components/Content/Label')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/regist',
    name: 'Regist',
    component: () => import('../views/Regist')
  },
  {
    path: '/networktest',
    name: 'NetworkTest',
    component: () => import('../views/NetworkTest')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'RouterActive',
  routes
})
// 挂在路由导航守卫
// router.beforeEach((to, from, next) => {
//  to 将要访问的路径   from 从哪个路径跳转而来  next() 直接放行  next('/xxx') 放行且跳转
//   if((to.path === '/login') || (to.path ===  '/regist')) return next();
//   const token = window.sessionStorage.getItem('token');
//   if(!token) next('/login');
//   next();
// })
export default router
