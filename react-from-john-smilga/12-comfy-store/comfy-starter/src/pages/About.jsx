import React from "react";

function About() {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          we love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-10 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore beatae
        optio eius, natus unde animi alias illo ipsa veritatis quo illum officia
        accusamus id qui deserunt ullam voluptate, aut eveniet.
      </p>
    </>
  );
}

export default About;
