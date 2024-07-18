import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Icon } from "@iconify/react";
import "../styles/sidebar.css";

const SideBar = () => {
  return (
    <div style={{ height: "100vh" }} className="menu ">
      <div className="logo border-bottom border-dark">
        <h2>0_PET</h2>
      </div>
      <div className="menu--list align-content-baseline justify-content-center">
        <a href="" className="item">
          <Icon icon="mingcute:home-3-fill" fontSize={25} />
          Dashboard
        </a>
        <a href="" className="item">
          <Icon icon="bxs:user" fontSize={25} />
          Manage Users
        </a>
        <a href="" className="item">
          <Icon icon="material-symbols:water-damage-rounded" fontSize={25} />
          Manage Stations
        </a>
      </div>
    </div>
  );
};

export default SideBar;
