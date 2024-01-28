import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const Tab = ({ tabsData, currItem }) => {
  const { company, dates, duties, id, title } = tabsData[currItem];

  return (
    <article className="tab">
      <h3 className="title">{title}</h3>
      <p className="company">{company}</p>
      <p className="date">{dates}</p>
      <div className="duties-cont">
        {duties.map((duty, index) => {
          return (
            <div className="duty" key={index}>
              <span>
                <MdKeyboardDoubleArrowRight />
              </span>
              <p>{duty}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};
