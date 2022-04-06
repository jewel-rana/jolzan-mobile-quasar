export default {
  token(state) {
    return state.token || ''
  },
  getSubTotal(state)
  {
    return 500
  },
  getVatTotal(state)
  {
    return 0
  },
  getServiceCharge(state) {
    return 50
  },
  getTotal(state)
  {
    return 550
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
