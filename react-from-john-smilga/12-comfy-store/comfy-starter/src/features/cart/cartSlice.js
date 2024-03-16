import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFrmLS = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart  ",
  initialState: getCartFrmLS,
  reducers: {
    addItem: (state, action) => {
      // grab the product obj created in SingleProduct
      const { product } = action.payload;

      // find the item
      const item = state.cartItems.find(
        (item) => item.cartID === product.cartID
      );

      // check if item is already present
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;

      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
      alert("added to cart");
    },

    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },

    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((item) => item.cartID === cartID);
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== cartID
      );

      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;

      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
      alert("Item removed from cart");
    },

    editItem: (state, action) => {
      const { cartID, newAmount } = action.payload;
      const item = state.cartItems.find((item) => item.cartID === cartID);

      state.numItemsInCart += newAmount - item.amount;
      state.cartTotal += item.price * (newAmount - item.amount);
      item.amount = newAmount;

      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
      alert("Edited cart item");
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
