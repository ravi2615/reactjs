import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ShaadiLog = () => {

  const[data,setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
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
    if (data.fullname!=='' && data.phone!=='' && data.email!=='' && data.msg!==''){
    alert(
      `My name is ${data.fullname}. My mobile no. is ${data.phone} and email is ${data.email}. Here is what I want to say ${data.msg} `
    );
    
    setData({
      fullname: "",
      phone: "",
      email: "",
      msg: "",
    });
  }else {
    alert("Please! Fill the form properly");
  }
  };

return(
    <>
      <div id="log">
          {/* <h1 className="text-center"> ShaadiLog Us </h1> */}
            <NavLink to="/reactjs/login" className="login" activeClassName="active" > Login /</NavLink>
            <NavLink to="/reactjs/sign" className="sign" activeClassName="active" > Sign Up </NavLink>
      </div>
      <div className="container contanct_div">
          <div className ="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={ formSubmit }>
              <div class="mb-3">
                  <label
                   htmlFor="exampleFormControlInput1"
                    className="form-label">
                      Full Name :
                      </label>
                  <input
                   type="text"
                    className="form-control"
                     id="exampleFormControlInput1"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                      placeholder="Enter Name"
                      required
                      autoComplete="off" />
                  <label
                   htmlFor="exampleFormControlInput1"
                    className="form-label"> 
                    Phone :
                    </label>
                  <input
                   type="Number"
                    className="form-control"
                     id="exampleFormControlInput1"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                      placeholder="Enter Mobile Number"
                      required
                      autoComplete="off"
                       />
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
                </div>
                <div className="mb-3">
                  <label
                   htmlFor="exampleFormControlTextarea1"
                    className="form-label">
                      Message :
                      </label>
                  <textarea
                   className="form-control"
                    id="exampleFormControlTextarea1"
                     rows="3"
                      name="msg"
                      value={data.msg}
                      onChange={InputEvent}
                      placeholder="Enter Message"
                      required
                      autoComplete="off">
                     </textarea>
                </div>
                <div className="col-12 text-center">
                  <button className="btn btn-outline-primary" type="submit">Submit form</button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </>
);
};
export default ShaadiLog;