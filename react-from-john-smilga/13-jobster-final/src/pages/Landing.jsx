import main from "../assets/images/main.svg";
import styled from "styled-components";
import { Logo } from "../components/index";
import { Link, Outlet } from "react-router-dom";

function Landing() {
  return (
    <Wrapper>
      {/* <Outlet /> */}

      {/* nav */}
      <nav>
        <Logo />
      </nav>

      {/* container */}
      <div className="container page">
        {/* info*/}
        <div className="info">
          <h1>
            job <span>tracking</span>
          </h1>
          <p>
            Consectetur adipisicing elit. Voluptatibus vel soluta aperiam quam
            sint qui nostrum autem explicabo odit numquam.
          </p>
          <Link to={"/register"}>
            <button className="btn btn-hero">Login/Register</button>
          </Link>
        </div>

        {/* main img */}
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
    align-items: center;
    margin-top: -3rem;
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
