export default [
  { path: '/', redirect: '/login' },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Auth/Login.vue'),
    meta: { hideNav: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Auth/Register.vue'),
    meta: { hideNav: true }
  },

  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Dashboard/Home.vue'),
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import('@/views/Dashboard/Wallet.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Dashboard/Profile.vue'),
  },

  {
    path: '/people',
    name: 'People',
    component: () => import('@/views/Dashboard/People.vue'),
    meta: { hideNav: true },
  },
  {
    path: '/cash',
    name: 'Cash',
    component: () => import('@/views/Dashboard/Cash.vue'),
    meta: { hideNav: true },
  },

  { path: '/:pathMatch(.*)*', redirect: '/login' },
]
