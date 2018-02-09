import {expect} from 'chai'
import {
  listOfCountries as __LIST_OF_COUNTRIES__
} from '../../../lib/list-of-countries'

import { actions } from './country'
import reducer from './country'
import { initialState } from './country'

describe('# verifier country redux module', () => {
  describe('# Reducer', () => {
    it('should initialise properly', () => {
      const state = reducer(undefined, '@@INIT')
      expect(state.toJS()).to.deep.equal(initialState.toJS())
    })
    it('should set the country type value on setCountryType', () => {
      const action = {
        type: actions.setCountryType.id,
        value: '123'
      }
      const state = reducer(initialState, action)
      expect(state.toJS()).to.deep.equal({
        type: '123',
        value: '',
        options: __LIST_OF_COUNTRIES__
      })
    })
    it('should set the country value  on cancel setCountryType', () => {
      const action = {
        type: actions.setCountryValue.id,
        value: '123'
      }
      const state = reducer(undefined, action)
      expect(state.toJS()).to.deep.equal({
        value: '123',
        type: '',
        options: []
      })
    })
  })
})