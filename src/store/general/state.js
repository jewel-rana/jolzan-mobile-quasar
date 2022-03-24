export default function () {
  return {
    testDate: {},
    siteData: {
      options: {},
      offers: [],
      partners: [],
      suggestions: []
    },
    loggedIn: false,
    loginModal: false,
    token: localStorage.getItem("token") || "",
    user: {},
    page: {},
    search: {
      trip_from: null,
      trip_to: null,
      trip_date: new Date().toISOString().split('T')[0],
      trip_return_date: "2022/03/23",
      floor: 2,
      type: 'launch',
      launch_name: ""
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
      password: "",
      confirm_password: "",
      otp: "",
      title: "Log in",
      resendTimer: 60
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
      step: 'check',
      coupon: "",
      title: "Check",
      terms_accept: 0
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
      data: [],
      recent: {},
      history: {}
    },
    activities: {
      data: []
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
    payment: {
      type: 'mobilebank',
      account_no: '',
      account_pin: ''
    },
    types: [],
    cart_item: {}
  }
}
