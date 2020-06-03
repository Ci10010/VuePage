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
    component: () => import('../views/Client/Index'),
    meta:{keepAlive: true},
    redirect: '/index',
    children:[
      {
      path: '/index',
      component: () => import('../components/Client/Content/Article'),
      meta:{keepAlive: true},
      },
      {
      path: '/statistic',
      component: () => import('../views/Client/Statistic')
      },
      {
        path: '/category',
        component: () => import('../views/Client/Category')
      },
      {
        path: '/gallery',
        component: () => import('../views/Client/Gallery')
      },
      {
        path: '/bookmark',
        component: () => import('../views/Client/Bookmark')
      },
      {
      path: '/message',
      component: () => import('../views/Client/Message')
      },
      {
      path: '/profile',
      component: () => import('../views/Client/Profile')
      },
      // {
      //   path: '/article',
      //   component: () => import('../components/sub'),
      //   children: [
      //     {
      //       path: '/article/:title',
      //       component: () => import('../views/Client/ArticleItem')
      //     }
      //   ]
      // }
      // {
      // path: '/article/:title',
      // component: () => import('../views/Client/ArticleItem')
      // }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Client/Login')
  },
  {
    path: '/regist',
    name: 'Regist',
    component: () => import('../views/Client/Regist')
  },
  {
    path: '/networktest',
    name: 'NetworkTest',
    component: () => import('../views/Client/NetworkTest')
  },
  //  Admin
  {
    path: '/admin/index',
    name: 'Admin',
    component: () => import('../views/Admin/Index'),
    redirect: '/admin/statistic',
    children: [
      {
        path: '/admin/statistic',
        name: 'Statistic',
        component: () => import('../views/Admin/Statistic')
      },
      {
        path: '/admin/post',
        name: 'Post',
        component: () => import('../views/Admin/Post'),
        meta:{
          keepAlive: true
        }
      },
      {
        path: '/admin/articles',
        name: 'ArticlesAdmin',
        component: () => import('../views/Admin/ArticlesAdmin'),
        meta:{
          keepAlive: true
        }
      }
    ]
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
