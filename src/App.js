import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchResources } from "./actions";
import { connect } from "react-redux";

class App extends Component {  

  componentDidMount() {
    this.props.fetchResources();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    resources: state.resourceReducer.resources
  };
};

export default connect(
  mapStateToProps,
  { fetchResources }
)(App);
