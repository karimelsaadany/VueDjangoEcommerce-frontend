
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue'), name: 'home' },
      { path: '/summer', component: () => import('pages/Summer.vue'), name: 'summer' },
      { path: '/winter', component: () => import('pages/Winter.vue'), name: 'winter' },
      { path: '/login', component: () => import('pages/Login.vue'), name: 'login' },
      { path: '/cart', component: () => import('pages/Cart.vue'), name: 'cart' }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
