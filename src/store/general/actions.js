export function sendDownloadLink({commit}, payload) {
  return Api.DownloadLink(payload)
    .then(response => {
      commit('DOWNLOAD_LINK_SENT', response.data)
    })
    .catch(error => {})
}
export function expartHelp({commit}, payload) {
  return Api.expertHelp(payload)
    .then(response => {
      commit('EXPERT_HELP', response.data)
    })
    .catch(error => {})
}
export function leavingSoon({commit}) {
  let date = new Date()
  let month = date.getMonth() + 1;
  let trip_date = date.getFullYear() + '-' + month + '-' + date.getDate()
  return Api.search({trip_date: trip_date, sort:nearest})
    .then(response => {
      commit('SEARCH_RESULTS', payload)
    })
    .catch(error => {})
}
export function deleteNotification({commit}, payload) {
  return Api.deleteNotification(payload)
    .then(response => {
      commit('REMOVE_NOTIFICATION', payload)
    })
    .catch(error => {})
}
export function myModule() {
  return true
}
export function initSite({commit}) {
  return Api.init()
    .then(response => {
      commit('INIT', response.data)
      // commit('SET_SUGGESTIONS', response.data)
    })
    .catch(error => {})
}
export function setSiteData({commit}, payload) {
  commit('INIT', payload)
}
export function getPage({commit}, payload) {
  return Api.getPage(payload)
    .then(response => {
      if(response.data.success === true ) {
        commit("SET_PAGE", response.data)
      }
    })
    .catch(error => {})
}
export function login({commit}, credentials) {
  commit('RESET_MESSAGE')
  return Api.Login(credentials)
    .then(response => {
        commit('SET_USER_DATA', response.data)
      }
    )
    .catch(error => {})
}
export function Forgot({commit}, payload) {
  commit('RESET_MESSAGE')
  return Api.Forgot(payload)
    .then(response => {
      commit('FORGOT_RESPONSE', response.data)
    })
    .catch(error => {})
}
export function ResendOtpCode({commit}, payload) {
  commit('RESET_MESSAGE')
  return Api.ResendCode(payload)
    .then(response => {
      commit('RESEND_RESPONSE', response.data)
    })
    .catch(error => {})
}
export function ResetPassword({commit}, payload) {
  commit('RESET_MESSAGE')
  return Api.Reset(payload)
    .then(response => {
      if( response.data.success === true ) {
        commit('SET_USER_DATA', response.data)
      } else {
        commit('RESET_PASSWORD', response.data)
      }
    })
    .catch(error => {})
}
export function loginCheck({commit}, credentials) {
  commit('RESET_MESSAGE')
  return Api.Check(credentials)
    .then(response => {
        commit('LOGIN_PROCEDURE', response.data)
      }
    )
    .catch(error => {})
}
export function Verify({commit}, payload) {
  commit('RESET_MESSAGE')
  return Api.Verify(payload)
    .then(response => {
        commit('LOGIN_VERIFY', response.data)
      }
    )
    .catch(error => {})
}
export function Register({commit}, payload) {
  commit('RESET_MESSAGE')
  return Api.Register(payload)
    .then(response => {
        commit('SET_USER_DATA', response.data)
      }
    )
    .catch(error => {})
}
export function logout({commit}) {
  commit("CLEAR_USER_DATA")
}
export function checkPNR({commit}, payload) {
  commit('RESET_MESSAGE')
  return Api.CheckPNR(payload)
    .then(response => {
      commit('CANCELLATION_DATA', response.data)
    })
    .catch(error => {})
}
export function searchTrip({commit}, payload) {
  commit("CLEAR_SEARCH_DATA")
  return Api.search(payload)
    .then(response => {
      commit("SEARCH_RESULTS", response.data)
    })
    .catch(error => {})
}
export function viewTrip({commit}, payload) {
  commit("CLEAR_TRIP_DATA")
  return Api.view(payload)
    .then(response => {
      commit("SET_TRIP_ITEM", response.data)
    })
    .catch(error => {})
}
export function tripSwitch({commit}) {
  commit("SWITCH_TRIP")
}
export function addCart({commit}, payload) {
  return Api.addCart(payload)
    .then( response => {
      commit("ADD_TO_CART", response.data)
    })
}
export function AddDeckTicketToCart({commit}) {
  commit("ADD_DECK_TICKET_TO_CART")
}
export function changeBoardingPoint({commit}, payload) {
  commit("CHANGE_BOARDING_POINT", payload)
}
export function changePassengerName({commit}, payload) {
  commit("CHANGE_PASSENGER_NAME", payload)
}
export function changePassengerMobile({commit}, payload) {
  commit("CHANGE_PASSENGER_MOBILE", payload)
}
export function removeItemFromCart({commit}, payload) {
  if( payload.item.cabin_type != 'deck' ) {
    return Api.removCart(payload)
      .then(response => {
        if( response.data.success ) {
          commit("REMOVE_CART_ITEM", response.data.index)
        }
      })
  } else {
    commit("REMOVE_CART_ITEM", payload.index)
  }
}
export function FilterByType({commit}, payload) {
  commit('FILTER_BY_TYPE', payload)
}
export function applyCoupon({commit}, payload) {
  return Api.validateCoupon(payload)
    .then( response => {
      commit("APPLY_COUPON", response.data)
    })
}
export function ContinueToPassenger({commit}, payload) {
  commit("SET_PASSENGER")
}
export function changePaymentMethod({commit}, payload) {
  commit("ADD_PAYMENT_METHOD", payload)
}
export function orderConfirm({commit}, payload, user) {
  return Api.confirmOrder(payload)
    .then( response => {
      commit("ORDER_CONFIRMED", response.data)
    })
    .catch(error => {})
}
export function ConfirmCancellation({commit}, payload) {
  return Api.cancelBooking(payload)
    .then(response => {
      commit('BOOKING_CANCELLATION_CONFIRMED', response.data)
    })
    .catch(error => {})
}
export function paymentProcess({commit}, payload) {
  return Api.makePayment({
    order_id: payload.order.id,
    customer_id: payload.user.id,
    payment_method: payload.payment.type,
    account_no: payload.payment.account_no,
    account_pin: payload.payment.pin
  })
    .then( response => {
      commit("PAYMENT_SUCCESS", response.data)
    })
    .catch(error => {})
}
export function clearStep({commit}) {
  commit('CLEAR_STEP')
}
export function searchSuggest({commit}, field) {
  return Api.suggestion({form: this.state.form, field: field})
    .then(response => {
      commit("SET_SUGGESTIONS", response.data)
    })
    .catch(error => {})
}
export function resetMessage({commit}) {
  commit('RESET_MESSAGE')
}
export function myBookings({commit}, payload) {
  return Api.getMyBookings(payload)
    .then( response => {
      if( response.data.success ) {
        commit('MY_BOOKINGS', response.data.bookings)
      }
    })
    .catch(error => {})
}
export function filterBookings({commit}, payload) {
  return Api.getMyBookings(payload)
    .then( response => {
      if( response.data.success ) {
        commit('FILTER_BOOKINGS', response.data.bookings)
      }
    })
    .catch(error => {})
}
export function myActivities({commit}, payload) {
  return Api.getMyActivities(payload)
    .then( response => {
      if( response.data.success ) {
        commit('MY_ACTIVITIES', response.data.activities)
      }
    })
    .catch(error => {})
}
export function getNotifications({commit}, payload) {
  return Api.getMyNotifications(payload)
    .then( response => {
      if( response.data.success ) {
        commit('MY_NOTIFICATIONS', response.data.notifications)
      }
    })
    .catch(error => {})
}
export function myCancellations({commit}, payload) {
  return Api.getMyCancellations(payload)
    .then( response => {
      if( response.data.success ) {
        commit('MY_CANCELLATIONS', response.data.cancellations)
      }
    })
    .catch(error => {})
}
export function filterCancellations({commit}, payload) {
  return Api.getMyCancellations(payload)
    .then( response => {
      if( response.data.success ) {
        commit('MY_CANCELLATIONS', response.data.cancellations)
      }
    })
    .catch(error => {})
}
export function myJournies({commit}) {
  return Api.getMyBookings()
    .then( response => {
      if( response.data.success ) {
        commit('MY_BOOKINGS', response.data.data)
      }
    })
    .catch(error => {})
}
export function myJourney({commit}) {
  return Api.getMyBookings()
    .then( response => {
      if( response.data.success ) {
        commit('MY_BOOKINGS', response.data.data)
      }
    })
    .catch(error => {})
}
export function bookingDetails({commit}, payload) {
  return Api.getMyBooking(payload)
    .then( response => {
      if( response.data.success ) {
        commit('SHOW_BOOKING', response.data.booking)
      }
    })
    .catch(error => {})
}
export function myJourny({commit}, payload) {
  return Api.getMyJourney(payload)
    .then( response => {
      if( response.data.success ) {
        commit('SHOW_JOURNEY', response.data.booking)
      }
    })
    .catch(error => {})
}
export function updateProfile({commit}, payload) {
  return Api.updateProfile(payload)
    .then( response => {
      if( response.data.success ) {
        commit('UPDATE_NAME', response.data)
      }
    })
    .catch(error => {})
}
export function uploadProfilePicture({commit}, payload) {
  return Api.uploadProfile(payload)
    .then(response => {
      commit('UPDATE_PROFILE_PICTURE', response.data)
    })
    .catch(error => {})
}
export function changeEmail({commit}, payload) {
  return Api.changeEmail(payload)
    .then( response => {
      if( response.data.success ) {
        commit('UPDATE_EMAIL', response.data)
      }
    })
    .catch(error => {})
}
export function changeMobile({commit}, payload) {
  return Api.changeMobile(payload)
    .then( response => {
      if( response.data.success ) {
        commit('UPDATE_MOBILE', response.data)
      }
    })
    .catch(error => {})
}
