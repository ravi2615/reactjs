
import React from "react";
// import img from "../src/images/slide-1.png";

const Signup = () => {

return(
    <>

<div className="col-md-4 col-md-offset-4" id="login">
						<section id="inner-wrapper" className="login">
                            <h3 className="text-center text-secondary">SignUp</h3>
							<article>
								<form>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon col-2"><i className="fa fa-user" /></span>
											<input type="text" value="name" className="form-control" placeholder="Name" />
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon col-2"><i className="fa fa-envelope"/></span>
											<input type="email" value="email" className="form-control" placeholder="Email Address" />
										</div>
									</div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon col-2"> <i className="fa fa-phone" /> </span>
                                        
                                        <select className="custom-select col-3">
                                            <option selected="">+91</option>
                                            <option value="1">+92</option>
                                            <option value="2">+19</option>
                                            <option value="3">+71</option>
                                        </select>
                                        <input name="" value="name" className="form-control " placeholder="Phone number" type="text"/>
                                    </div>
                                    </div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon col-2"><i className="fa fa-key" /></span>
											<input type="password" value="paasword" className="form-control" placeholder="Password" />
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon col-2"><i className="fa fa-key" /></span>
											<input type="password" value="cpassword" className="form-control" placeholder="Confirm Password" />
										</div>
									</div>
									  <button type="submit" className="btn btn-success">Submit</button>
								</form>
							</article>
						</section></div>

    </>
);
};
export default Signup;