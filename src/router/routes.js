
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
      { path: '/cart', component: () => import('pages/Cart.vue'), name: 'Cart' },
      { path: '/passenger', component: () => import('pages/PassengerInfo.vue'), name: 'Passenger info' },
      { path: '/terms', component: () => import('pages/Terms.vue'), name: 'Accept Terms & Conditions' },
      { path: '/payment', component: () => import('pages/Payment.vue'), name: 'Payment' },
      { path: '/booking-cancel', component: () => import('pages/CancelBooking.vue'), name: 'Booking Cancel'},
      { path: '/about-us', component: () => import('pages/About.vue'), name: 'About us'},
      { path: '/services', component: () => import('pages/Services.vue'), name: 'Our Services'},
      { path: '/privacy-policy', component: () => import('pages/PrivacyPolicy.vue'), name: 'Privacy policy'},
      { path: '/terms-and-conditions', component: () => import('pages/TermsAndConditions.vue'), name: 'Terms & Conditions'},
      { path: '/faq', component: () => import('pages/UnderConstruction.vue'), name: 'FAQ'},
      { path: '/settings', component: () => import('pages/Settings.vue'), name: 'Settings'},
      { path: '/how-to-buy-tickets', component: () => import('pages/HowToBuyTickets.vue'), name: 'How to buy tickets'},
      { path: '/refund-policy', component: () => import('pages/CancelAndRefundPolicy.vue'), name: 'Cancel & Refund Policy'},
      { path: '/profile', component: () => import('pages/Profile.vue'), name: 'My Profile'},
      { path: '/trip-details/:id', component: () => import('pages/TripDetails.vue'), name: 'Booking details'}
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
