import * as types from './mutations-types'

export default {
  [types.SET_LOADING_STATE] (state, value) {
    state.loading = value
  },
  [types.SET_DASHBOARD_DATA] (state, data) {
    // Metrics
    state.coins = data
  }
}
