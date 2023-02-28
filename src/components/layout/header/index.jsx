import React from "react";

import Logo from "../../ui/logo/index";
import HeaderLinks from "../../ui/links";
import IconButton from "../../ui/iconbutton";
import SocialHandler from "../../ui/social-handler";
import { attachClasses } from "../../../utils/index";

import classes from "./index.module.css";

const Header = () => {
  return (
    <header className={attachClasses(classes["header"])}>
      <Logo to="/" logo="ToolM5" />
      <nav className={attachClasses(classes["main-nav"])}>
        <ul className={attachClasses(classes["main-nav-list"])}>
          <HeaderLinks />
          <SocialHandler />
          <IconButton name="Get Started" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
