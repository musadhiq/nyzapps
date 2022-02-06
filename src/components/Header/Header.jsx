import React, { useState } from "react";
import { FaHome, FaInfo, FaCloudDownloadAlt } from "react-icons/fa";
import { MdConnectWithoutContact, MdClose } from "react-icons/md";
import { FiAlignCenter } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const ToggleMenu = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="header">
      <nav className="navbar">
        <div className="nav-logo">
          <h1 className="logo">
            nyz<span className="logo-highlight">Apps</span>
          </h1>
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">
              <span className="link-icon">
                <FaHome />
              </span>
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/about">
              <span className="link-icon">
                <FaInfo />
              </span>
              About
            </Link>
          </li>
          <li className="nav-link">
            <Link to="Features">
              <span className="link-icon">
                <MdConnectWithoutContact />
              </span>
              Features
            </Link>
          </li>
          <li className="nav-link">
            <Link to="downloads">
              <span className="link-icon">
                <FaCloudDownloadAlt />
              </span>
              Downloads
            </Link>
          </li>
        </ul>
        {navbar ? (
          <MdClose onClick={ToggleMenu} className="nav-btn" />
        ) : (
          <FiAlignCenter onClick={ToggleMenu} className="nav-btn" />
        )}
        {navbar && (
          <div className="overlay">
            <ul className="nav-links-smallscreen">
              <li className="nav-link">
                <Link to="/" onClick={ToggleMenu}>
                  <span className="link-icon">
                    <FaHome />
                  </span>
                  Home
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/about" onClick={ToggleMenu}>
                  <span className="link-icon">
                    <FaInfo />
                  </span>
                  About
                </Link>
              </li>
              <li className="nav-link">
                <Link to="Features" onClick={ToggleMenu}>
                  <span className="link-icon">
                    <MdConnectWithoutContact />
                  </span>
                  Features
                </Link>
              </li>
              <li className="nav-link">
                <Link to="downloads" onClick={ToggleMenu}>
                  <span className="link-icon">
                    <FaCloudDownloadAlt />
                  </span>
                  Downloads
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
