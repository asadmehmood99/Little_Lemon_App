import React, { useState } from "react";
import "./HamburgerMenu.css";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-button" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "line-1" : ""}`}></div>
        <div className={`line ${isOpen ? "line-2" : ""}`}></div>
        <div className={`line ${isOpen ? "line-3" : ""}`}></div>
      </button>
      <div className={`menu ${isOpen ? "menu-open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
