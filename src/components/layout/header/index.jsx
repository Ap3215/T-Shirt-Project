import React from "react";

import Logo from "../../ui/logo/index";
import HeaderLinks from "../../ui/links";
import IconButton from "../../ui/iconbutton";
import SocialHandler from "../../ui/social-handler";

import classes from "./index.module.css";

const Header = () => {
  return (
    <header className={classes["header"]}>
      <Logo to="/" logo="ToolM5" />
      <nav className={classes["main-nav"]}>
        <ul className={classes["main-nav-list"]}>
          <HeaderLinks />
          <SocialHandler />
          <IconButton name="Get Started" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
