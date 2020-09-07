import React from "react";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';


const Navbar = () => {

return(
    <>
    <section className="container-fluid bg-dark" >
        <div className="row">
      <nav className="navbar navbar-expand-lg navbar-dark" id="s">
    <NavLink  className="navbar-brand" to="/"> Painting </NavLink>
    <form className="form-center-1 form-inline d-flex flex-row ">
      <input className="form-control col-8" type="search" placeholder="Search by name" aria-label="Search" />
      <button className="btn btn-primary float-right" type="submit"><SearchIcon/></button>
    </form>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item text-center mr-3">
          <NavLink activeClassName="menu_active" className="nav-link active text-light active" exact aria-current="page" to="/">Home</ NavLink>
        </li>
        <li className="nav-item dropdown text-center mr-3">
        <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category
        </a>
        <div className="dropdown-menu text-center mr-3 bg-secondary" aria-labelledby="navbarDropdownMenuLink">
          <NavLink activeClassName="menu_active" className="nav-link dropdown-item text-light" to="/">Action</NavLink>
          <NavLink activeClassName="menu_active" className="nav-link dropdown-item text-light" to="/">Another action</NavLink>
          <NavLink activeClassName="menu_active" className="nav-link dropdown-item text-light" to="/">Something else here</NavLink>
        </div>
      </li>
      <li className="nav-item text-center mr-3">
          <NavLink activeClassName="menu_active" className="nav-link text-light" to="/artist">Artist</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink activeClassName="menu_active" className="nav-link text-light" to="/about">About</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink activeClassName="menu_active" className="nav-link text-light" to="/contact">Contact us</NavLink>
        </li>
        
        
      </ul>
      <form className="form-center form-inline d-flex flex-row justify-content-center align-items-center">
      <input className="form-control" type="search" placeholder="Search by name" aria-label="Search" />
      <button className="btn btn-white float-right" type="submit"><SearchIcon/></button>
    </form>
    
    <ul className="ml-auto navbar-nav mb-2 mb-lg-0 sign_div">
    <NavLink activeClassName="menu_active" className="nav-link text-center text-light" to="/login"><AccountCircleIcon className="log"/>
    </NavLink>
    <NavLink activeClassName="menu_active" className="nav-link text-center text-light" to="/signup">
      <PersonAddIcon className="sign"/>
      </NavLink> 
    </ul>
    </div>
  {/* </div> */}
</nav>
</div>
        {/* </div> */}

    </section>
    
    </>
);
};
export default Navbar;