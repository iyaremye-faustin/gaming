import React from 'react';
import PropTypes from 'prop-types';

const InputLogin=({handleChange,name,id,type,isRequired,placeholder,customClass}) =>{
  const defaultClass="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500";
  return (
    <input 
      onChange={handleChange} 
      name={name}
      id={id}
      type={type}
      required={isRequired}
      placeholder={placeholder}
      className={defaultClass + customClass}
    />
  );
}

InputLogin.propTypes={
  handleChange: PropTypes.func,
  name:PropTypes.string,
  id:PropTypes.string,
  type:PropTypes.string,
  isRequired:PropTypes.bool,
  placeholder:PropTypes.string,
  customClass:PropTypes.string
}

InputLogin.defaultProps={
  handleChange:()=>{console.log("test")},
  name:'',
  id:'',
  type:'',
  isRequired:true,
  placeholder:'',
  customClass:''  
}

export default InputLogin;

