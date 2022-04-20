export default {
  token(state) {
    return state.token || ''
  },
  getSubTotal(state, getters)
  {
    let total = 0.00;
    for (let i = 0; i < state.cart.length; i++) {
      total += state.cart[i].fare
    }

    console.log(total)
    return total
  },
  getVatTotal(state, getters)
  {
    let vatOption = state.siteData.options['vat_amount'] | 0
    let vat = 0
    for (let i = 0; i < state.cart.length; i++) {
      if (state.cart[i].vat_applicable_to === 'customer') {
        vat += (state.cart[i].fare * (vatOption / 100))
      }
    }
    console.log(vat)
    return vat
  },
  getServiceCharge(state, getters) {
    console.log(state.cart)
    let chargeOption = state.siteData.options['service_charge_mobile'] || 0
    let charge = 0
    for (let i = 0; i < state.cart.length; i++) {
      charge += (state.cart[i].fare * (chargeOption / 100))
    }
    console.log(charge)
    return charge
  },
  getTotal(state, getters)
  {
    return ((getters.getSubTotal + getters.getVatTotal + getters.getServiceCharge) - state.coupon.total).toFixed(2)
  },
  getSelectedResultByID(state, id) {
    return state.searchResults.find(result => result.id === id)
  },
  isLoggedIn(state) {
    return state.loggedin
  },
  getUser(state) {
    return state.user
  },
  getOptionByKey(state, key, default_val) {
    let options = state.siteData.options
    return options[key] || default_val;
  },
  partners(state) {
    return state.siteData.partners
  },
  isCabinTypeChecked(state, payload) {
    let types = state.types.find(item => item.trip_id === payload.trip_id)
    return types.cabin_type
  },
  isSeatTypeChecked(state, type, trip_id) {
    let trip = state.types.find(item => item.trip_id === trip_id)
    if (type === trip.seat_type) {
      return true
    } else {
      return false
    }
  }
}
