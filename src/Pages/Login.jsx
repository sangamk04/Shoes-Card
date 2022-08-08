import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../Redux/AuthReducer/action";
const Login = () => {

  const [email, setEmail]=useState();
  const [password,setPassword]=useState();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location=useLocation();
  const comingFrom=location.state?.from?.pathname || "/";
  console.log("Inside Login Page", location);
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email && password){
      dispatchEvent(login({email,password})).then((r)=>{
        if(r.type==="LOGIN_SUCCESS"){
          navigate(comingFrom,{replace:true});
        }
      })
    }
  }
  return (
    <LoginWrapper>
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-cy="login-email" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-cy="login-password" value={password} onChange={e=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" data-cy="login-submit">
          Loading
        </button>
      </form>
    </div>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
display:flex;
width:300px;
flex-direction:column;
align-item:center;
margin:auto;
`