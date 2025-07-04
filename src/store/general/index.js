import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import Axios from "axios";
import Api from "../../services/ApiService.js";

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state,
  Axios,
  Api
}
