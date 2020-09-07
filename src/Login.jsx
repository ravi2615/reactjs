
import React from "react";

const Login = () => {

return(
    <>


<div className="col-md-4 col-md-offset-4" id="login">
						<section id="inner-wrapper" className="login">
                            <h3 className="text-center text-secondary">Login</h3>
							<article>
								<form>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon col-2"><i className="fa fa-user" /></span>
											<input type="text" className="form-control" placeholder="Userame" />
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon col-2"><i className="fa fa-key" /></span>
											<input type="password" className="form-control" placeholder="Password" />
										</div>
									</div>
									<div className="form-group">
									<a className="text-primary font-weight-normal" href="/">Forgotten account?</a>
									<a className="text-primary font-weight-normal ml-3" href="/">Create Account</a>
									</div>
									
									  <button type="submit" className="btn btn-success">Submit</button>
								</form>
							</article>
						</section></div>
    </>
);
};
export default Login;



