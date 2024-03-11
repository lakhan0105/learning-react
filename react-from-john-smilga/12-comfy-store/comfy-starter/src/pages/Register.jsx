import React from "react";
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>

        <FormInput label="username" type="text" name="username" />
        <FormInput label="email" type="email" name="email" />
        <FormInput label="password" type="password" name="password" />

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
