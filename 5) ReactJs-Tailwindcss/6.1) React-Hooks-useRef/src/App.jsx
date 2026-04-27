import React, { useEffect, useRef } from 'react'

const App = () => {
  const posRef = useRef({ mouseX: 0, mouseY: 0 });
  const cursorRef1 = useRef(null);
  const cursorRef2 = useRef(null);
  
  useEffect(() => {
    const handleMove = (e) => {
      posRef.current.mouseX = e.clientX;
      posRef.current.mouseY = e.clientY;

      cursorRef1.current.style.left = e.clientX + 'px';
      cursorRef1.current.style.top = e.clientY + 'px';

      cursorRef2.current.style.left = e.clientX + 'px';
      cursorRef2.current.style.top = e.clientY + 'px';

      // cursorRef1.current.style.transform =
      // `translate(${e.clientX}px, ${e.clientY}px)`;
      // cursorRef2.current.style.transform =
      // `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    document.addEventListener('mousemove', handleMove);
     return () => {
     document.removeEventListener('mousemove', handleMove);
    };
  }, [])

  return (
    <div>
      <span ref={cursorRef1} id="cursorFollower" className="cursorFollower"></span>
      <span ref={cursorRef2} id="cursorFollowerDot" className="cursorFollowerDot"></span>
    </div>
  )
}

export default App
