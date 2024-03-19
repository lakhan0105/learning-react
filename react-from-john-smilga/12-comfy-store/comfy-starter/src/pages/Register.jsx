import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import custFetch from "../utils";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const resp = await custFetch.post("/auth/local/register", data);
    return redirect("/login");
  } catch (error) {
    const errMsg =
      error?.response?.data?.error?.message || "please check your credentials";
    console.log(error);
    alert(errMsg);
    return null;
  }
};

function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>

        {/* USERNAME */}
        <FormInput
          label="username"
          type="text"
          name="username"
          defaultValue={"fdasnf kdnalds"}
        />

        {/* EMAIL */}
        <FormInput
          label="email"
          type="email"
          name="email"
          defaultValue={"fdasnf@gmail.com"}
        />

        {/* PASSWORD */}
        <FormInput
          label="password"
          type="password"
          name="password"
          defaultValue={"secret"}
        />

        <div className="mt-4">
          <SubmitBtn text="register"></SubmitBtn>
        </div>
        <p className="text-center">
          Already a user?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Register;
