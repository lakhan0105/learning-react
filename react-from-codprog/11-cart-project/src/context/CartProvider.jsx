import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

// reducer function
function reducer(cart, action) {
  if (action.type === "ADD_TO_CART") {
    // if item already present in the cart, then return
    for (let item of cart) {
      if (item.id === action.payload.id) {
        alert("already added");
        return cart;
      }
      // return;
    }
    return [...cart, action.payload];
  }

  if (action.type === "INCREASE_COUNT") {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        return { ...cartItem, count: cartItem.count + 1 };
      } else {
        return cartItem;
      }
    });

    return newCart;
  }

  if (action.type === "DECREASE_COUNT") {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        if (cartItem.count < 1) {
          return { ...cartItem, count: 0 };
        }

        return { ...cartItem, count: cartItem.count-- };
      } else {
        return cartItem;
      }
    });

    return newCart;
  }

  if (action.type === "DELETE_ITEM") {
    console.log(action.payload.id);
    const newItems = cart.filter((cartItem) => {
      if (cartItem.id !== action.payload.id) {
        return cartItem;
      }
    });

    return newItems;
  }

  return cart;
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, []);

  // handleAddToCart
  function handleAddToCart(obj) {
    dispatch({ type: "ADD_TO_CART", payload: obj });
  }

  // handleIncrease
  function handleIncrease(eId) {
    dispatch({ type: "INCREASE_COUNT", payload: { id: eId } });
  }

  // handleDecrease
  function handleDecrease(eId) {
    dispatch({ type: "DECREASE_COUNT", payload: { id: eId } });
  }

  // handleDelete
  function handleDelete(eId) {
    dispatch({ type: "DELETE_ITEM", payload: { id: eId } });
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
        handleAddToCart,
        handleIncrease,
        handleDecrease,
        handleDelete,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
