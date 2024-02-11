import { createContext, useContext, useRef, useState } from "react";
import sublinks from "../Data2";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const handleSidebar = () => {
    setIsShowSidebar((prev) => !prev);
  };

  // SUB LINKS
  const [newSubLinks, setNewSubLinks] = useState([]);
  const [linkIsActive, setLinkIsActive] = useState(false);
  const subLinksContRef = useRef(null);
  const subLinksRef = useRef(null);
  const [pageId, setPageId] = useState(null);

  const searchSubLinks = (e) => {
    const eId = e.target.dataset.id;

    const page = sublinks.filter((item) => {
      if (eId === item.pageId) {
        setNewSubLinks(item.links);
        return item;
      }
    });

    return page;
  };

  const value = {
    isShowSidebar,
    handleSidebar,
    searchSubLinks,
    newSubLinks,
    linkIsActive,
    setLinkIsActive,
    subLinksContRef,
    subLinksRef,
    pageId,
    setPageId,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default AppContext;
