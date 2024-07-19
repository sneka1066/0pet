import React from "react";
import { Icon } from "@iconify/react";
import "../css/sidebar.css";

const SideBar = () => {
  return (
    <div className="w-100 menu">
      <div className="menu--list w-100 align-content-baseline justify-content-center">
        <a href="" className="item w-100" style={{ fontSize: 18 }}>
          <Icon icon="mingcute:home-3-fill" fontSize={20} />
          Dashboard
        </a>
        <a href="" className="item w-100" style={{ fontSize: 18 }}>
          <Icon icon="bxs:user" fontSize={20} />
          Manage Users
        </a>
        <a href="" className="item w-100" style={{ fontSize: 18 }}>
          <Icon icon="material-symbols:water-damage-rounded" fontSize={20} />
          Manage Stations
        </a>
      </div>
    </div>
  );
};

export default SideBar;
