import React from "react";
import { useGlobalContext } from "../context/Context";

export const SocialLinksList = () => {
  const { socialLinks } = useGlobalContext();

  return (
    <ul className="social-links-list">
      {socialLinks.map((item) => {
        const { id, url, icon } = item;
        return (
          <li className="social-link-item" key={id}>
            <a className="social-link" href={url}>
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
