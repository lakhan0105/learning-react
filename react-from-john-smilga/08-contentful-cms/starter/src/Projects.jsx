import React from "react";
import "./FetchProjects";
import { useFetchProjects } from "./FetchProjects";

export const Projects = () => {
  const data = useFetchProjects();
  console.log(data);

  if (data.loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>

      <div className="projects-center">
        {data.projects.map((project) => {
          const { id, projectName, projectUrl, imgUrl } = project;
          return (
            <a
              key={id}
              href={projectUrl}
              target="_blank"
              rel="noreffer"
              className="project"
            >
              <img src={imgUrl} alt={projectName} className="img" />
              <h5>{projectName}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};
