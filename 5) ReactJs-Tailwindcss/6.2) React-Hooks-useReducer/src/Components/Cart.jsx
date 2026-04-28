import React, { useState } from 'react'
import Button from './Button'
const Cart = () => {
    const [items, setitems] = useState([])
    function additem(e) {
        if(items.length<9){
         setitems(prev => [...prev, { name: "items" }])
        }else{
         alert("length reached");
        }
    }
    function removeitem(){
        const filtered=items.filter((e)=>)
    }
    return (
        <div className="border-2 flex justify-center h-screen items-center border-white">
            <div className='border border-white p-[1rem] flex flex-col gap-[2rem] h-[80%] '>
                <h1 className='text-center'>🛒 Your Cart </h1>
                <ul className=' h-[100%] flex flex-col gap-[1rem]  overflow-scroll'>
                    {items.map((e, id) => {
                        return <li key={id} className='flex gap-[1rem]'>{e.name} {id + 1} <Button btntext="remove" onClick={removeitem}/></li>
                    })}
                </ul>
                <div className='flex justify-between items-center'><Button btntext="ADD" onClick={additem} /> <Button btntext="Clear" /></div>
                <h2 className='text-center'>Total Items : {items.length}</h2>
            </div>
        </div>
    )
}

export default Cart
