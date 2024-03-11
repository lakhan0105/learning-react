import React from "react";
import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semi-bold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            page not found
          </h1>
          <p>Sorry, we couldn't fond the page you are looking for. </p>
          <div className="mt-10">
            <Link to={"/"} className="btn btn-secondary">
              Go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // if error is not 404 then return the below line
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-center font-bold text-4xl">there was an error...</h4>
    </main>
  );
}

export default Error;
