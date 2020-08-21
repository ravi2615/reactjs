import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

import Shaadi_home from "./Shaadi_home";
import ShaadiAbout from "./ShaadiAbout";
import Profile from "./Profile";
import Contact from "./Contact";
import ShaadiNav from "./ShaadiNav";
import ShaadiLog from "./ShaadiLog";
import ShaadiSign from "./ShaadiSign";
import ShaadiFooter from "./ShaadiFooter";

import { Switch, Route, Redirect } from "react-router-dom";

const Shaadi = () => {
    
return(
    <>
    <ShaadiNav />
    <Switch>
        <Route exact path="/reactjs/" component={ Shaadi_home } />
        <Route exact path="/reactjs/sign" component={ ShaadiLog } />
        <Route exact path="/reactjs/login" component={ ShaadiSign } />
        <Route exact path="/reactjs/about" component={ShaadiAbout} />
        <Route exact path="/reactjs/profile" component={Profile} />
        <Route exact path="/reactjs/contact" component={Contact} />
        <Redirect to="/reactjs" />
    </Switch> 
    <ShaadiFooter />
    <ScrollUpButton />
      
    </>
);
};
export default Shaadi;