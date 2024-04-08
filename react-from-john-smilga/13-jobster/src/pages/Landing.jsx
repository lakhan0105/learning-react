import React from "react";
import main from "../assets/main.svg";
import styled from "styled-components";
import { Logo } from "../components";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Wrapper>
      {/* NAV */}
      <nav>
        <Logo />
      </nav>

      {/* CONTAINER */}
      <div className="container page">
        {/* INFO */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            beatae in architecto asperiores commodi laudantium ut expedita
            debitis ullam est?
          </p>
          <Link to={"/register"}>
            <button className="btn btn-hero">Login/Register</button>
          </Link>
        </div>

        {/* MAIN */}
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    /* place-items: center; */
    align-items: center;
  }

  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }

  p {
    color: var(--grey-600);
  }

  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }

    .main-img {
      display: block;
    }
  }
`;

export default Landing;
