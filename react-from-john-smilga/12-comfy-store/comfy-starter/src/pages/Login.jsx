import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import custFetch from "../utils";
import { loginUser } from "../features/user/userSlice";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const resp = await custFetch.post("/auth/local", data);
      alert("logged in successfully");
      store.dispatch(loginUser(resp.data));
      return redirect("/");
    } catch (error) {
      const errMsg =
        error?.response?.data?.error?.message ||
        "please check your credentials";

      alert(errMsg);
      return null;
    }
  };

function Login() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          name="identifier"
          label="email"
          defaultValue="test@test.com"
        />

        <FormInput
          type="password"
          name="password"
          label="password"
          defaultValue="secret"
        />

        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>

        <button type="button" className="btn btn-secondary btn-block">
          guest user
        </button>
        <p className="text-center">
          Not a member?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
