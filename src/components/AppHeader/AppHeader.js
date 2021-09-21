import React from "react";

import "./AppHeader.scss";

import Button from "../Button";

function AppHeader({ toggleNewProductForm, ...props }) {
  return (
    <header className="bg-primary mb-4" {...props}>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark">
            <a className="navbar-brand" href="/">
              Home
            </a>

            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Products
                </a>
              </li>
            </ul>
          </nav>
          <div className="col col-4 ml-auto d-flex justify-content-end align-items-center">
            <Button small onClick={toggleNewProductForm}>
              New product
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
