import React from "react";
import { useGlobalContext } from "../context/Context";
import sublinks from "../Data2";

export const FloatingSubCont = () => {
  const { pageId, setPageId } = useGlobalContext();

  const currentPage = sublinks.find((item) => {
    if (item.pageId === pageId) {
      return item;
    }
  });

  const handleOnMouseLeave = (event) => {
    if (!event.target.classList.contains("floating-sublinks-container")) {
      // hide submenu
      setPageId(null);
    }
  };

  const extraStyles = pageId
    ? "floating-sublinks-container show-sublinks"
    : "floating-sublinks-container";

  return (
    <div className={extraStyles} onMouseLeave={handleOnMouseLeave}>
      <ul className="floating-sublinks">
        {currentPage?.links?.map((link) => {
          const { id, label, icon, url } = link;
          return (
            <li key={id}>
              <a className="floating-link" href={url}>
                {icon}
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
