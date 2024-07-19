import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="w-100 shadow sticky-top"
      style={{ backgroundColor: "#7ea1ff" }}
    >
      <Container>
        {/* <Icon className="user1" icon="bxs:user" fontSize={25} color="#624a95" /> */}
        <Navbar.Brand href="#home">
          <h2 style={{ fontSize: 30 }}>0_PET</h2>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-start "
        >
          <div className="navlink gap-4">
            <Nav.Link
              className="dashboardlink"
              href="#home"
              style={{
                fontSize: 30,
                fontWeight: "500",
                paddingLeft: 50,
                color: "black",
              }}
            >
              Dashboard
            </Nav.Link>

            {/* <Nav.Link href="#about" style={{ fontSize: 18, color: "#624a95" }}>
              About Us
            </Nav.Link>
            <Nav.Link
              href="#contact"
              style={{ fontSize: 18, color: "#624a95" }}
            >
              Contact Us
            </Nav.Link> */}
            {/* <Nav.Link href="#user" style={{ color: "#624a95" }}>
              <div className="usericon text-start"></div>
            </Nav.Link> */}
          </div>
          <div className="navlink1">
            <Nav.Link
              className="dashboardlink"
              href="#home"
              style={{
                fontSize: 18,
                fontWeight: "500",
                color: "black",
              }}
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              className="dashboardlink"
              href="#home"
              style={{
                fontSize: 18,
                fontWeight: "500",
                color: "black",
              }}
            >
              Manage users
            </Nav.Link>
            <Nav.Link
              className="dashboardlink"
              href="#home"
              style={{
                fontSize: 18,
                fontWeight: "500",
                color: "black",
              }}
            >
              Manage stations
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
