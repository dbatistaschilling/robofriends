import React, { Component } from "react";
import "./App.css";
import CardList from "../../Components/CardList";
import SearchBox from "../../Components/SearchBox";
import Scroll from "../../Components/Scroll";
import ErrorBoundry from "../../Components/ErrorBoundry";
import Header from '../../Components/Header';

export class AppRedux extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
  }

  render() {
    const { onSearchChange, isPending } = this.props;

    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading...</h1> :
            <ErrorBoundry>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

export default AppRedux;
