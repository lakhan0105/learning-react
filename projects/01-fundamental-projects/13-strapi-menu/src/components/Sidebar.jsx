import React from "react";
import { FaBars, FaX } from "react-icons/fa6";
import sublinks from "../Data2";
import { useGlobalContext } from "../context/Context";

export const Sidebar = () => {
  const { isShowSidebar, handleSidebar } = useGlobalContext();

  const sidebarStyles = isShowSidebar ? "sidebar show-sidebar" : "sidebar";

  return (
    <aside className={sidebarStyles}>
      <button className="close-btn" onClick={handleSidebar}>
        <FaX />
      </button>

      {sublinks.map((item) => {
        const { pageId, page, links } = item;
        return (
          <article key={pageId}>
            <p className="page-name">{page}</p>

            <ul className="links-list">
              {links.map((link) => {
                const { id, label, icon, url } = link;
                return (
                  <li key={id}>
                    <a className="link" href={url}>
                      {icon}
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </article>
        );
      })}
    </aside>
  );
};
