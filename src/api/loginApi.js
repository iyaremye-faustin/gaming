import axios from "axios";
import baseURL from ".";

const userLogin=async(logins)=>{
  try {
    const { data }= await axios.post(`${baseURL}user/login`,logins);
    if(data.status==200){
      const { AccessToken }= data;
      const loginResponse={accessToken:AccessToken,statusLogin:true,message:'Logged in'};
      return loginResponse;
    }
    const loginResponse={message:'Login failed,try again!',statusLogin:false};
    return loginResponse;
  } catch (error) {
    const {data}=error.response;
    if(data.error){
      const errorKeys=Object.keys(data.error.errors);
      const {errors}=data.error;
      const returnedMessage=typeof(errors)=='object'? errors[errorKeys[0]][0]: data.error.message;
      const loginResponse={message:returnedMessage,statusLogin:false};
      return loginResponse;
    }
    const loginResponse={message:'An error occured',statusLogin:false};
    return loginResponse;
  }
}

export {userLogin}