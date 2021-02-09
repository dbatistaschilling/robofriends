import React, { useEffect } from "react";
import { connect } from 'react-redux';
import "./App.css";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";
import Header from '../Components/Header';

import { setSearchField, requestRobots } from '../actions';

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

function App(props) {

  const { searchField, onSearchChange, onRequestRobots, robots, isPending } = props;

  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots])


  const filteredRobots = robots.filter((robot) => {
    return robot.name
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  return isPending ?
    <h1 className="tc f1">Loading...</h1>
  :
    (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
