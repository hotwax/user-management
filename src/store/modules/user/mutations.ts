import { MutationTree } from 'vuex'
import UserState from './UserState'
import * as types from './mutation-types'

const mutations: MutationTree <UserState> = {
  [types.USER_TOKEN_CHANGED] (state, payload) {
    state.token = payload.newToken
  },
  [types.USER_END_SESSION] (state) {
    state.token = ''
    state.current = null
    state.currentFacility = {}
  },
  [types.USER_INFO_UPDATED] (state, payload) {
    state.current = payload
  },
  [types.USER_CURRENT_FACILITY_UPDATED] (state, payload) {
    state.currentFacility = payload;
  },
  [types.USER_INSTANCE_URL_UPDATED] (state, payload) {
    state.instanceUrl = payload;
  },
  [types.USER_LIST_UPDATED] (state, payload) {
    state.list.users = payload.users
  },
  [types.USER_SECURITY_GROUPS_LIST_UPDATED] (state, payload) {
    state.list.securityGroupOptions = payload.securityGroupOptions
  },
  [types.USER_QUERY_UPDATED] (state, payload) {
    state.query = payload.query
  },
}
export default mutations;