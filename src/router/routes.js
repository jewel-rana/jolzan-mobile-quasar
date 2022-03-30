
const routes = [
  {
    path: '/',
    component: () => import('layouts/layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/booking', component: () => import('pages/Booking.vue') },
      { path: '/trips', component: () => import('pages/Trips.vue') },
      { path: '/support', component: () => import('pages/Support.vue') },
      { path: '/more', component: () => import('pages/More.vue') },
      { path: '/booking/:id', component: () => import('pages/View.vue') },
      { path: '/order', component: () => import('pages/Order.vue') },
      { path: '/passenger', component: () => import('pages/PassengerInfo.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
