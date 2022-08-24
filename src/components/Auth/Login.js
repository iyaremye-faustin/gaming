import React from 'react';
import { useState } from 'react';
import { loginFields } from '../../constants/LoginForm';
import InputLogin from './InputLogin';
import ForgotButton from './ForgotButton';
import NewAccountButton from './NewAccountButton';
import Button from './Button';
import {submitButton} from '../../constants/Buttons';
import SuccessAlert from '../Alerts/SuccessAlert';
import FailAlert from '../Alerts/FailAlert';
import { useSelector,useDispatch } from 'react-redux';
import {isLogingIn} from '../../redux/features/auth/loginSlice';
import login from '../../redux/actions/login.action.js';
import { useNavigate } from "react-router-dom";

const fields=loginFields;
submitButton.className="text-white py-3 rounded-lg w-full font-bold text-xl tracking-wider";
submitButton.styles={"backgroundColor":"#1977f2"};

export default function Login() {
  const [userData, setUserData] = useState({});
  const loginState=useSelector((state)=>state.login);
  const { currentMessage }=useSelector((state)=>state.login);
  const { loginSuccess }=useSelector((state)=>state.login);
  const navigate=useNavigate();
  if(loginSuccess){
    navigate("/home");
  }
  const dispatch=useDispatch();
  const handleInputChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setUserData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit=async (e)=>{
    e.preventDefault();
    dispatch(isLogingIn());
    dispatch(login(userData));
  }

  return (
    <form onSubmit={handleSubmit}>
      {loginState.loginFail && (
        <FailAlert message={currentMessage} />
      )}
      {loginState.loginSuccess && (
        <SuccessAlert message={currentMessage} />
      )}
      {fields.map((field)=>(
        <InputLogin
          key={field.id}
          handleChange={handleInputChange} 
          name={field.name}
          id={field.id}
          type={field.type}
          required={field.isRequired}
          placeholder={field.placeholder}
        />
      ))}
      <Button
        type={submitButton.type}
        name={submitButton.name}
        value="Login"
        id={submitButton.id}
        className={submitButton.className}
        styles={submitButton.styles}
      />
      <ForgotButton/>
      <hr className=""/>
      <NewAccountButton/>
    </form>  
  );
}