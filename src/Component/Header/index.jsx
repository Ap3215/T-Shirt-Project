import React from "react";

import Logo from "../Logo/index";
import HeaderLinks from "../HeaderLinks";
import IconButton from "../IconButton";
import Heading from "../HeroHeading";
import Button from "../Button";
import SocialHandler from "../SocialHandler";

import "./index.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <Logo to="/" logoName="ToolM5" />
        <nav>
          <ul className="main-nav-list">
            <HeaderLinks />
          </ul>
        </nav>
        <SocialHandler />
        <IconButton name="Get Started" />
      </header>
      <section className="hero-section">
        <div className="container">
          <div className="row row-bg justify-content">
            <Heading
              first_heading="T-Shirt Design"
              second_heading="Create your"
            />
            <Button name="Get Started" />
            <h4 className="heading-underline">view how it works</h4>
            <p className="p-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
