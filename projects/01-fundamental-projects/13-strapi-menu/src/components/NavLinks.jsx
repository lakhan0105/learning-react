import React, { useState } from "react";
import sublinks from "../Data2";
import { useGlobalContext } from "../context/Context";

export const NavLinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        const { pageId, page, url } = link;

        return (
          <button
            key={pageId}
            className="nav-page-link"
            href={url}
            data-id={pageId}
            onMouseEnter={() => {
              setPageId(pageId);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
