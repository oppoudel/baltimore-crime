import React, { useState } from "react";
import { Link } from "@reach/router";
import { Menu, Icon } from "semantic-ui-react";
import Header from "../Header/Header";
import "./TopMenu.css";

const menus = [
  {
    to: "/map",
    name: "map",
    icon: "map"
  },
  {
    to: "/table",
    name: "table",
    icon: "table"
  },

  {
    to: "/chart",
    name: "chart",
    icon: "bar chart"
  }
];

const TopMenu = ({ data }) => {
  const [activeMenu, setActiveMenu] = useState("/");
  let iconStyle = {
    margin: "0 10px 0 0"
  };
  return (
    <div>
      <Header length={data.length} />
      <Menu pointing secondary className="top-menu">
        <Menu.Menu position="left" className="menu-logo">
          <Menu.Item className="menu-logo" header>
            <Link to="/">BPD - Crimes (2016-2018)</Link>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu className="center menu">
          {menus.map(item => (
            <Menu.Item
              as={Link}
              to={item.to}
              key={item.name}
              active={activeMenu === item.to}
              onClick={() => setActiveMenu(item.to)}
            >
              <Icon size="large" style={iconStyle} name={item.icon} />
              <span>{item.name}</span>
            </Menu.Item>
          ))}
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default TopMenu;