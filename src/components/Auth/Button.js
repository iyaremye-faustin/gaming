import React from 'react'

const Button=({type, name, value,id,className,styles}) =>{
  return (
    <button type={type} name={name} id={id} className={className} style={styles}>{value}</button>
  )
}

export default Button;
