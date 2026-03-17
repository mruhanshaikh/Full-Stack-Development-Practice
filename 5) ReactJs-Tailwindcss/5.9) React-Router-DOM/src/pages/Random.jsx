import React from 'react'
import { useParams } from 'react-router-dom'
const Random = () => {
//   const param=useParams();
  const {random}=useParams();
  return (
    <div>
       <h1 className='text-6xl font-bold text-center px-2 py-4 '>Dynamic Route : {random}</h1>
    </div>
  )
}

export default Random
