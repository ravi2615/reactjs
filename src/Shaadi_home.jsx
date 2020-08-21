import React from "react";
import web from "../src/images/Home-Couple-Optimized.png";
import { NavLink } from "react-router-dom";
import Typical from 'react-typical';

const Shaadi_home = () => {

return(
    <>
      <section id= "header" className="d-flex align-items-center" >
        <div className="container-fluid nav_bg" >
            <div className="row" >
                 <div className="col-10 mx-auto" >
                     <div className="ml-2 col-10 row">
                     <div className="col-md-6 col-10 mb-1 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column  animated">
                          <Typical
                                steps={['Shaadi.com',3000,'',300]}
                                loop={Infinity}
                                wrapper="h1"
                            />
                         
                         <h2 className="my-3 text-capitalize"> Find Your <strong className="brand-name"> Special </strong> One
                              
                         </h2>
                         <div className=" mt-3">
                             <NavLink to="/reactjs/login" className="btn-login"> Login / Sign Up </NavLink>
                         </div>
                     </div>

                    <div className="col-lg-6 col-12 order-1 order-lg-2 header-img">
                        <img src={web} className="img-fluid" alt="home img" />
                    </div>
                    </div>
                 </div>
             </div>
       </div>
      </section>
      

    </>
);
};
export default Shaadi_home;