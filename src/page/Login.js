import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import {Form, Button, Container} from 'react-bootstrap'

import '../App.css'; 
import App from '../App';

const Login = ({setAuthenticate}) => {
   const navigate = useNavigate();
   const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
   }
 
  return (
    <Container>
     <Form onSubmit={(event) => loginUser(event)} className ="login-page-style">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이메일</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        로그인 
      </Button>
    </Form>
    </Container>
  );
};

export default Login;
