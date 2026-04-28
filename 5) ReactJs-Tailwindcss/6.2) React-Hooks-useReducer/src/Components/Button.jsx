import React from 'react'

const Button = ({btntext,onClick}) => {
  return (
    <button onClick={onClick} className='px-4 py-2 uppercase text-[1rem] bg-white text-black rounded-[10px] active:scale-95 transition duration-500 ease-in-out'>{btntext}</button>
  )
}

export default Button
