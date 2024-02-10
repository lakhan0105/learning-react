import React from "react";
import { SidebarHeader } from "./SidebarHeader";
import { PageLinksList } from "./PageLinksList";
import { SocialLinksList } from "./SocialLinksList";
import { useGlobalContext } from "../context/Context";

export const Sidebar = () => {
  const { sideBarRef } = useGlobalContext();

  return (
    <aside className="sidebar" ref={sideBarRef}>
      <SidebarHeader></SidebarHeader>
      <PageLinksList></PageLinksList>
      <SocialLinksList></SocialLinksList>
    </aside>
  );
};
