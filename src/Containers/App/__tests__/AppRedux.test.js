import React from 'react';
import { shallow } from 'enzyme';
import AppRedux from '../AppRedux';

let wrappedAppRedux;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: true
  }
  wrappedAppRedux = shallow(< AppRedux {...mockProps} />)
})

describe('AppRedux Tests', () => {
	it('Renders the App Redux page with no robots without crashing', () => {
    expect(wrappedAppRedux).toMatchSnapshot();
	})

	it('Filters robots correctly', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'john',
        email: 'john@gmail.com'
      }],
      searchField: 'john',
      isPending: false
    }
    const wrappedAppRedux2 = shallow(< AppRedux {...mockProps2} />)
    expect(wrappedAppRedux2).toMatchSnapshot();

		expect(wrappedAppRedux.instance().filterRobots()).toEqual([]);
		expect(wrappedAppRedux2.instance().filterRobots()).toEqual([{
      id: 3,
      name: 'john',
      email: 'john@gmail.com'
    }]);
  })
})