
const routes = [
  {
    path: '/',
    component: () => import('layouts/layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), name: 'Home' },
      { path: '/booking', component: () => import('pages/Booking.vue'), name: 'Booking' },
      { path: '/trips', component: () => import('pages/Trips.vue'), name: 'My Trips' },
      { path: '/support', component: () => import('pages/Support.vue'), name: 'Support' },
      { path: '/more', component: () => import('pages/More.vue'), name: 'More' },
      { path: '/booking/:id', component: () => import('pages/View.vue'), name: 'View trip' },
      { path: '/cart', component: () => import('pages/Order.vue'), name: 'Cart' },
      { path: '/passenger', component: () => import('pages/PassengerInfo.vue'), name: 'Passenger info' },
      { path: '/terms', component: () => import('pages/Terms.vue'), name: 'Accept Terms & Conditions' },
      { path: '/payment', component: () => import('pages/Payment.vue'), name: 'Payment' },
      { path: '/booking-cancel', component: () => import('pages/CancelBooking.vue'), name: 'Booking Cancel'}
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
