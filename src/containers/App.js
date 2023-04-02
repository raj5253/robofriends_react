import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from "../Robots";
import SearchBox from "../components/SearchBox"; //first write this line, then create that file
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundayr";

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
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });

    // this.setState({ robots: robots });  //instead of this we use fethc api
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

    if (!robots.length) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2">Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          {/* <CardList robots={this.state.robots} /> */}
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
// this should be called after super() . else only this in constructor gives error.

// to update vlaue of state :: this.setState({attr :  })
// to access state value  :: this.state.attr

//  () , componentWillMount() ,  render () , componentDidMount()  are the methods created on each instance of component created
