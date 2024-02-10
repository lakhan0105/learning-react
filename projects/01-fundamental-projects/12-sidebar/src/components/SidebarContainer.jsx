import React from "react";
import { Sidebar } from "./Sidebar";
import { useGlobalContext } from "../context/Context";

export const SidebarContainer = () => {
  const { linkStyles, sideBarContRef } = useGlobalContext();

  return (
    <div className="sidebar-container" ref={sideBarContRef} style={linkStyles}>
      <Sidebar></Sidebar>
    </div>
  );
};
