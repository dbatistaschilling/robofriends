import React from "react";
import { connect } from 'react-redux';
import AppRedux from './AppRedux';

import { setSearchField, requestRobots } from './App.actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

function AppReduxConnect(props) {
  return <AppRedux { ...props } />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(AppReduxConnect);
