import React from "react";

import heroImg from "./assets/hero.svg";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            maxime quo, repellat dolorum est rem. Consequatur reprehenderit
            perspiciatis harum perferendis?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero img" className="img" />
        </div>
      </div>
    </section>
  );
};
