import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import API from '../utils/API'
import LoginDiv from '../imgs/LoginDiv.png'
import CodeImg from '../imgs/CodeImg.png'


const Login = (props) => {
  const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("")
  // const [error, setError] = useState("");

  const submitForm = (e) => {
    e.preventDefault()
      API.login({ email, password }).then(res => {
        console.log('res! ', res)
        if (res.status === 200) {
          setUser(res.data.user)
          localStorage.setItem("user", JSON.stringify(res.data.user))
          history.push('/MainPage')
        }
      }).catch(err => { 
        console.log('err', err)
        alert("Incorrect email or password")
      })
  };

    useEffect(() => {
      const loggedInUser = JSON.parse(localStorage.getItem("user"));
      if (loggedInUser) {
        setUser(loggedInUser);
      }
    }, []);

    const handleLogout = () => {
      setUser({});
      setEmail("");
      setPassword("");
      localStorage.clear();
      history.push('/Login')
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="3"></MDBCol>
        <MDBCol md="6">
          <MDBCard style={{marginTop:"75px", marginBottom:"100px"}}>
            <img src={LoginDiv}></img>
            <div className="header pt-3 grey lighten-2" style={{backgroundImage:`url(${CodeImg})`}}>
              <MDBRow className="d-flex justify-content-start">
              <MDBCol sm="6" style={{margin:"auto"}}>
                <h2 className="mt-3 mb-1 mx-5" style={{color:"white"}}>
                  Log in
                </h2>
                </MDBCol>
              </MDBRow>
              <MDBCardBody className="mx-4 mt-4">
              <form>
                <MDBInput onChange={e => setEmail(e.target.value)} hint="Email" group type="text" validate />
                <br></br>
                <MDBInput
                  hint="Password"
                  group
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  validate
                  containerClass="mb-0"
                />
                </form>
                <div className="text-center mb-4 mt-5 mr-5">
                  <MDBBtn
                    backgroundColor="#f7e200"
                    color="warning"
                    type="button"
                    className="btn-block"
                    onClick={submitForm}
                  >
                    Log in
                  </MDBBtn>
                </div> 
                <h6 className="font-small d-flex justify-content-center" style={{color:"white"}}>
                  Don't have an account?
                  <a
                    href="#!"
                    className="font-weight-bold ml-1"
                    style={{color:"#f7e200"}}
                  >
                    Sign up
                  </a>
                </h6>
              </MDBCardBody>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;