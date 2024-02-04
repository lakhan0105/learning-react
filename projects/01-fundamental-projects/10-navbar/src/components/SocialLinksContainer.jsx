import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const SocialLinksContainer = () => {
  return (
    <ul className="social-links-container">
      <li>
        <a href="#">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="#">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="#">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="#">
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
};
