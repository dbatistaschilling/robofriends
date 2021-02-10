import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from '../App.constants';

import * as actions from '../App.actions';

// implement this in a different file so it's available to all tests
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
const mockStore = configureMockStore([thunkMiddleware])

describe('setSearchField', () => {
  it('should create an action to search robots', () => {
    const text = 'wooo'
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  })
})

describe('requestRobots', () => {
  it('handles a pending requesting to the robots API', () => {
    const store = mockStore()
    store.dispatch(actions.requestRobots())
    const action = store.getActions() 
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    }
    expect(action[0]).toEqual(expectedAction)
  })
})