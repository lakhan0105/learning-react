import React from "react";

export const BtnCont = ({ jobs, currItem, setCurrItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            onClick={() => {
              setCurrItem(index);
            }}
            className={index === currItem ? "active-btn" : "job-btn"}
            key={item.id}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
