import React, {useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import { useHistory } from "react-router-dom";
import API from '../utils/API'

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
            alert("Welcome to Upstaged!")
            history.push('/MainPage') // redirect the page
          }
        }).catch(err => { 
          console.log('err', err)
        })
  };

  return (
    <MDBContainer className="Signup">
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
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
                <div className="text-center py-4 mt-3">
                  <MDBBtn 
                    color="primary" 
                    type="submit"
                    onClick={submitForm}
                  >
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
       </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signup;