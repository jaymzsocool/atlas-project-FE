import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchResources, fetchMarkups } from "./actions";
import { connect } from "react-redux";
import MaterialConverter from "./components/MaterialConverter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    this.props.fetchResources();
    this.props.fetchMarkups();
    this.setState({ loading: false });
    // async function fetch() {
    //   await 
    //   await 
      
    // }
    // fetch();
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
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
        </header> */}
        {this.props.resources.length === 0 ?<div>Loading</div>:<MaterialConverter {...this.props} />}
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    resources: state.resourceReducer.resources,
    markups: state.markupReducer.markups
  };
};

export default connect(
  mapStateToProps,
  { fetchResources, fetchMarkups }
)(App);
