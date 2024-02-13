import { createContext, useContext, useEffect, useReducer } from "react";
import cartItems from "../Data";
import { getTotals } from "../utils";
const url = `https://course-api.com/react-useReducer-cart-project`;

// create context
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

// REDUCER
const defaultState = {
  isLoading: false,
  cartMap: new Map(),
};

const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cartMap: new Map() };
  }

  if (action.type === "REMOVE_ITEM") {
    const newCartMap = new Map(state.cartMap);
    newCartMap.delete(action.payload.id);
    return { ...state, cartMap: newCartMap };
  }

  if (action.type === "INCREASE_ITEM") {
    const newCartMap = new Map(state.cartMap);
    const itemId = action.payload.id;
    const item = newCartMap.get(itemId);
    const newItem = { ...item, amount: item.amount++ };
    newCartMap.set(itemId, newItem);
    return { ...state, cartMap: newCartMap };
  }

  if (action.type === "DECREASE_ITEM") {
    const newCartMap = new Map(state.cartMap);
    const itemId = action.payload.id;
    const item = newCartMap.get(itemId);

    if (item.amount === 1) {
      newCartMap.delete(itemId);
      return { ...state, cartMap: newCartMap };
    }

    const newItem = { ...item, amount: item.amount - 1 };
    newCartMap.set(itemId, newItem);
    return { ...state, cartMap: newCartMap };
  }

  if (action.type === "LOADING") {
    return { ...state, isLoading: true };
  }

  if (action.type === "DISPLAY_ITEMS") {
    const data = action.payload.result;
    return {
      ...state,
      cartMap: new Map(data.map((item) => [item.id, item])),
      isLoading: false,
    };
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const { totalAmount, totalCost } = getTotals(state.cartMap);

  // clear cart function
  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  // remove cart item function
  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  }

  // increase item
  function increaseItem(id) {
    dispatch({ type: "INCREASE_ITEM", payload: { id } });
  }

  // decrease item
  function decreaseItem(id) {
    dispatch({ type: "DECREASE_ITEM", payload: { id } });
  }

  const fetchData = async () => {
    // loading
    dispatch({ type: "LOADING" });

    const resp = await fetch(url);
    const result = await resp.json();
    // return result;
    console.log(result);

    // display items
    dispatch({ type: "DISPLAY_ITEMS", payload: { result } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppProvider;
