import Input from "./Components/Input"
import Label from "./Components/Label"
import TextArea from "./Components/TextArea"
import Button from "./Components/Button"
import {RiAddLargeFill} from "@remixicon/react"
import { useState } from "react"
const App = () => {
const [form, setform] = useState({
    profileUrl:"",
    profileName:"",
    profileStat:false,
    profileBio:"",
    profileViews:"",
    profileLikes:""
})
    function butClick(e){
    e.preventDefault();
    }
    function handlChange(e){
    const {name,value} =e.target
    // setform({
    //   ...form,
    //   [name]:value,
    // })
    setform(prev=>({
      ...prev,
      [name]:value,
    }))
    }
  return (
    <div>
      <form className="flex p-[1rem] w-full justify-stretch">
        <fieldset className=" border p-[1rem] border-white flex flex-col gap-[1rem] w-full">
        <legend className="font-bold">Fill Out Your Card Form</legend>
        <Input name="profileUrl"onChange={handlChange} state={form.profileUrl} type="url" placeholder="Enter Profile Image URL"/>
        <Input name="profileName" onChange={handlChange} state={form.profileName} type="text" placeholder="Enter Your Name"/>
        {/* <div className="flex gap-[0.5rem] px-[1rem] py-[0.5rem]">
        <div className="flex gap-[0.5rem]"><Input onChange={handlChange} checked={form.profileStat} type="radio" name="choice" id="radio1"/><Label htmlFor="radio1">verified</Label></div>
        <div className="flex gap-[0.5rem]"><Input onChange={handlChange} checked={form.profileStat} type="radio" name="choice" id="radio2"/><Label htmlFor="radio2">Not-Verified</Label></div>
        </div> */}
         <TextArea name="profileBio" onChange={handlChange} state={form.profileBio} placeholder="Enter Your Bio"/>
         <Input  name="profileViews"onChange={handlChange} state={form.profileViews} type="number"  placeholder="Enter profile Views"/>
         <Input name="profileLikes" onChange={handlChange} state={form.profileLikes} type="number"  placeholder="Enter profile Likes"/> 
         <Button onClick={butClick} text="Submit"/>
         </fieldset>
      </form>
    </div>
  )
}

export default App
