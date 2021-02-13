import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import "./Login.css"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import API from '../utils/API'

const Login = (props) => {
  const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitForm = (e) => {
    e.preventDefault()
    // function handleClick(e) {
      // e.preventDefault();
      console.log('The link was clicked.');
    // }
    // if (email === "" || password === "") {
    //   setError("Fields are required");
    //   return;
    // }
    // props.login({ email, password });
    // console.log('password:', password)
    // console.log('email:', email)
    // Axios.post('/login', {setEmail, setPassword}).then(res => {
      // console.log('setPassword:', setPassword)
      // console.log('setEmail:', setEmail)
      // console.log('res:', res)
    //   if (res.successcode === 200) {
      console.log('email ', email)
      console.log('password ', password)
      API.login({ email, password }).then(res => {
        console.log('res! ', res)
        if (res.status === 200) {
          history.push('/MainPage') // redirect the page
        }
      
      }).catch(err => { 
        console.log('err', err)
      })
      // } else if (res.successcode === 401) {
      //   setError(res.error)
      // }
    // })
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Log in
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
            <form>

              <MDBInput onChange={e => setEmail(e.target.value)} label="Your email" group type="text" validate />
              <MDBInput
                label="Your password"
                group
                onChange={e => setPassword(e.target.value)}
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small grey-text d-flex justify-content-end">
                Forgot
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Password?
                </a>
              </p>
              <button type="submit" onClick={submitForm}> LogIn </button>
              </form>
              {/* <div className="text-center mb-4 mt-5">
                <MDBBtn
                  color="danger"
                  type="button"
                  className="btn-block z-depth-2"
                >
                  Log in
                </MDBBtn>
              </div>  */}
              <MDBBtn color="primary">Login</MDBBtn>
              <p className="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                <a
                  href="#!"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Sign up
                </a>
              </p>
            
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;