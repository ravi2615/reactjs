import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {

return(
    <>
        <footer className=" container-fluid bg-dark text-center p-1">

          <div className="container">
              <div className="row my-2">
                  <div className="col-4 col-lg-2 col-sm-3 col-md-2">
                            <h4 className="text-light">ABOUT</h4>
                            <NavLink className="nav-link text-light" to="/"> us</NavLink>

                            <NavLink className="nav-link text-light" to="/">About us</NavLink>
                            
                            <NavLink className="nav-link text-light" to="/">Careers</NavLink>

                            <NavLink className="nav-link text-light" to="/">Stories</NavLink>
                            
                        </div>

                        <div className="col-4 col-lg-2 col-sm-3 col-md-2">
                            <h4 className="text-light">HELP</h4>
                            <NavLink className="nav-link text-light" to="/">Payments</NavLink>

                            <NavLink className="nav-link text-light" to="/">Shipping</NavLink>
                            
                            <NavLink className="nav-link text-light" to="/">Cancellation &</NavLink>

                            <NavLink className="nav-link text-light" to="/">Returns</NavLink>
                            
                            <NavLink className="nav-link text-light" to="/">FAQ</NavLink>

                            <NavLink className="nav-link text-light" to="/">Report</NavLink>
                        </div>

                        <div className="col-4 col-lg-2 col-sm-3 col-md-2">
                            <h4 className="text-light">POLICY</h4>
                            <NavLink className="nav-link text-light" to="/">Return Policy</NavLink>

                            <NavLink className="nav-link text-light" to="/">Terms Of Use</NavLink>
                            
                            <NavLink className="nav-link text-light" to="/">Security &</NavLink>

                            <NavLink className="nav-link text-light" to="/">Privacy</NavLink>
                            
                            <NavLink className="nav-link text-light" to="/">Sitemap</NavLink>

                            <NavLink className="nav-link text-light" to="/">Report</NavLink>
                        </div>



                        <div className="col-6 col-lg-6 col-sm-3 col-md-3 mt-5 text-center mail">
                        <h4 className="text-light">Mail us</h4>
                            <div className="d-flex flex-column justify-content-center text-light text-capitalize">   
                            Flipkart Internet private limited,<br/>
                            building alyssa, bigonia,<br/>
                            gfg@gmail.com <br/>
                            </div>
                        </div>

              </div>
          </div>
          <div className="social_media d-flex justify-content-center text-center my-5 text-light">          
          <a href="#"> <FacebookIcon className="icon_f" /> </a>
          <a href="#"> <LinkedInIcon className="icon_l" /> </a>
          <a href="#"> <InstagramIcon className="icon_i" /> </a>
          <a href="#"> <TwitterIcon className="icon_t" /> </a>
          <a href="#"> <YouTubeIcon className="icon_y" /> </a>
          </div>
          <p className="text-white my-5"> &#x00A9; 2020 Painting. All Rights Reserved | Terms and Condition Apply </p>
        </footer>
    </>
);
};
export default Footer;