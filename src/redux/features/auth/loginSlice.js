import { createSlice } from '@reduxjs/toolkit';

const loginSlice=createSlice({
  name:'login',
  initialState:{
    isLoggin:false,
    loginFail:false,
    loginSuccess:false,
    currentMessage:'',
  },
  reducers:{
    isLogingIn:(state)=>{
      state.isLoggin=true,
      state.loginFail=false,
      state.loginSuccess=false,
      state.currentMessage='Please wait'
    },
    loginFails:(state,action)=>{
      state.isLoggin=false,
      state.loginFail=true,
      state.loginSuccess=false,
      state.currentMessage=action.payload
    },
    loginSucceeds:(state,action)=>{
      state.isLoggin=false,
      state.loginFail=false,
      state.loginSuccess=true,
      state.currentMessage=action.payload
    },
  },
});

export const {isLogingIn,loginFails,loginSucceeds} = loginSlice.actions;
export default {loginReducer: loginSlice.reducer};