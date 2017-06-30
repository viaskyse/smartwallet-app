import Immutable from 'immutable'
import { makeActions } from '../'
import * as router from '../router'

const actions = module.exports = makeActions('wallet/identity', {
  goToContactManagement: {
    expectedParams: [],
    creator: () => {
      return (dispatch) => {
        dispatch(router.pushRoute('/wallet/identity/contact'))
      }
    }
  },
  goToPassportManagement: {
    expectedParams: [],
    creator: () => {
      return (dispatch) => {
        dispatch(router.pushRoute('/wallet/identity/passport/add'))
      }
    }
  },
  goToDrivingLicenceManagement: {
    expectedParams: [],
    creator: () => {
      return (dispatch) => {
        dispatch(router.pushRoute('/wallet/identity/drivers-licence/add'))
      }
    }
  },
  goToIdentity: {
    expectedParams: [],
    creator: () => {
      return (dispatch) => {
        dispatch(router.pushRoute('/wallet/identity/'))
      }
    }
  },
  getIdentityInformation: {
    expectedParams: [],
    async: true,
    creator: (params) => {
      return (dispatch, getState, {services, backend}) => {
        dispatch(actions.getIdentityInformation.buildAction(params, () => {
          // eslint-disable-next-line max-len
          return backend.solid.getUserInformation(localStorage.getItem('jolocom.webId'))
        }))
      }
    }
  }
})

const mapBackendToState = ({webId, username, contact, passports, idCards}) =>
  Immutable.fromJS({
    loaded: true,
    error: false,
    webId,
    username,
    contact: {
      emails: contact.email,
      phones: contact.phone
    },
    passports: passports,
    idCards: idCards
  })
const mapBackendToStateError =
({webId, username, contact, passports, idCards}) =>
  Immutable.fromJS({
    loaded: true,
    error: true,
    webId,
    username,
    contact: {
      emails: contact.email,
      phones: contact.phone
    },
    passports: passports,
    idCards: idCards
  })
const initialState = Immutable.fromJS({
  loaded: false,
  error: false,
  webId: '',
  username: {
    verified: false,
    value: ''
  },
  contact: {
    phones: [{
      type: '',
      number: '',
      verified: false
    }],
    emails: [{
      type: '',
      address: '',
      verified: false
    }]
  },
  passports: [
    {
      number: '',
      givenName: '',
      familyName: '',
      birthDate: '',
      gender: '',
      showAddress: '',
      streetAndNumber: '',
      city: '',
      zip: '',
      state: '',
      country: '',
      verified: false
    }
  ]
})

module.exports.default = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.getIdentityInformation.id_success:
      return mapBackendToState(action.result)
    case actions.getIdentityInformation.id_fail:
      return mapBackendToStateError(state)
    default:
      return state
  }
}