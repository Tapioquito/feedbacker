import { createRouter, createWebHistory } from 'vue-router'

const Home =  () => import('@/views/Home/index.vue')
const Feedbacks =  () => import('@/views/Feedbacks/index.vue')
const Credentials =  () => import('@/views/Credentials/index.vue')

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/feedbacks',
      name: 'Feedbacks',
      meta:{hasAuth:true},
      component: (Feedbacks)
    },
    {
      path:'/credentials',
      name: 'Credentials',
      meta:{hasAuth:true},
      component: (Credentials)
    },
    {
      path:'/:pathMatch(.*)*',
      redirect:{name:'Home'}
    }
  ]
})

export default router
