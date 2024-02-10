import { createContext, useContext, useRef, useState } from "react";

// import icons
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";
import { FaX, FaBars } from "react-icons/fa6";

// import from data.jsx
import { links, social } from "../data";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const sideBarRef = useRef(null);
  const sideBarContRef = useRef(null);
  const [hideSideBar, setHideSibeBar] = useState(true);

  const linkStyles = {
    width: hideSideBar
      ? "0px"
      : `${sideBarRef.current.getBoundingClientRect().width}px`,
  };

  const handleCloseSidebar = () => {
    setHideSibeBar((prev) => !prev);
  };

  // MODAL WORKING
  const [showModal, setShowModal] = useState(false);
  const modalContRef = useRef();
  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  const value = {
    icons: {
      behance: <FaBehance />,
      facebook: <FaFacebook />,
      linkedIn: <FaLinkedin />,
      twitter: <FaTwitter />,
      sketch: <FaSketch />,
      home: <FaHome />,
      userFriends: <FaUserFriends />,
      folderOpen: <FaFolderOpen />,
      calendar: <FaCalendarAlt />,
      wpForms: <FaWpforms />,
      close: <FaX />,
      hamburger: <FaBars />,
    },
    pageLinks: links,
    socialLinks: social,
    handleCloseSidebar,
    sideBarRef,
    sideBarContRef,
    hideSideBar,
    setHideSibeBar,
    linkStyles,
    showModal,
    handleModal,
    modalContRef,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default AppContext;
