import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Client/Index'),
    children:[
      {
      path: '',
      component: () => import('../components/Client/Content/Article'),
      },
      {
        path: '/article/:title',
        component:() => import('../components/Client/Content/ArticleItem')
      },
      {
        path: '/result/:title',
        component:() => import('../components/Client/Content/SearchResult')
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
    ]
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
    path: '/admin',
    name: 'Login',
    component: () => import('../views/Client/Login')
  },
  {
    path: '/admin/index',
    name: 'Admin',
    component: () => import('../views/Admin/Index'),
    children: [
      {
        path: '',
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
