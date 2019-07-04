import React, { Component } from "react";
import SelectSearch from "react-select-search";
import "../css/MaterialConverter.css";


class MaterialConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resource1: "",
      resource1Id: 0
    };
  }

  searchOptions() {
    let resourceTypes = [];
    for (let i = 0; i < this.props.resources.length; i++) {
      let type = this.props.resources[i].type;
      if (resourceTypes.indexOf(type) === -1) {
        resourceTypes.push(type);
      }
    }
    let options = [];
    resourceTypes.forEach(type => {
      let items = [];
      for (let i = 0; i < this.props.resources.length; i++) {
        if (this.props.resources[i].type === type) {
          items.push({
            name: this.props.resources[i].name,
            value: this.props.resources[i].id
          });
        }
      }
      let groups = { type: "group", name: type, items: items };
      options.push(groups);
    });
    return options;
  }

  handleInputChange = e => {
    console.log(e)
    this.setState({ resource1: e.name });
  };

  render() {
    return (
      <div>
        <SelectSearch
          options={this.searchOptions()}
          value={this.state.resource1}
          name="resource1"
          placeholder="Search for Resource"
          // onChange={this.handleInputChange}
        />
        <input></input>
      </div>
    );
  }
}
export default MaterialConverter;
