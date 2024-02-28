import React from "react";
import Modal from "./UI/Modal";

function Header() {
  return (
    <header>
      <nav>
        <h1 className="logo">ARC shop</h1>
        <button>show cart</button>
      </nav>
      <Modal></Modal>
    </header>
  );
}

export default Header;
