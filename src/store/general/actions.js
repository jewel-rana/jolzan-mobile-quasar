import Api from '../../services/ApiService.js'

export default {
  initAuthorization({commit}, token) {
    Api.initAuthorization(token)
  },
  sendDownloadLink({commit}, payload) {
    return Api.DownloadLink(payload)
      .then(response => {
        commit('DOWNLOAD_LINK_SENT', response.data)
      })
      .catch(error => {
      })
  },
  expartHelp({commit}, payload) {
    return Api.expertHelp(payload)
      .then(response => {
        commit('EXPERT_HELP', response.data)
      })
      .catch(error => {
      })
  },
  leavingSoon({commit}) {
    let date = new Date()
    let month = date.getMonth() + 1;
    let trip_date = date.getFullYear() + '-' + month + '-' + date.getDate()
    return Api.search({trip_date: trip_date, sort: nearest})
      .then(response => {
        commit('SEARCH_RESULTS', payload)
      })
      .catch(error => {
      })
  },
  deleteNotification({commit}, payload) {
    return Api.deleteNotification(payload)
      .then(response => {
        commit('REMOVE_NOTIFICATION', payload)
      })
      .catch(error => {
      })
  },
  myModule() {
    return true
  },
  initSite({commit}) {
    return Api.init()
      .then(response => {
        commit('INIT', response.data)
        // commit('SET_SUGGESTIONS', response.data)
      })
      .catch(error => {
      })
  },
  setSiteData({commit}, payload) {
    commit('INIT', payload)
  },
  getPage({state, commit}, payload) {
    commit('CLEAR_PAGE')
    return Api.getPage(payload)
      .then(response => {
        if (response.data.success === true) {
          commit("SET_PAGE", response.data)
        }
      })
      .catch(error => {
      })
  },
  login({state, commit}) {
    commit('RESET_MESSAGE')
    return Api.Login(state.login)
      .then(response => {
          commit('SET_USER_DATA', response.data)
          Api.initAuthorization(response.data.token)
        }
      )
      .catch(error => {
      })
  },
  Forgot({state, commit}) {
    commit('RESET_MESSAGE')
    return Api.Forgot(state.login)
      .then(response => {
        commit('FORGOT_RESPONSE', response.data)
      })
      .catch(error => {
      })
  },
  ResendOtpCode({state, commit}) {
    commit('RESET_MESSAGE')
    return Api.ResendCode(state.login)
      .then(response => {
        commit('RESEND_RESPONSE', response.data)
      })
      .catch(error => {
      })
  },
  ResetPassword({state, commit}) {
    commit('RESET_MESSAGE')
    return Api.Reset(state.login)
      .then(response => {
        if (response.data.success === true) {
          console.log(response.data)
          Api.initAuthorization(response.data.token)
          commit('SET_USER_DATA', response.data)
        } else {
          commit('RESET_PASSWORD', response.data)
        }
      })
      .catch(error => {
      })
  },
  loginCheck({state, commit}, credentials) {
    commit('RESET_MESSAGE')
    return Api.Check(state.login)
      .then(response => {
          commit('LOGIN_PROCEDURE', response.data)
        }
      )
      .catch(error => {
      })
  },
  Verify({state, commit}) {
    commit('RESET_MESSAGE')
    return Api.Verify(state.login)
      .then(response => {
          commit('LOGIN_VERIFY', response.data)
        }
      )
      .catch(error => {
      })
  },
  Register({state, commit}) {
    commit('RESET_MESSAGE')
    return Api.Register(state.login)
      .then(response => {
          commit('SET_USER_DATA', response.data)
          Api.initAuthorization(response.data.token)
        }
      )
      .catch(error => {
      })
  },
  logout({commit}) {
    commit("CLEAR_USER_DATA")
  },
  checkPNR({commit}, payload) {
    commit('RESET_MESSAGE')
    return Api.CheckPNR(payload)
      .then(response => {
        commit('CANCELLATION_DATA', response.data)
      })
      .catch(error => {
      })
  },
  searchTrip({state, commit}) {
    console.log(state)
    commit("CLEAR_SEARCH_DATA")
    let tripFrom = state.search.trip_from ? state.search.trip_from.value : ''
    let tripTo = state.search.trip_to ? state.search.trip_to.value : ''
    return Api.search({trip_from: tripFrom, trip_to: tripTo, trip_date: state.search.trip_date})
      .then(response => {
        console.log(response.data)
        commit("SEARCH_RESULTS", response.data)
      })
      .catch(error => {
      })
  },
  viewTrip({commit}, payload) {
    return Api.view(payload)
      .then(response => {
        commit("SET_TRIP_ITEM", response.data)
      })
      .catch(error => {
      })
  },
  tripSwitch({commit}) {
    commit("SWITCH_TRIP")
  },
  addCart({commit}, payload) {
    return Api.addCart(payload)
      .then(response => {
        commit("ADD_TO_CART", response.data)
      })
  },
  AddDeckTicketToCart({commit}) {
    commit("ADD_DECK_TICKET_TO_CART")
  },
  changeBoardingPoint({commit}, payload) {
    commit("CHANGE_BOARDING_POINT", payload)
  },
  changePassengerName({commit}, payload) {
    commit("CHANGE_PASSENGER_NAME", payload)
  },
  changePassengerMobile({commit}, payload) {
    commit("CHANGE_PASSENGER_MOBILE", payload)
  },
  removeItemFromCart({commit}, payload) {
    if (payload.item.type != 'deck') {
      return Api.removCart(payload)
        .then(response => {
          if (response.data.success) {
            commit("REMOVE_CART_ITEM", response.data.index)
          }
        })
    } else {
      commit("REMOVE_CART_ITEM", payload.index)
    }
  },
  FilterByType({commit}, payload) {
    commit('FILTER_BY_TYPE', payload)
  },
  applyCoupon({commit}, payload) {
    return Api.validateCoupon(payload)
      .then(response => {
        commit("APPLY_COUPON", response.data)
      })
  },
  ContinueToPassenger({commit}, payload) {
    commit("SET_PASSENGER")
  },
  changePaymentMethod({commit}, payload) {
    commit("ADD_PAYMENT_METHOD", payload)
  },
  orderConfirm({state, commit}) {
    return Api.confirmOrder({items: JSON.stringify(state.cart), coupon: state.coupon}, state.user)
      .then(response => {
        commit("ORDER_CONFIRMED", response.data)
      })
      .catch(error => {
      })
  },
  ConfirmCancellation({commit}, payload) {
    return Api.cancelBooking(payload)
      .then(response => {
        commit('BOOKING_CANCELLATION_CONFIRMED', response.data)
      })
      .catch(error => {
      })
  },
  paymentProcess({commit}, payload) {
    return Api.makePayment({
      order_id: payload.order.id,
      customer_id: payload.user.id,
      payment_method: payload.payment.type,
      account_no: payload.payment.account_no,
      account_pin: payload.payment.pin
    })
      .then(response => {
        commit("PAYMENT_SUCCESS", response.data)
      })
      .catch(error => {
      })
  },
  clearStep({commit}) {
    commit('CLEAR_STEP')
  },
  searchSuggest({commit}, field) {
    return Api.suggestion({form: this.state.form, field: field})
      .then(response => {
        commit("SET_SUGGESTIONS", response.data)
      })
      .catch(error => {
      })
  },
  resetMessage({commit}) {
    commit('RESET_MESSAGE')
  },
  myBookings({commit}, payload) {
    return Api.getMyBookings(payload)
      .then(response => {
        if (response.data.success) {
          commit('MY_BOOKINGS', response.data.bookings)
        }
      })
      .catch(error => {
      })
  },
  filterBookings({commit}, payload) {
    return Api.getMyBookings(payload)
      .then(response => {
        if (response.data.success) {
          commit('FILTER_BOOKINGS', response.data.bookings)
        }
      })
      .catch(error => {
      })
  },
  myActivities({commit}, payload) {
    return Api.getMyActivities(payload)
      .then(response => {
        if (response.data.success) {
          commit('MY_ACTIVITIES', response.data.activities)
        }
      })
      .catch(error => {
      })
  },
  getNotifications({commit}, payload) {
    return Api.getMyNotifications(payload)
      .then(response => {
        if (response.data.success) {
          commit('MY_NOTIFICATIONS', response.data.notifications)
        }
      })
      .catch(error => {
      })
  },
  myCancellations({commit}, payload) {
    return Api.getMyCancellations(payload)
      .then(response => {
        if (response.data.success) {
          commit('MY_CANCELLATIONS', response.data.cancellations)
        }
      })
      .catch(error => {
      })
  },
  filterCancellations({commit}, payload) {
    return Api.getMyCancellations(payload)
      .then(response => {
        if (response.data.success) {
          commit('MY_CANCELLATIONS', response.data.cancellations)
        }
      })
      .catch(error => {
      })
  },
  myJournies({commit}) {
    return Api.getMyBookings()
      .then(response => {
        if (response.data.success) {
          commit('MY_BOOKINGS', response.data.data)
        }
      })
      .catch(error => {
      })
  },
  myJourney({commit}) {
    return Api.getMyBookings()
      .then(response => {
        console.log(response)
        if (response.data.success) {
          commit('MY_BOOKINGS', response.data)
        }
      })
      .catch(error => {
      })
  },
  bookingDetails({commit}, payload) {
    return Api.getMyBooking(payload)
      .then(response => {
        if (response.data.success) {
          commit('SHOW_BOOKING', response.data.booking)
        }
      })
      .catch(error => {
      })
  },
  updateProfile({commit}, payload) {
    return Api.updateProfile(payload)
      .then(response => {
        if (response.data.success) {
          commit('UPDATE_NAME', response.data)
        }
      })
      .catch(error => {
      })
  },
  uploadProfilePicture({commit}, payload) {
    return Api.uploadProfile(payload)
      .then(response => {
        commit('UPDATE_PROFILE_PICTURE', response.data)
      })
      .catch(error => {
      })
  },
  changeEmail({commit}, payload) {
    return Api.changeEmail(payload)
      .then(response => {
        if (response.data.success) {
          commit('UPDATE_EMAIL', response.data)
        }
      })
      .catch(error => {
      })
  },
  changeMobile({commit}, payload) {
    return Api.changeMobile(payload)
      .then(response => {
        if (response.data.success) {
          commit('UPDATE_MOBILE', response.data)
        }
      })
      .catch(error => {
      })
  }
}
