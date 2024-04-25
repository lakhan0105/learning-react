import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow, Logo } from "../components/index";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);
  const { isLoading, user } = useSelector((state) => {
    return state.userState;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // logic to navigate when user logins
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        return navigate("/stats", { replace: true });
      }, 1000);
    }
  }, [user]);

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

    // check for empty fields
    if (!email || !password || (!isMember && !name)) {
      toast.error("please fill out all the details");
      return;
    }

    // login user
    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }

    // register user
    if (!isMember) {
      dispatch(registerUser({ name, email, password }));
      return;
    }
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

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "loading.." : "submit"}
        </button>

        <button
          type="button"
          className="btn btn-block btn-hipster"
          disabled={isLoading}
          onClick={() =>
            dispatch(
              loginUser({ email: "testUser@test.com", password: "secret" })
            )
          }
        >
          {isLoading ? "loading.." : "demo"}
        </button>

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
