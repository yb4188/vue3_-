import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [{
  path: '/',
  component: () => import('@/views/Layout'),
  children: [{
      path: '/',
      component: () => import('@/views/home')
    },
    {
      path: `/category/:id`,
      component: () => import('@/views/category')
    },
    {
      path: '/category/sub/:id',
      component: () => import('@/views/category/sub')
    }
  ]
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(){
    return { top:0, left:0 }
  }
})

export default router
