import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function reducer(tasksData, action) {
  if (action.type === "HANDLE_SUBMIT") {
    const temp = [...tasksData, action.payload.obj];
    return temp;
  }

  if (action.type === "DELETE_TASK") {
    console.log("delete");
    const filteredObj = tasksData.filter((item) => {
      if (action.payload.eId !== item.id) {
        return item;
      }
    });
    return filteredObj;
  }

  if (action.type === "CHANGE_STATUS") {
    const newTasksData = tasksData.map((item) => {
      if (item.id === action.payload.eId) {
        return { ...item, taskStatus: !item.taskStatus };
      }
      return item;
    });
    return newTasksData;
  }

  return tasksData;
}

function AppProvider({ children }) {
  // get the LS data and pass into tasksData hook
  const storageData = JSON.parse(localStorage.getItem("tasks"));

  const initialTasksData = storageData || [];
  const [tasksData, dispatch] = useReducer(reducer, initialTasksData);

  // handleSubmit
  function handleSubmit(obj) {
    dispatch({ type: "HANDLE_SUBMIT", payload: { obj } });
  }

  // handleDel
  function handleDel(eId) {
    dispatch({ type: "DELETE_TASK", payload: { eId } });
  }

  // handleStatus
  function handleStatus(eId) {
    dispatch({ type: "CHANGE_STATUS", payload: { eId } });
  }

  const value = {
    storageData,
    tasksData,
    dispatch,
    handleDel,
    handleSubmit,
    handleStatus,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
