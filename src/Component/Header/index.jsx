import React from "react";

import Logo from "../Logo/index";
import HeaderLinks from "../HeaderLinks";
import IconButton from "../IconButton";
import SocialHandler from "../SocialHandler";

import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <Logo to="/" logoName="ToolM5" />
      <nav className="main-nav">
        <ul className="main-nav-list">
          <HeaderLinks />
        </ul>
        <SocialHandler />
        <IconButton name="Get Started" />
      </nav>
    </header>
  );
};

export default Header;
