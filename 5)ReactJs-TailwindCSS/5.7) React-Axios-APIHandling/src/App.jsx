import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [blog, setblog] = useState([])
  const randomColor = () => {
  return `rgb(${Math.floor(Math.random()*255)},
              ${Math.floor(Math.random()*255)},
              ${Math.floor(Math.random()*255)})`
}
  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setblog(response.data);
  }
  return (
    <div>
      <button className="px-2 py-1 bg-gray-500 rounded-lg mx-2 my-1 font-bold text-3xl active:scale-95 transition duration-300 ease-in" onClick={getData}>Submit</button>
      {blog.map((e) => (
        <div className="w-full px-2 py-5 rounded-lg mt-2" style={{backgroundColor:randomColor()}} key={e.id}>
          <h1>{e.name}</h1>
          <p>{e.email}</p>
        </div>
      ))}
    </div>
  )
}

export default App
