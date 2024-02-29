import React from "react";
import { createPortal } from "react-dom";

function Modal({ children, closeModal }) {
  return createPortal(
    <>
      <div className="modal-backdrop" onClick={closeModal}></div>
      <div className="modal-content">{children}</div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
