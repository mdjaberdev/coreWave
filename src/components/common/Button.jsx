import React from 'react'

const Button = ({btnTxt, className}) => {
  return (
    <button className={`py-3.5 px-6.25 text-white bg-[#06C279] rounded-[5px] ${className}`}>{btnTxt}</button>
  )
}

export default Button