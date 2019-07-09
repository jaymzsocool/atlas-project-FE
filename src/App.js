import React, { Component } from "react";
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

  }

  render() {
    return (
      <div className="App">
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
