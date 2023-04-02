import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./Robots";
import SearchBox from "./SearchBox"; //first write this line, then create that file
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
    console.log(1);
  }

  componentDidMount() {
    this.setState({ robots: robots });
    console.log(2);
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });

    // const filteredRobots = this.state.robots.filter((robots) => {
    //   return robots.name
    //     .toLowerCase()
    //     .includes(this.state.searchfield.toLowerCase());
    // });

    console.log(event.target.value); //event is an obect, e.target.value is text-typed-in.
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    console.log(3);

    return (
      <div className="tc">
        <h1 className="f2">Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {/* <CardList robots={this.state.robots} /> */}
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
// this should be called after super() . else only this in constructor gives error.

// to update vlaue of state :: this.setState({attr :  })
// to access state value  :: this.state.attr

//  () , componentWillMount() ,  render () , componentDidMount()  are the methods created on each instance of component created
