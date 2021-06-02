import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import NavLogo from "../../../images/Navlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBookmark,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import Hadid from "../../../images/hb.jpg";

const NavBar = () => {
  return (
    <Navbar expand="lg mt-3">
      <Navbar.Brand className="" href="#home">
        <div className="nav-icon">
          <img
            style={{ height: "42px", width: "207px" }}
            src={NavLogo}
            alt=""
          />
        </div>
      </Navbar.Brand>
      <Navbar.Brand href="#home">
        <strong>Good morning</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">
            <FontAwesomeIcon className="nav-item" icon={faSearch} />
          </Nav.Link>
          <Nav.Link href="#link">
            <FontAwesomeIcon className="nav-item" icon={faBookmark} />
          </Nav.Link>
          <Nav.Link href="#link">
            <FontAwesomeIcon className="nav-item" icon={faBell} />
          </Nav.Link>
          <Nav.Link href="#link">
            <div className="nav-upgrade-icon">Upgrade</div>
          </Nav.Link>
          <Nav.Link className="nav-profile-icon" href="#link">
            <img
              style={{ height: "30px", width: "30px", borderRadius: "50%" }}
              src={Hadid}
              alt=""
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
