import React from 'react'

const Button = ({btnTxt, className}) => {
  return (
    <button className={`py-3.5 px-6.25 text-white font-semibold bg-primary rounded-[5px] cursor-pointer ${className}`}>{btnTxt}</button>
  )
}

export default Button