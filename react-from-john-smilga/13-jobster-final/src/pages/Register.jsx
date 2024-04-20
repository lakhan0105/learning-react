import React, { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow, Logo } from "../components/index";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);

  // handleChange
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setValues((prev) => {
      return { ...prev, [key]: value };
    });
  }

  // handleSubmit
  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      console.log("please fill out all the details");
      return;
    }

    console.log("submitted");
    console.log(values);
  }

  // toggleMember
  function toggleMember() {
    return setValues({ ...values, isMember: !values.isMember });
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>

        {/* NAME FIELD*/}
        {!values.isMember && (
          <FormRow
            type={"text"}
            name={"name"}
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* EMAIL FIELD*/}
        <FormRow
          type={"email"}
          name={"email"}
          value={values.email}
          handleChange={handleChange}
        />

        {/* PASSWORD FIELD*/}
        <FormRow
          type={"password"}
          name={"password"}
          value={values.password}
          handleChange={handleChange}
        />

        <button className="btn btn-block">submit</button>

        {/* toggle button */}
        <p>
          {values.isMember ? `Not a member? ` : "Already a member?"}

          <button onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>

        <p></p>
      </form>
    </Wrapper>
  );
}

export default Register;
