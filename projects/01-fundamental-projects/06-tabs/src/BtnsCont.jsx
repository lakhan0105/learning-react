import React from "react";

export const BtnsCont = ({ tabsData, currItem, setCurrItem }) => {
  return (
    <div className="btns-cont">
      {tabsData.map((item, index) => {
        return (
          <button
            onClick={() => {
              setCurrItem(index);
            }}
            className={index === currItem ? "active btn" : "btn"}
            key={item.id}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
