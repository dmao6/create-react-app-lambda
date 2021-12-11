import React, { Component, useState, useContext } from 'react';
import { withRouter } from 'react-router';
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';
import Message from '../components/Message';

import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

function LoginForm(props) {

  const [user, setUser] = useState({ userName: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = e => {

    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  }

  const handleSubmit = e => {
    e.preventDefault();
    AuthService.login(user)
      .then(data => {
        console.log(data);
        const { isAuthenticated, user, message } = data;
        if (isAuthenticated) {
          authContext.setUser(user);
          authContext.setIsAuthenticated(isAuthenticated);
          if(user.isAdmin){
            props.history.push('/managementConsole');
          } else {
            props.history.push('/');
          }
        } else {
          setMessage(message);
        }
      })
  }


  return (
    <div>
      <Form className="login-form" onSubmit={handleSubmit}>
        <h1 className="text-center">Log In</h1>
        <FormGroup>
          <Label className="userName-label" htmlFor="userName">Username</Label>
          <Input type="text"
            name="userName"
            onChange={onChange}
            className="form-control"
            placeholder="Username" />
        </FormGroup>

        <FormGroup>
          <Label className="password-label" htmlFor="password">Password</Label>
          <Input type="password"
            name="password"
            onChange={onChange}
            className="form-control"
            placeholder="Password" />
        </FormGroup>

        <div className="login-btn">
          <Button type="submit" className="btn btn-success col-12">Log In</Button>
        </div>
        {message ? <Message message={message} /> : null}
        <div className="text-center links">
          <a className="links" href="/register">Sign Up</a>
        </div>
      </Form>

    </div>
  );
}

export default withRouter(LoginForm);
