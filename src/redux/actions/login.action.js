import { userLogin } from "../../api/loginApi"
import { loginFails, loginSucceeds } from "../features/auth/loginSlice";

const login=(loginData)=>async(dispatch)=>{
  const res=await userLogin(loginData);
  if(res.statusLogin){
    return dispatch(loginSucceeds(res.message));
  }
  return dispatch(loginFails(res.message));
}

export default login;