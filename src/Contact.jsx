import React, { Component } from "react";
// import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
// import { Alert } from "bootstrap/dist/js/bootstrap.bundle";
// import Layout from '../components/layout'
// import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap';


class Contact extends Component {
  state = {
    fullname: '',
    email: '',
    phone: '',
    msg: '',
    alert_message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { fullname, email, phone, msg } = this.state
    let templateParams = {
      name: fullname,
      from_name: email,
      to_name: 'csewebsite2615@gmail.com',
      phone: phone,
      message_html: msg,
     }
     emailjs.send(
      'gmail',
      'template_lKszXeAY',
       templateParams,
      'user_WpIipRK3m1YnP0EWF3VVy'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      fullname: '',
      email: '',
      phone: '',
      msg: '',
      alert_message: "Message Sent Successfully! ",
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  render() {
    return (
      <>
      
      <div className="container contanct_div my-5">
          <div className ="row">
          <h1 className="text-center text-dark"> Contact Us </h1>
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={this.handleSubmit.bind(this)}>

              <div className="alert p-4">
                              <strong name="alert_message">{this.state.alert_message}</strong> 
                            </div>

              <div className="mb-3">

                  <label
                   htmlFor="exampleFormControlInput1"
                    className="form-label">
                      Full Name
                      </label>
                  <input
                   type="text"
                    className="form-control"
                     id="exampleFormControlInput1"
                      name="fullname"
                      value={this.state.fullname}
                      onChange={this.handleChange.bind(this, 'fullname')}
                      placeholder="Enter Name" />
                  <label
                   htmlFor="exampleFormControlInput1"
                    className="form-label"> 
                    Phone 
                    </label>
                  <input
                   type="Number"
                    className="form-control"
                     id="exampleFormControlInput1"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange.bind(this, 'phone')}
                      placeholder="Enter Mobile Number"
                       />
                  <label
                   htmlFor="exampleFormControlInput1"
                    className="form-label"> 
                    Email address
                    </label>
                  <input
                   type="email"
                    className="form-control"
                     id="exampleFormControlInput1"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange.bind(this, 'email')}
                      placeholder="Enter Email "
                       />
                </div>
                <div className="mb-3">
                  <label
                   htmlFor="exampleFormControlTextarea1"
                    className="form-label">
                      Message
                      </label>
                  <textarea
                   className="form-control"
                    id="exampleFormControlTextarea1"
                     rows="3"
                      name="msg"
                      value={this.state.msg}
                      onChange={this.handleChange.bind(this, 'msg')}>
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
    )
}
}

export default Contact;

