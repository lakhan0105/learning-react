import React from "react";
import { useGlobalContext } from "../context/Context";

export const PageLinksList = () => {
  const { pageLinks } = useGlobalContext();

  return (
    <ul className="page-links-list">
      {pageLinks.map((item) => {
        const { id, url, text, icon } = item;

        return (
          <li className="page-link-item" key={id}>
            <span className="page-link-icon">{icon}</span>
            <a className="page-link" href={url}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
