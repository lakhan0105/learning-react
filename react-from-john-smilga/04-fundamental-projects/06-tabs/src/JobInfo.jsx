import React from "react";
import { Duties } from "./Duties";

export const JobInfo = ({ jobs, currItem }) => {
  const { title, id, company, dates, duties } = jobs[currItem];
  console.log(jobs);

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties}></Duties>
    </article>
  );
};
