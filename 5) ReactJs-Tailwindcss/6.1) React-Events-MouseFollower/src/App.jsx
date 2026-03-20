import React, { useEffect, useState } from 'react'

const App = () => {
  const [mouse, setmouse] = useState({mouseX:0,mouseY:0})
  const [follower, setfollower] = useState({x:0,y:0})
  useEffect(() => {
    document.addEventListener('mousemove',(e)=>{
      setmouse(
        {
          mouseX:e.clientX,
          mouseY:e.clientY
        }
      )
    })
  }, [])
  
  return (
    <div>
      <span id="cursorFollower" className="cursorFollower" style={{left:mouse.mouseX+'px',top:mouse.mouseY+'px'}}></span>
      <span id="cursorFollowerDot" className="cursorFollowerDot" style={{left:mouse.mouseX+'px',top:mouse.mouseY+'px'}}></span>
    </div>
  )
}

export default App
