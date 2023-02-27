import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import "./index.css";

const SocialHandler = () => {
  return (
    <div className="socialhandler">
      <FaFacebookF className="socialhandler-icon" />
      <FaTwitter className="socialhandler-icon" />
      <FaInstagram className="socialhandler-icon" />
    </div>
  );
};

export default SocialHandler;
