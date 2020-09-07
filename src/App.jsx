import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

import Home from "./Home";
// import About from "./About";
// import Faculty from "./Faculty";
// import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./Login";
import Signup from "./Signup";
import Contact from "./Contact";

import { Switch, Route, Redirect } from "react-router-dom";
import Artist from "./Artist";

const App = () => {

return(
    <>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/artist" component={Artist} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/faculty" component={Faculty} />
        {/* <Route exact path="/contact" component={Contact} /> */} */}
        <Redirect to="/" />
    </Switch> 
    <Footer />
    <ScrollUpButton />
      
    </>
);
};
export default App;