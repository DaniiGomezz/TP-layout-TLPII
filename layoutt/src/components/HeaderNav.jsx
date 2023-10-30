import React from "react";
import { HeaderButton } from "./HeaderButton";
import { HeaderInput } from "./HeaderInput";
export const HeaderNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          
          <div>
            <form className="d-flex" role="search">
              <HeaderInput/>
              <HeaderButton/>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
