import * as types from './mutations-types'
import axios from 'axios'

export const loadDashboardData = ({ commit }) => {
  commit(types.SET_LOADING_STATE, true)
  axios.get("https://coinranking1.p.rapidapi.com/coins", {                                             
    method: "GET",                                                                                
    headers: {                                                                                    
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",                                           
      "x-rapidapi-key": "bc3fffb2b0mshf547687387b27ccp1b6abejsna5827de3dd1f"                      
    }                                                                                             
  }).then(response => {
    const data = response.data.data.coins
    commit(types.SET_DASHBOARD_DATA, data)
    commit(types.SET_LOADING_STATE, false)
  })
}