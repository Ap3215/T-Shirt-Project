import React from "react";

import Logo from "../../ui/logo/index";
import HeaderLinks from "../../ui/headerlinks";
import IconButton from "../../ui/iconbutton";
import SocialHandler from "../../ui/socialhandler";

import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <Logo to="/" logo="ToolM5" />
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
