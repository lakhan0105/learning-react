import React from "react";
import { useGlobalContext } from "../context/Context";

export const SidebarHeader = () => {
  const { icons, handleCloseSidebar } = useGlobalContext();

  return (
    <header className="sidebar-header">
      <h1 className="logo">logo</h1>
      <button className="close-sidebar-btn" onClick={handleCloseSidebar}>
        {icons.close}
      </button>
    </header>
  );
};
