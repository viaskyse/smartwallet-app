import invert from 'lodash/invert'
import Immutable from 'immutable'
import { makeActions } from '../'
import router from '../router'

const PATHNAME_TO_TAB = {
  '/wallet/identity': 'identity',
  // '/wallet/money': 'money'
  '/wallet/interactions': 'interactions'
}
const TAB_TO_PATHNAME = invert(PATHNAME_TO_TAB)

export const actions = makeActions('wallet/tabs', {
  detectActiveTab: {
    expectedParams: ['path'],
    creator: (params) => {
      const cleanPath = params.path.replace(/^(.+)\/+$/, '$1')
      const activeTab = PATHNAME_TO_TAB[cleanPath] || null
      return actions.detectActiveTab.buildAction({path: cleanPath, activeTab})
    }
  },
  switchTab: {
    expectedParams: ['tab'],
    creator: (params) => {
      return (dispatch, getState) => {
        dispatch(router.pushRoute(TAB_TO_PATHNAME[params.tab]))
      }
    }
  },
  getClaims: {
    expectedParams: [],
    creator: (params) => {
      return (dispatch, getState, { backend }) => {
        const fields = ['name', 'phone', 'email']
        let claims = { selfSigned: [], thirdPartySigned: [] }

        fields.forEach((field) => {
        })
        return claims
      }
    }
  }
})

const initialState = Immutable.fromJS({
  activeTab: null
})

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.detectActiveTab.id:
      return state.merge({
        activeTab: action.activeTab
      })
    default:
      return state
  }
}

// const helpers = module.exports.helpers = {}
