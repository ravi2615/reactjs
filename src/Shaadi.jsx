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
        <Route exact path="/" component={ Shaadi_home } />
        <Route exact path="/sign" component={ ShaadiLog } />
        <Route exact path="/login" component={ ShaadiSign } />
        <Route exact path="/about" component={ShaadiAbout} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
    </Switch> 
    <ShaadiFooter />
    <ScrollUpButton />
      
    </>
);
};
export default Shaadi;