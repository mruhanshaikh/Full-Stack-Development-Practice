const Input = (e) => {
  return (
   <input onChange={e.onChange} value={e.state} checked={e.checked} className="px-[1rem] py-[0.5rem]" required inputMode={e.inputMode} pattern={e.pattern} type={e.type} placeholder={e.placeholder} name={e.name} id={e.id}/>
  )
}

export default Input
