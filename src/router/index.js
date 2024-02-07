import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
  {
    path: '/',
    component: () => import('../components/Login.vue'), 
    name:'login'
  },
  {
    path: '/body',
    component: Main,
    children: [
      { path: '/customer', component: () => import('../views/Customer.vue') },
      { path: '/customerForm', component: () => import('../components/CustomerForm.vue') },
      { path: '/debt', component: () => import('../views/Debt.vue') },
      { path: '/debtForm', component: () => import('../components/DebtForm.vue') },
      { path: '/credits', component: () => import('../views/Credit.vue') },
      { path: '/creditForm', component: () => import('../components/CreditForm.vue') },
    ],
  },
  {
    path: '/register',
    component: () => import('../components/Register.vue'), 
    name: 'register'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
