import React, { useReducer, useState } from 'react'
import Button from './Button'

function reducer(state, action) {
    switch (action.type) {
        case "addItem":
                   const newItem = `Item ${state.length + 1}`
                   if (state.length < 9) {
                   return [...state, newItem]
                   } else {
                   alert("length reached");
                   return state;
                   }
              break;
        case "removeItem":
                   return  state.filter((_, i) => i !== action.id)
              break;
        case "clearItem":
                   return  []
              break;
        default: 
              return state;
    }
}

const Cart = () => {
    // const [items, setitems] = useState([])
    const [state, dispatch] = useReducer(reducer, [])
    // function additem() {
        // const newItem = `Item ${items.length + 1}`
        // if (items.length < 9) {
            // setitems(prev => [...prev, newItem])
        // } else {
            // alert("length reached");
        // }
    // }
    // function removeitem(id) {
        // setitems((items) => items.filter((_, i) => i !== id))
    // }
    // function clearItem() {
        // setitems([])
    // }
    return (
        <div className="border-2 flex justify-center h-screen items-center border-white">
            <div className='border border-white p-[1rem] flex flex-col gap-[2rem] h-[80%] '>
                <h1 className='text-center'>🛒 Your Cart </h1>
                <ul className=' h-[100%] flex flex-col gap-[1rem]  overflow-scroll'>
                    {state.map((e, id) => {
                        return <li key={id} className='flex gap-[1rem]'>{e}<Button btntext="remove" onClick={()=>dispatch({ type: "removeItem", id: id })} /></li>
                    })}
                </ul>
                <div className='flex justify-between items-center'><Button btntext="ADD" onClick={()=>dispatch({ type: "addItem" })} /> <Button btntext="Clear" onClick={()=>dispatch({ type: "clearItem" })} /></div>
                <h2 className='text-center'>Total Items : {state.length}</h2>
            </div>
        </div>
    )
}

export default Cart
