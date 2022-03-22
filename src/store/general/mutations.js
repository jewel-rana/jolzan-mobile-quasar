export function SET_NOTICE_COUNTER(state, payload) {
  state.noticeCount = payload
}

export function SET_RESEND_TIMER(state) {
  if (state.loginResponse.resendTimer > 0) {
    state.loginResponse.resendTimer = state.loginResponse.resendTimer - 1
  }
}

export function DOWNLOAD_LINK_SENT(state, payload) {
  state.responseError.success = payload.success
  state.responseError.message = payload.message
}

export function TERMS_ACCEPTED(state) {
  state.order.terms_accept = 1
}

export function GENERATE_TOKEN() {
  let customerToken = localStorage.getItem('site_rand_str')
  if (!customerToken) {
    const customerToken = (Math.random() * 1e32).toString(36);
    localStorage.setItem('site_rand_str', customerToken)
  }
  state.customer_token = customerToken
}

export function INIT(state, payload) {
  if (payload.success) {
    state.siteData = payload.data
    var siteData = localStorage.getItem('jol_site_data')
    if (siteData) {
      localStorage.removeItem('jol_site_data')
    }
    localStorage.setItem('jol_site_data', JSON.stringify(payload))
    const suggests = [];
    for (var i = 0; i < payload.data.suggestions.length; i++) {
      suggests.push(payload.data.suggestions[i].name)
    }
    state.suggestions = suggests
    //set customer token
    let customerToken = localStorage.getItem('site_rand_str')
    if (!customerToken) {
      const customerToken = (Math.random() * 1e32).toString(36);
      localStorage.setItem('site_rand_str', customerToken)
    }
    state.customer_token = customerToken
    state.offers = payload.data.offers
    state.sponsors = payload.data.sponsors
    state.seat_types = payload.data.seat_types
    state.cabin_types = payload.data.cabin_types
    if (state.loggedin) {
      state.order.step = 'confirm'
    } else {
      state.order.step = 'check'
    }
    state.coupon.status = false
    state.coupon.total = 0
  }
}

export function SET_SUGGESTIONS(state, payload) {
  const suggests = [];
  for (var i = 0; i < payload.length; i++) {
    suggests.push(payload[i].name)
  }
  state.suggestions = suggests
}

export function SET_USER_DATA(state, payload) {
  state.loggedin = payload.success
  if (payload.success) {
    state.token = payload.token
    state.user = payload.user
    state.order.step = 'confirm'
    state.order.title = 'Confirm order'
    state.cancellation.step = 'check'
    state.cancellation.title = 'Enter PNR number'
    localStorage.setItem('user', JSON.stringify(payload.user))
    localStorage.setItem('token', JSON.stringify(payload.token))
    localStorage.setItem('loggedin', JSON.stringify(payload.success))
    Axios.defaults.headers.common['Authorization'] = `Bearer ${
      payload.token
    }`
  }
  state.responseError.message = payload.message
}

export function UPDATE_NAME(state, payload) {
  state.user.name = payload.name
  let user = localStorage.getItem('user')
  if (user) {
    localStorage.removeItem('user')
  }
  localStorage.setItem('user', JSON.stringify(state.user))
}

export function UPDATE_EMAIL(state, payload) {
  state.user.email = payload.email
  let user = localStorage.getItem('user')
  if (user) {
    localStorage.removeItem('user')
  }
  localStorage.setItem('user', JSON.stringify(state.user))
}

export function UPDATE_MOBILE(state, payload) {
  state.user.mobile = payload.mobile
  let user = localStorage.getItem('user')
  if (user) {
    localStorage.removeItem('user')
  }
  localStorage.setItem('user', JSON.stringify(state.user))
}

export function UPDATE_PROFILE_PICTURE(state, payload) {
  if (payload.success == true) {
    state.user.photo = payload.avatar
    let user = localStorage.getItem('user')
    if (user) {
      localStorage.removeItem('user')
    }
    localStorage.setItem('user', JSON.stringify(state.user))
  } else {
    state.responseError.message = payload.message
  }
  state.responseError.success = payload.success
}

export function MY_BOOKINGS(state, payload) {
  state.bookings = payload
  state.bookings.recent = payload.data.recent
  state.bookings.history = payload.data.history
}

export function MY_ACTIVITIES(state, payload) {
  state.activities = payload
}

export function MY_NOTIFICATIONS(state, payload) {
  state.notifications = payload
}

export function FILTER_BOOKINGS(state, payload) {
  let recent = state.bookings.recent
  state.bookings = payload
  state.bookings.history = payload.data.history
  state.bookings.recent = recent
}

export function SET_PAGE(state, payload) {
  state.page = payload.data
}

export function MY_CANCELLATIONS(state, payload) {
  state.cancellations = payload
  let cancellations = localStorage.getItem('cancellations')
  if (cancellations) {
    localStorage.removeItem('cancellations')
  }
  localStorage.setItem('cancellations', JSON.stringify(state.cancellations))
}

export function MY_JOURNIES(state, payload) {
  state.journies = payload
  let journies = localStorage.getItem('journies')
  if (journies) {
    localStorage.removeItem('journies')
  }
  localStorage.setItem('journies', JSON.stringify(state.journies))
}

export function SHOW_BOOKING(state, payload) {
  state.booking = payload
}

export function FORGOT_STEP(state) {
  state.order.step = 'forgot'
  state.login.title = 'Forgot password'
}

export function BACK_TO_LOGIN(state) {
  state.login.title = 'Login'
  state.order.step = 'login'
}

export function BACK_TO_CHECK(state) {
  state.order.step = 'check'
}

export function FORGOT_RESPONSE(state, payload) {
  if (payload.success) {
    state.order.step = payload.step
  } else {
    state.responseError.message = payload.message
  }
}

export function RESET_PASSWORD(state, payload) {
  state.responseError.message = payload.message
}

export function LOGIN_PROCEDURE(state, payload) {
  state.loginResponse = payload
  if (payload.success) {
    state.order.step = payload.step
    state.responseError.message = ""
    state.login.title = (payload.step == 'otp') ? "Verify" : 'Login';
    state.order.title = (payload.step == 'otp') ? "Verify" : 'Login';
  } else {
    state.responseError.message = payload.message
  }
}

export function LOGIN_VERIFY(state, payload) {
  if (payload.success) {
    state.order.step = payload.step
    state.loginResponse.otp_verified = true
  } else {
    state.responseError.message = payload.message
  }
}

export function RESET_MESSAGE(state) {
  state.responseError.message = ""
  state.responseError.success = false
}

export function RESEND_RESPONSE(state, payload) {
  state.responseError.message = payload.message
}

export function CLEAR_USER_DATA(state) {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  localStorage.removeItem('loggedin')
  localStorage.removeItem('cart')
  location.reload()
}

export function SEARCH_RESULTS(state, payload) {
  state.searchResults = payload.data
  const search_result = localStorage.getItem('search_results')
  if (search_result) {
    localStorage.removeItem('search_results')
  }
  localStorage.setItem('search_results', JSON.stringify(payload))
  let types = [];
  let results = state.searchResults
  for (let i in results) {
    types.push({
      'trip_id': results[i].trip_id,
      'seat_type': 0,
      'cabin_type': 0
    })
  }
  state.types = types
}

export function CLEAR_SEARCH_DATA(state) {
  state.searchResults = {}
  localStorage.removeItem('search_results')
}

export function SET_TRIP_ITEM(state, payload) {
  state.trip = payload.data

  if (state.cart) {
    let carts = state.cart
    var cartItems = []
    for (let i in carts) {
      if (['cabin', 'seat'].includes(carts[i].cabin_type)) {
        cartItems.push(carts[i])
      }
    }

    //first cabins
    var cabins = state.trip.cabins
    if (cabins) {
      for (var i in cabins) {
        for (var j in cabins[i]) {
          for (var c in cartItems) {
            if (cartItems[c].cabin_id == cabins[i][j].cabin_id && cartItems[c].trip_id == cabins[i][j].trip_id) {
              cabins[i][j].cabin_class = 'cabin-selected'
              cabins[i][j].status = 2
            }
          }
        }
      }
      state.trip.cabins = cabins
    }

    //first cabins
    var seats = state.trip.seats
    if (seats) {
      for (var i in seats) {
        for (var j in seats[i]) {
          if (cartItems[c].cabin_id == cabins[i][j].cabin_id && cartItems[c].trip_id == cabins[i][j].trip_id) {
            seats[i][j].cabin_class = 'cabin-selected'
            seats[i][j].status = 2
          }
        }
      }
      state.trip.seats = seats
    }
  }
}

export function CLEAR_TRIP_DATA(state) {
  state.trip.cabins = null
  state.trip.seats = null
  state.trip.decks = null
}

export function SWITCH_TRIP(state) {
  const tmp = state.search.trip_from;
  state.search.trip_from = state.search.trip_to
  state.search.trip_to = tmp
}

export function TRIP_MODE_SWITCH(state, payload) {
  if (payload.mode == 1) {
    state.search.trip_return_date = ""
  }
}

export function ADD_TO_CART(state, payload) {
  // state.cart_item = payload
  if (payload.success) {
    const itemExist = state.cart.find(i => i.cabin_id === payload.item.cabin_id && i.trip_id === payload.item.trip_id)
    if (!itemExist) {
      state.cart.push(payload.item)
      const cart = localStorage.getItem('cart')
      if (cart) {
        localStorage.removeItem('cart')
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
      if (payload.item.cabin_type == 'cabin') {
        var cabins = state.trip.cabins;
        for (var i in cabins) {
          for (var j in cabins[i]) {
            if (cabins[i][j].cabin_id == payload.item.cabin_id) {
              cabins[i][j].cabin_class = 'cabin-selected'
              cabins[i][j].status = 2
            }
          }
        }
        state.trip.cabins = cabins
      } else if (payload.item.cabin_type == 'seat') {
        var seats = state.trip.seats;
        for (var i in seats) {
          for (var j in seats[i]) {
            if (seats[i][j].cabin_id == payload.item.cabin_id) {
              seats[i][j].cabin_class = 'cabin-selected'
              seats[i][j].status = 2
            }
          }
        }
        state.trip.seats = seats
      }

      state.coupon.status = false
      state.coupon.total = 0
    }
  }
}

export function ADD_DECK_TICKET_TO_CART(state) {
  let deck = state.trip.decks[state.deckCart.departure]
  state.deckCart.deck = deck
  const trip = state.trip
  let ticket = {
    trip_id: trip.id,
    trip_date: trip.schedule_date,
    launch_id: trip.launch_id,
    merchant_id: trip.merchant_id,
    route_id: trip.route_id,
    launch_name: trip.launch_name,
    route_name: trip.launch_route,
    cabin_id: null,
    cabin_no: null,
    cabin_type: 'deck',
    cabin_fare: (parseInt(deck.fare) * parseInt(state.deckCart.passengers)),
    cabin_is_ac: 0,
    cabin_floor: null,
    item_type: null,
    cabin_type_id: 2,
    description: deck.fare + ' X ' + state.deckCart.passengers + ' Person',
    capacity: state.deckCart.passengers,
    status: 2,
    boardingPoint: trip.stoppages[0],
    stoppages: trip.stoppages,
    passenger: {
      type: 'self',
      name: '',
      mobile: '',
      person: state.deckCart.passengers
    },
    vat_amount: state.trip.vat_amount,
    vat_applicable_to: state.trip.vat_applicable_to
  }
  state.deckCart.ticket = ticket
  state.cart.push(ticket)
  const cart = localStorage.getItem('cart')

  if (cart) {
    localStorage.removeItem('cart')
  }
  localStorage.setItem('cart', JSON.stringify(state.cart))
}

export function CHANGE_BOARDING_POINT(state, payload) {
  let cartItem = state.cart[payload.index]
  let item = cartItem.stoppages.find(i => i.id == payload.id)
  cartItem.boardingPoint = item
  let cartItems = state.cart;
  cartItems[payload.index] = cartItem;
  state.cart = cartItems
  const cart = localStorage.getItem('cart')
  if (cart) {
    localStorage.removeItem('cart')
  }
  localStorage.setItem('cart', JSON.stringify(state.cart))
}

export function CHANGE_PASSENGER_TYPE(state, payload) {
  let items = state.cart;
  items[payload.index].passenger.type = payload.value
  state.cart = items
  const cart = localStorage.getItem('cart')
  if (cart) {
    localStorage.removeItem('cart')
  }
  localStorage.setItem('cart', JSON.stringify(state.cart))
}

export function CHANGE_PASSENGER_NAME(state, payload) {
  let items = state.cart;
  items[payload.index].passenger.name = payload.name
  state.cart = items
  const cart = localStorage.getItem('cart')
  if (cart) {
    localStorage.removeItem('cart')
  }
  localStorage.setItem('cart', JSON.stringify(state.cart))
}

export function CHANGE_PASSENGER_MOBILE(state, payload) {
  let items = state.cart;
  items[payload.index].passenger.mobile = payload.name
  state.cart = items
  const cart = localStorage.getItem('cart')
  if (cart) {
    localStorage.removeItem('cart')
  }
  localStorage.setItem('cart', JSON.stringify(state.cart))
}

export function PROCEED_TO_TERMS(state) {
  state.order.step = 'terms'
}

export function REMOVE_CART_ITEM(state, payload) {
  const item = state.cart[payload]
  if (item.cabin_type == 'cabin') {
    var cabins = state.trip.cabins;
    for (var i in cabins) {
      for (var j in cabins[i]) {
        if (cabins[i][j].cabin_id == item.cabin_id && cabins[i][j].trip_id == item.trip_id) {
          cabins[i][j].cabin_class = 'cabin-active'
          cabins[i][j].status = 1
        }
      }
    }
    state.trip.cabins = cabins
  } else if (item.cabin_type == 'seat') {
    var seats = state.trip.seats;
    for (var i in seats) {
      for (var j in seats[i]) {
        if (seats[i][j].cabin_id == item.cabin_id && seats[i][j].trip_id == item.trip_id) {
          seats[i][j].cabin_class = 'cabin-active'
          seats[i][j].status = 1
        }
      }
    }
    state.trip.seats = seats
  }

  state.coupon.status = false
  state.coupon.total = 0

  state.cart.splice(payload, 1)
  const cart = localStorage.getItem('cart')
  if (cart) {
    localStorage.removeItem('cart')
  }
  localStorage.setItem('cart', JSON.stringify(state.cart))
  if (state.loggedin) {
    state.order.step = 'confirm'
  } else {
    state.order.step = 'check'
  }
}

export function CHECKOUT_INITIATE(state) {
  if (state.loggedin) {
    state.order.step = 'confirm'
  } else {
    state.order.step = 'check'
  }
}

export function APPLY_COUPON(state, payload) {
  state.order.step = 'confirm'
  state.order.title = "Confirm order"
  if (payload.success) {
    state.coupon.total = payload.discount
    state.coupon.status = true
    if (parseInt(payload.discount) == 0) {
      state.responseError.message = payload.message
    }
  } else {
    state.responseError.message = payload.message
  }
}

export function SET_PASSENGER(state) {
  state.order.step = 'passenger'
  state.order.title = 'Passenger information'
}

export function ADD_PAYMENT_METHOD(state, payload) {
  state.payment.type = payload
}

export function FILTER_BY_TYPE(state, payload) {
  if (payload.property == 'cabin') {
    var cabins = state.trip.cabins
    for (var i in cabins) {
      for (var j in cabins[i]) {
        if (payload.type == 0) {
          if (cabins[i][j].status == 1) {
            cabins[i][j].cabin_class = 'cabin-active'
          }
        } else {
          if (cabins[i][j].cabin_type_id != payload.type) {
            if (cabins[i][j].status == 1) {
              cabins[i][j].cabin_class = 'cabin-disable'
            }
          } else {
            if (cabins[i][j].status == 1) {
              cabins[i][j].cabin_class = 'cabin-active'
            }
          }
        }
      }
    }
    state.trip.cabins = cabins
  } else if (payload.property == 'seat') {
    var seats = state.trip.seats
    for (var i in seats) {
      for (var j in seats[i]) {
        if (payload.type == 0) {
          if (seats[i][j].status == 1) {
            seats[i][j].cabin_class = 'cabin-active'
          }
        } else {
          if (seats[i][j].cabin_type_id != payload.type) {
            if (seats[i][j].status == 1) {
              seats[i][j].cabin_class = 'cabin-disable'
            }
          } else {
            if (seats[i][j].status == 1) {
              seats[i][j].cabin_class = 'cabin-active'
            }
          }
        }
      }
    }
    state.trip.seats = seats
  }
}

export function LOAD_CART_ITEMS(state, payload) {
  state.cart = payload
}

export function SET_ORDER(state, payload) {
  state.order.id = payload.id
  state.order.transaction_id = payload.transaction_id
  state.order.step = 'payment'
  state.order.title = "Choose payment method"
  let order = localStorage.getItem('order')
  if (order) {
    localStorage.removeItem('order')
  }
  localStorage.setItem('order', JSON.stringify(state.order))
}

export function ORDER_CONFIRMED(state, payload) {
  if (payload.success) {
    state.order.id = payload.order_id
    state.order.transaction_id = payload.trans_id
    // state.order.step = 'payment'
    // state.order.title = "Choose payment method"
    let order = localStorage.getItem('order')
    if (order) {
      localStorage.removeItem('order')
    }
    localStorage.setItem('order', JSON.stringify(state.order))
    state.cart = []
    let cart = localStorage.getItem('cart')
    if (cart) {
      localStorage.removeItem('cart')
    }
  } else {
    state.responseError.message = payload.message
  }
}

export function PAYMENT_SUCCESS(state, payload) {
  if (payload.success) {
    state.payment.status = true
    state.cart = []
    state.order.step = 'success'
    state.order.title = "Confirm order"
    localStorage.removeItem('cart')
  } else {
    state.responseError.message = payload.message
  }
}

export function CLEAR_STEP(state) {
  state.order.step = 'confirm'
}

export function CANCELLATION_DATA(state, payload) {
  state.testDate = payload
  if (payload.success) {
    state.cancellation.bookingObj = payload.item
    state.cancellation.step = 'details'
    state.cancellation.booking_id = payload.item.id
  } else {
    state.responseError.message = payload.message
    state.cancellation.booking_id = 0
  }
}

export function CANCELLATION_DATA_FROM_LIST(state, object) {
  state.cancellation.bookingObj = object
  state.cancellation.step = 'details'
  state.cancellation.booking_id = object.id
}

export function CANCELLATION_NEW(state) {
  state.cancellation.bookingObj = null
  state.cancellation.items = []
  if (state.loggedin) {
    state.cancellation.step = 'check'
    state.cancellation.title = 'Enter PNR number'
  } else {
    state.cancellation.step = 'login'
    state.cancellation.title = 'Login'
  }
  state.cancellation.pnr = ''
}

export function CANCELLATION_ITEMS_INIT(state, payload) {
  state.cancellation.items = []
  state.cancellation.status = 0
  state.cancellation.bookingObj = state.booking
}

export function ADD_CANCEL_ITEMS(state, payload) {
  state.cancellation.items.push(payload)
}

export function REMOVE_CANCEL_ITEMS(state, payload) {
  state.cancellation.items.splice(payload, 1)
}

export function REMOVE_ALL_CANCELLED_ITEMS(state) {
  state.cancellation.items = []
}

export function BOOKING_CANCELLATION_CONFIRMED(state, payload) {
  if (payload.success) {
    state.cancellation.items = []
    state.cancellation.booking_id = 0
    state.cancellation.step = 'check'
    state.cancellation.title = 'Check PNR number'
    state.cancellation.png = ""
    state.cancellation.bookingObj = {}
    state.cancellation.status = 1
  }
  state.responseError.message = payload.message
}

export function REMOVE_NOTIFICATION(state, payload) {
  // let notice = state.notifications.find(item => item.id === payload)
  // let index = state.notifications.indexOf(notice);
  state.notifications.splice(payload.index, 1);
}

export function EXPERT_HELP(state, payload) {
  state.responseError.message = payload.message
  state.responseError.success = payload.success
  if (payload.success == true) {
    state.help.name = ""
    state.help.email = ""
    state.help.subject = ""
    state.help.message = ""
  }
}
