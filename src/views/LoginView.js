import React from "react";
import Login from "../components/Auth/Login";

export default function LoginView() {
  return (
    <div className="bg-gray-300 p-6" style={{ "fontFamily": "Roboto"}}>
      <div className="bg-white w-full lg:w-1/3 mx-auto rounded-lg lg:my-20 px-4 py-4 shadow-lg">
        <Login/>
	    </div>
    </div>
  );
}
