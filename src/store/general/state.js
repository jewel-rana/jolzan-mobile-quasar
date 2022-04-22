export default function () {
  return {
    cartContent: false,
    settings: {
      darkMode: 'Disabled',
      pushNotification: 'Enabled',
      accountActive: 'Enabled',
      language: 'Disabled'
    },
    alert: {
      status: false,
      message: "",
      success: false
    },
    testDate: {},
    siteData: {
      options: {},
      offers: [],
      partners: [],
      suggestions: []
    },
    loggedIn: false,
    notLoggedIn: false,
    token: localStorage.getItem("token") || "",
    user: {},
    pages: {},
    search: {
      trip_from: null,
      trip_to: null,
      trip_date: new Date().toISOString().split('T')[0],
      trip_return_date: "2022/03/23",
      floor: {label: '2nd Floor', value: 2},
      type: 'launch',
      launch_name: "",
      cabin_type: { label: 'All', value: 0},
      seat_type: { label: 'All', value: 0}
    },
    help: {
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: ""
    },
    login: {
      name: "",
      email: "",
      mobile: "",
      nid: "",
      password: "",
      confirm_password: "",
      otp: "",
      title: "Check",
      resendTimer: 60,
      step: 'check',
      type: 'login'
    },
    cancellation: {
      title: 'Enter PNR number',
      step: "check",
      pnr: "",
      booking_id: 0,
      bookingObj: {
        items: []
      },
      items: [],
      status: 0
    },
    loginResponse: {
      otp_verified: false,
      step: 'check',
      resendTimer: 60
    },
    responseError: {
      message: '',
      success: false
    },
    order: {
      id: "",
      transaction_id: "",
      coupon: "",
      title: "Cart",
      terms_accept: true
    },
    coupon: {
      code: "",
      status: false,
      total: 0.00
    },
    passenger: {
      name: "",
      email: "",
      mobile: "",
      total: 1
    },
    deckCart: {
      departure: "",
      passengers: 1,
      ticket: null,
      deck: null
    },
    suggestions: [],
    searchResults: {},
    bookings: {
      current_page: 1,
      last_page: 1,
      data: []
    },
    activities: {
      data: []
    },
    myTrips: {
      data: {}
    },
    notifications: {},
    noticeCount: 0,
    booking: {},
    cancellations: {},
    journies: {},
    journey: {},
    offers: {},
    sponsors: {},
    seat_types: {},
    cabin_types: {},
    availableRoutes: {},
    trip: {},
    cart: [],
    customer_token: "",
    payment: {
      type: 'mobilebank',
      account_no: '',
      account_pin: ''
    },
    types: [],
    cart_item: {}
  }
}
