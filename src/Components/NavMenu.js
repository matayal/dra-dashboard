import React, { useState, useRef } from "react";
import "../Css/styles.css";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../images/oracle.png";
import { ImHome } from "react-icons/im";

const NavMenu = () => {
  const menuItems = [
    { id: 1, name: "DB Connection", path: "/db-connection" },
    { id: 2, name: "SQL Tuning Set", path: "/load-sts" },
    { id: 3, name: "Construct Graph", path: "/construct-graph" },
    { id: 4, name: "Graphs", path: "/graphs" },
    { id: 5, name: "Community", path: "/community" },
  ];
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const location = useLocation();

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleItemClick = (itemId) => {
    console.log("Item clicked: ", itemId);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={{
            height: showLinks
              ? `${linksRef.current.getBoundingClientRect().height}px`
              : "0px",
          }}
        >
          <ul className="links" ref={linksRef}>
            <Link
              to="/"
              className={`links ${
                location.pathname === "/" ? "active " : "bounce-animation"
              }`}
              onClick={() => handleItemClick(1)}
            >
              <ImHome />
            </Link>
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`links ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
