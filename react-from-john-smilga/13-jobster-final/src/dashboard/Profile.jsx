import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FormRow } from "../components";
import { updateUser } from "../features/user/userSlice";
import { Form } from "react-router-dom";

function Profile() {
  const { isLoading, user } = useSelector((store) => store.userState);
  const dispatch = useDispatch();

  // state
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  // handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error("please fill out all the fields!");
      return;
    }

    dispatch(updateUser(userData));
  }

  // handleChange
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setUserData((prev) => {
      return { ...prev, [key]: value };
    });
  }

  return (
    <Wrapper>
      <Form className="form" onSubmit={handleSubmit}>
        <h2>Profile</h2>

        <div className="form-center">
          {/* NAME */}
          <FormRow
            type={"text"}
            name={"name"}
            value={userData.name}
            handleChange={handleChange}
          />

          {/* LASTNAME */}
          <FormRow
            type={"text"}
            labelText={"last name"}
            name={"lastName"}
            value={userData.lastName}
            handleChange={handleChange}
          />

          {/* EMAIL */}
          <FormRow
            type={"email"}
            name={"email"}
            value={userData.email}
            handleChange={handleChange}
          />

          {/* LOCATION */}
          <FormRow
            type={"location"}
            name={"location"}
            value={userData.location}
            handleChange={handleChange}
          />

          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? "please wait..." : "save changes"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
}

export default Profile;
