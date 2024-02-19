import { GetterTree } from 'vuex'
import PermissionState from './PermissionState'
import RootState from '@/store/RootState'

const getters: GetterTree<PermissionState, RootState> = {
  getPermissionsByGroupType(state) {
    return state.permissionsByGroupType
  },
  getQuery(state) {
    return state.query
  },
  getCurrentGroup(state) {
    return state.currentGroup
  },
  getCurrentGroupPermissions(state) {
    return state.permissionsByGroup[state.currentGroup.groupId] ? JSON.parse(JSON.stringify(state.permissionsByGroup[state.currentGroup.groupId])) : []
  },
  getPermissionsByGroup(state) {
    return state.permissionsByGroup
  },
  getAllPermissions(state) {
    return state.allPermissions
  }
}
export default getters;