import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Simple App</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <Link className="nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/Cart">
                Cart
              </Link>
              <Link className="nav-link" to="/SignIn">
                SignIn
              </Link>
              <Link className="nav-link" to="/SignOut">
                SignOut
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
