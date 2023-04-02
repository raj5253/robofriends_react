import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    //catchs the error. introduced in React 16
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops. That is not good. Error</h1>;
    }
    return this.props.children; //can be used at the beginig of entry point
  }
}

export default ErrorBoundary;
