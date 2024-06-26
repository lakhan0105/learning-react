import React, { useState } from "react";
import { FormRow, Logo } from "../components/index";
import styled from "styled-components";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

function Register() {
  const [values, setValues] = useState(initialState);

  // handleChange
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  // onSubmit
  function onSubmit(e) {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("please fill out all the fields!");
      return;
    }
  }

  // toggleMembers
  function toggleMembers() {
    setValues({ ...values, isMember: !values.isMember });
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        {values.isMember ? <h3>Login</h3> : <h3>Register</h3>}

        {/* NAME FIELD */}
        {!values.isMember && (
          <FormRow
            type={"text"}
            name={"name"}
            value={values.name}
            handleChange={handleChange}
            labelText={"First Name"}
          />
        )}

        {/* EMAIL FIELD */}
        <FormRow
          type={"email"}
          name={"email"}
          value={values.email}
          handleChange={handleChange}
          labelText={"Email"}
        />

        {/* PASSWORD FIELD */}
        <FormRow
          type={"password"}
          name={"password"}
          value={values.password}
          handleChange={handleChange}
          labelText={"Password"}
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>

        {/* toggle */}
        <p>
          {values.isMember ? "Not a member?" : "Already a member?"}

          <button type="button" onClick={toggleMembers} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;

export default Register;
