import React from "react";
import { useGlobalContext } from "../context/Context";

export const Hero = () => {
  const { handleCloseSidebar, icons, handleModal } = useGlobalContext();

  return (
    <section className="hero">
      <button className="hamburger-btn" onClick={handleCloseSidebar}>
        {icons.hamburger}
      </button>
      <button className="btn show-modal-btn" onClick={handleModal}>
        show modal
      </button>
    </section>
  );
};
