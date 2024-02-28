import React, { useEffect, useState } from "react";
import Modal from "../UI/Modal";
import Cart from "./Cart";
import { FaCartPlus } from "react-icons/fa";
import { useCartContext } from "../context/CartProvider";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cart } = useCartContext();

  let totalItems = 0;

  for (let item of cart) {
    totalItems += item.count;
  }

  // useeffect to hide the html scrollbar when modal is open
  useEffect(() => {
    if (showCart) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [showCart]);

  // function to close the modal
  function closeModal() {
    setShowCart(false);
  }

  return (
    <header>
      <nav className="nav-center">
        <h1>ARC Shop</h1>
        <button
          className="show-cart-btn"
          onClick={() => {
            setShowCart((prev) => !prev);
          }}
        >
          <FaCartPlus />
          {totalItems}
        </button>
      </nav>

      {showCart && (
        <Modal closeModal={closeModal}>
          <Cart></Cart>
        </Modal>
      )}
    </header>
  );
}

export default Header;
