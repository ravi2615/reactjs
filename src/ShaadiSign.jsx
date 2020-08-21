import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ShaadiSign = () => {

  const[data,setData] = useState({
    password: "",
    email: "",
  });

  const InputEvent = ( event ) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return{
       ...preVal,
       [name]:value, 
      };

    })

  };

  const formSubmit = (e) =>{
    e.preventDefault();
    if (data.email!=='' && data.password!==''){
    alert(
      `My email is ${data.email}. Here is my password ${data.password} `
    );
    
    setData({
      password: "",
      email: "",
    });
  }else {
    alert("Please! Fill the form properly");
  }
  };

return(
    <>
      <div id="log">
          {/* <h1 className="text-center"> ShaadiLog Us </h1> */}
            <NavLink to="/login" className="login"> Login /</NavLink>
            <NavLink to="/sign" className="sign"> Sign Up </NavLink>
      </div>
      <div className="container log_div">
          <div className ="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={ formSubmit }>
              <div class="mb-3">
              <label
                   htmlFor="exampleFormControlInput1"
                    className="form-label"> 
                    Email address :
                    </label>
                  <input
                   type="email"
                    className="form-control"
                     id="exampleFormControlInput1"
                      name="email"
                      value={data.email}
                      onChange={InputEvent}
                      placeholder="Enter Email "
                      required
                      autoComplete="off"
                       />
                  <label
                   htmlFor="exampleFormControlInput1"
                    className="form-label">
                      Password :
                      </label>
                  <input
                   type="password"
                    className="form-control"
                     id="exampleFormControlInput1"
                      name="password"
                      value={data.password}
                      onChange={InputEvent}
                      placeholder="Enter Password"
                      required
                      autoComplete="off" />

                  
                </div>
              
                  
                <div className="col-12 text-center">
                  <button className="btn btn-outline-primary" type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </>
);
};
export default ShaadiSign;