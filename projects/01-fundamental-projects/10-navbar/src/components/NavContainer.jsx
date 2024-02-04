import React, { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { PageLinksContainer } from "./PageLinksContainer";
import { SocialLinksContainer } from "./SocialLinksContainer";
import { FaBars } from "react-icons/fa6";
import { FaSlack } from "react-icons/fa";

export const NavContainer = () => {
  // useRef
  const [showLinks, setShowLinks] = useState(false);
  const linksContRef = useRef(null);
  const linksRef = useRef(null);

  // function to toggle links
  function toggleLinks() {
    setShowLinks(!showLinks);
  }

  // styles obj to add in pagelinkscontainer styles
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav>
      <div className="nav-container">
        <Logo></Logo>
        <FaBars className="hamburger" onClick={toggleLinks}></FaBars>
        <PageLinksContainer
          linksContRef={linksContRef}
          linksRef={linksRef}
          linkStyles={linkStyles}
        ></PageLinksContainer>
        <SocialLinksContainer></SocialLinksContainer>
      </div>
    </nav>
  );
};
