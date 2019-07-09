import React, { Component } from "react";
import Select from "react-select";
import "../css/MaterialConverter.css";

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
  </div>
);

class MaterialConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  createOptions = () => {
    const resources = this.props.resources;
    let fiberOptions = [];
    let thatchOptions = [];
    let woodOptions = [];
    let sugarOptions = [];
    let coalOptions = [];
    let flintOptions = [];
    let stoneOptions = [];
    let metalOptions = [];
    let alloysOptions = [];
    let crystalOptions = [];
    let gemOptions = [];
    let saltOptions = [];
    let hideOptions = [];
    let ketOptions = [];
    let coralOptions = [];
    let pasteOptions = [];
    let oilOptions = [];
    let mythosOptions = [];
    let craftableOptions = [];

    for (let i = 0; i < resources.length; i++) {
      if (resources[i].resource_type_id === 1) {
        fiberOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 2) {
        thatchOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 3) {
        woodOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 4) {
        sugarOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 5) {
        coalOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 6) {
        flintOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 7) {
        stoneOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 8) {
        metalOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 9) {
        alloysOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 10) {
        crystalOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 11) {
        gemOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 12) {
        saltOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 13) {
        hideOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 14) {
        ketOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 15) {
        coralOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 16) {
        pasteOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 17) {
        oilOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 18) {
        mythosOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      } else if (resources[i].resource_type_id === 19) {
        craftableOptions.push({
          value: resources[i].name,
          label: resources[i].name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" "),
          goldValue: resources[i].gold_value,
          resourceId: resources[i].id
        });
      }
    }
    const groupedOptions = [
      { label: "Fibers", options: fiberOptions },
      { label: "Thatch", options: thatchOptions },
      { label: "Wood", options: woodOptions },
      { label: "Sugars", options: sugarOptions },
      { label: "Coal", options: coalOptions },
      { label: "Flint", options: flintOptions },
      { label: "Stone", options: stoneOptions },
      { label: "Metals", options: metalOptions },
      { label: "Alloys", options: alloysOptions },
      { label: "Crystal", options: crystalOptions },
      { label: "Gems", options: gemOptions },
      { label: "Salt", options: saltOptions },
      { label: "Hide", options: hideOptions },
      { label: "Karatanoid", options: ketOptions },
      { label: "Coral", options: coralOptions },
      { label: "Paste", options: pasteOptions },
      { label: "Oil", options: oilOptions },
      { label: "Mythos", options: mythosOptions },
      { label: "Craftables", options: craftableOptions }
    ];
    return groupedOptions;
  };

  handleInputChange = option => {
    this.setState({ [`resource${this.state.count}`]: option });
  };

  render() {
    return (
      <Select
        options={this.createOptions()}
        formatGroupLabel={formatGroupLabel}
        onChange={this.handleInputChange}
      />
    );
  }
}
export default MaterialConverter;
