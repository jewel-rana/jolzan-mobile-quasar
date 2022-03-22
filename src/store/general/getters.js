export function getSelectedResultByID(state, id){
  return state.searchResults.find( result => result.id === id )
}
export function isLoggedIn(state) {
  return state.loggedin
}
export function getUser(state) {
  return state.user
}
export function getOptionByKey(state, key){
  let options = state.siteData.options
  return options[key];
}
export function partners(state) {
  return state.siteData.partners
}
export function isCabinTypeChecked(state, payload) {
  let types = state.types.find( item => item.trip_id === payload.trip_id)
  return types.cabin_type
}
export function isSeatTypeChecked(state, type, trip_id) {
  let trip = state.types.find( item => item.trip_id === trip_id)
  if(type === trip.seat_type ) {
    return true
  } else{
    return false
  }
}
