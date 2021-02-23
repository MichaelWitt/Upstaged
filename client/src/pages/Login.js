import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import API from '../utils/API';
import LoginDiv from '../imgs/LoginDiv.png';
import CodeImg from '../imgs/CodeImg.png';
import { ProfileContext } from "../utils/GlobalState";
import SignLogNav from "../components/SignLogNav"

const Login = (props) => {
  const profile = useContext(ProfileContext);
  const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("")
  // const [error, setError] = useState("");

  const submitForm = (e) => {
    e.preventDefault()
      API.login({ email, password }).then(res => {
        console.log('res! ', res)
        if (res.status === 200) {
          setUser(res.data.user);
          // profile.dispatch({type: "setName", value: res.data.user.firstName});
          // profile.dispatch({type: "setPoints", value: res.data.user.points});
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("sessionPoints", JSON.stringify(res.data.user.points));
          // if (localStorage.getItem("sessionPoints") === null) {
          //   localStorage.setItem("sessionPoints", 0);
          // };
          history.push('/Home')

        }
      }).catch(err => { 
        console.log('err', err)
        alert("Incorrect email or password")

      })
  };

    useEffect(() => {
      // const loggedInUser = localStorage.getItem("user");
      // if (loggedInUser) {
      //   const foundUser = JSON.parse(loggedInUser);
      //   console.log('foundUser:', foundUser)
      //   setUser(foundUser);
      // }
    }, []);

  //   const handleLogout = () => {
  //     setUser({});
  //     setEmail("");
  //     setPassword("");
  //     localStorage.clear();
  //     history.push('/Login')
  // };

  return (
    <div>
    <SignLogNav />
    <MDBContainer>
      <MDBRow>
        <MDBCol md="2"></MDBCol>
        <MDBCol md="8">
          <MDBCard style={{marginTop:"75px", marginBottom:"100px"}}>
            <img src={LoginDiv} alt="Upstaged Playbill Header"></img>
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
                <MDBInput 
                  onChange={e => setEmail(e.target.value)} 
                  hint="Email" 
                  group 
                  type="text" 
                  validate 
                />
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
                    href="/Signup"
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
    </div>
  );
};

export default Login;