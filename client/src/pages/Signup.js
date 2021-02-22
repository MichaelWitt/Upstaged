import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import { useHistory } from "react-router-dom";
import API from '../utils/API'
import CodeImg from '../imgs/CodeImg.png'
import SignLogNav from "../components/SignLogNav"

const Signup = () => {

    const history = useHistory()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const submitForm = (e) => {
      e.preventDefault()
        API.signup({ firstName, lastName, email, password }).then(res => {
          console.log('res! ', res)
          if (res.status === 200) {
            history.push('/Characters')
          }
        }).catch(err => { 
          console.log('err', err)
        })
  };

  return (
    <div>
    <SignLogNav />
    <MDBContainer className="Signup">
      <MDBRow >
        <MDBCol md="2"></MDBCol>
        <MDBCol md="8">
          <MDBCard style={{marginTop:"75px", marginBottom:"100px"}}>
            <div className="header pt-3 grey lighten-2" style={{backgroundImage:`url(${CodeImg})`}}>
              <MDBRow className="d-flex justify-content-start">
              <MDBCol sm="6" style={{margin:"auto"}}>
                <h2 className="mt-3 mb-1 mx-5" style={{color:"white"}}>
                  Sign Up
                </h2>
                </MDBCol>
              </MDBRow>
            <MDBCardBody>
              <form>
                <div className="grey-text">
                  <MDBInput
                    onChange={e => setFirstName(e.target.value)}
                    label="First Name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    onChange={e => setLastName(e.target.value)}
                    label="Last Name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    onChange={e => setEmail(e.target.value)}
                    label="Email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    onChange={e => setPassword(e.target.value)}
                    label="Password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                </form>
                <div className="text-center py-4 mb-4 mt-3 mr-5">
                  <MDBBtn 
                    backgroundColor="#f7e200"
                    color="warning"
                    type="submit"
                    className="btn-block mb-0 mt-1"
                    onClick={submitForm}
                  >
                    Register
                  </MDBBtn>
                </div>
            </MDBCardBody>
            </div>
          </MDBCard>
       </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default Signup;