import React, { useState } from "react";
import "./Navbar.css";
import navItems from "./Items";
import { BsArrowRightShort } from "react-icons/bs";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const renderDropdown = (dropdownItems) => {
    return (
      <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
        {dropdownItems.map((item, index) => (
          <li key={index}>
            <a className="dropdown-item" href={item.path}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* <img
            className="navbar-brand"
            src={process.env.PUBLIC_URL + "/assets/images/Logo header.png"}
            alt="Logo"
          /> */}
          <p>Focusteck</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navItems.map((navLink, index) => (
                <li
                  className={`nav-item ${navLink.dropdown ? "dropdown" : ""}`}
                  key={index}
                  style={{ marginLeft: '30px' }}
                >
                  {navLink.dropdown ? (
                    <div
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {navLink.name}
                      {renderDropdown(navLink.dropdown)}
                    </div>
                  ) : (
                    <a className="nav-link" aria-current="page" href={navLink.path}>
                      {navLink.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <button className="btn btn-block" style={{ marginLeft: '15px',backgroundColor:'#25aae1', color:'white' }}>
              Schedule a Call <BsArrowRightShort style={{fontSize:'2em'}} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
