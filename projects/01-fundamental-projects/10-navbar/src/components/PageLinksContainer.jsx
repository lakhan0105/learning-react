import React from "react";

export const PageLinksContainer = ({ linksContRef, linksRef, linkStyles }) => {
  return (
    <div className="page-links-container" ref={linksContRef} style={linkStyles}>
      <ul className="page-link" ref={linksRef}>
        <li className="page-link-item">
          <a href="#">Home</a>
        </li>
        <li className="page-link-item">
          <a href="#">About</a>
        </li>
        <li className="page-link-item">
          <a href="#">Projects</a>
        </li>
        <li className="page-link-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};
