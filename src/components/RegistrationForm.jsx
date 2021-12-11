import React, { useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router';
import Axios from 'axios';
import './RegistrationForm.css';
import 'bootstrap/dist/css/bootstrap.css'

import AuthService from '../Services/AuthService';
import Message from '../components/Message';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
//import { PromiseProvider } from 'mongoose';

function RegistrationForm(props) {
  // const url = "https://damp-river-45159.herokuapp.com/users"
  // const [user, setuser] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   username: "",
  //   password: "",
  //   userType: "",
  //   id: ""
  // })

  // function submit(e){
  //   e.preventDefault();
  //   Axios.post(url, {
  //     firstName: user.firstName,
  //     lastName: user.lastName,
  //     email: user.email,
  //     username: user.username,
  //     password: user.password,
  //     userType: user.userType,
  //     id: parseInt(user.id)
  //   })
  //   .then(res=>{
  //     console.log(res.user);
  //   })
  // }

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    id: "",
    isAdmin: false,
    isFaculty: false
  });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    }
  }, []);

  function handle(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (user.isAdmin == 'true') {
      user.isAdmin = true;
    } 
    console.log(user);
  }

  const resetForm = () => {
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
      id: "",
      isAdmin: false,
      isFaculty: false
    });
  }

  const submit = e => {
    e.preventDefault();
    console.log(user)
    AuthService.register(user).then(data => {
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        console.log(message.msgBody)
        timerID = setTimeout(() => {
          //alert("Congratulations! You have successfully registered!");
          props.history.push('/login');
        }, 2000)
      }
    });
  }


  return (
    <div>
      <Form onSubmit={submit} className="registration-form">
        <h1 className="text-center">Registration</h1>
        <FormGroup>
          <Label className="firstname-label" htmlFor="firstName">First Name</Label>
          <Input className="form-control" name="firstName" type="text" onChange={handle} required placeholder="First Name" />
          {/* <Input onChange={(e) => handle(e)} id="firstName" value={user.firstName} type="text" required placeholder="First Name" /> */}
        </FormGroup>

        <FormGroup>
          <Label className="lastname-label" htmlFor="lastName">Last Name</Label>
          <Input className="form-control" onChange={handle} name="lastName" type="text" required placeholder="Last Name" />
        </FormGroup>

        <FormGroup>
          <Label className="email-label" htmlFor="email">Email</Label>
          <Input className="form-control" onChange={handle} name="email" type="email" required placeholder="Example: john@gmail.com" />
        </FormGroup>

        <FormGroup>
          <Label className="userName-label" htmlFor="userName">UserName</Label>
          <Input className="form-control" onChange={handle} name="userName" type="text" required placeholder="UserName" />
        </FormGroup>

        <FormGroup>
          <Label className="password-label" htmlFor="password">Password</Label>
          <Input className="form-control" onChange={handle} name="password" type="password" required placeholder="Password" />
        </FormGroup>

        <FormGroup>
          <Label className="user-type-label">Select which one you are:</Label> <br />
          <fieldset>
            <Label className="admin-label" htmlFor="isAdmin">Admin </Label>
            <Input type="radio" onChange={handle} name="isAdmin" value="true" />

          </fieldset>
        </FormGroup>

        <FormGroup>
          <Label className="identification-number" htmlFor="id">Identification Number</Label>
          <Input onChange={handle} name="id" type="text" required placeholder="Example: 585917494" />
        </FormGroup>

        <div className="register-btn">
          <Button type="submit" className="btn btn-success col-12">Register</Button>
        </div>
      {message ? <Message message={message} /> : null}
      </Form>
    </div>
  );
}

export default withRouter(RegistrationForm);
