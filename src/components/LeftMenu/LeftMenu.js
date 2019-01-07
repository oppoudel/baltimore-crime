import React, { Component } from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import "./LeftMenu.css";

const options = [
  { text: "Shooting", value: "SHOOTING", key: 0 },
  { text: "Homicide", value: "HOMICIDE", key: 1 },
  { text: "Arson", value: "ARSON", key: 2 },
  { text: "Rape", value: "RAPE", key: 3 },
  { text: "Agg. Assault", value: "AGG. ASSAULT", key: 4 }
];

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: "map",
      selected: []
    };
  }
  handleSelectedChanged = (e, { value }) => {
    this.setState({ selected: value });
  };

  render() {
    const { days, handleItemClick } = this.props;
    const { selected } = this.state;
    return (
      <div>
        <div className="left-menus">
          <Dropdown
            placeholder="Select Crime Type"
            fluid
            selection
            multiple
            options={options}
            value={selected}
            onChange={this.handleSelectedChanged}
          />
          <Menu vertical>
            <Menu.Item />
            <Menu.Item active={days === 3} onClick={() => handleItemClick(3)}>
              Last 3 Days
            </Menu.Item>

            <Menu.Item active={days === 7} onClick={() => handleItemClick(7)}>
              Last 7 Days
            </Menu.Item>
            <Menu.Item active={days === 15} onClick={() => handleItemClick(15)}>
              Last 15 Days
            </Menu.Item>
            <Menu.Item active={days === 30} onClick={() => handleItemClick(30)}>
              Last 30 Days
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}

export default LeftMenu;
