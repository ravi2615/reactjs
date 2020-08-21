import React from "react";
import { NavLink } from "react-router-dom";


const ShaadiNav = () => {

return(
    <>
    <div className=" nav_bg fixed-top" >
        <div className="row" >
            <div className="col-12 mx-auto" >


      <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid p-1">
    <NavLink className="navbar-brand ml-3" to="/"> Shaadi.com </NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item text-center">
          <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</ NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink activeClassName="menu_active" className="nav-link" to="/profile">Profile</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
        </div>

    </div>
    </>
);
};
export default ShaadiNav;