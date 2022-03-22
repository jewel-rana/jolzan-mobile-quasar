import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
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
