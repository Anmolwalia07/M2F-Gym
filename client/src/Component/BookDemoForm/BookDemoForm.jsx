import React, { useState } from 'react'
import axios from "axios"

function BookDemoForm({demoType}) {
    const [formData, setformData] = useState({name:'',phone:'',city:'',email:'',demoType:demoType});
    const [message, setmessage] = useState("")
    const handleForm=async(e)=>{
        e.preventDefault();
        console.log(formData)
        try{
            const response = await axios.post('http://localhost:3000/demoUser',formData);
            if(response.data.message){setmessage(response.data.message)}
            if(response.data.user){
                setmessage("");
                setformData({name:'',phone:'',city:'',email:'',demoType:demoType});
                alert(response.data.booking);
            }
            else{
                setformData({name:'',phone:'',city:'',email:'',demoType:demoType});
            }
        }
        catch(err){
            console.log(err);
        }
        
    }
  return (
    <div className='flex justify-center w-full h-auto mt-[70px] mb-[80px]'>
        <form onSubmit={handleForm} className='w-[800px] h-auto border-2 rounded-lg border-white py-[25px] px-10 flex flex-col gap-4'>
          <label className='text-2xl font-semibold underline'>Fill This To Book Your Demo</label>
          <label className='mt-5 text-lg'>
            Name
            <input type="text"
            name="name"
            value={formData.name}
            onChange={(e)=>{
                setformData({...formData,name:e.target.value});
            }}
            className='w-full p-2 mt-2 text-white bg-black border border-white rounded-md' placeholder='Enter your name' required />
          </label>
          
          <label className='text-lg'>
            Phone
            <input type="text" 
            name="phone"
            value={formData.phone}
            onChange={(e)=>{
                setformData({...formData,phone:e.target.value});
            }}
            className='w-full p-2 mt-2 text-white bg-black border border-white rounded-md' placeholder='Enter your phone number' required />
          </label>
          
          <label className='text-lg'>
            Email
            <input type="email"
            name="email"
            value={formData.email}
            onChange={(e)=>{
                setformData({...formData,email:e.target.value});
            }}
            className='w-full p-2 mt-2 text-white bg-black border border-white rounded-md' placeholder='Enter your email' required />
          </label>
          
          <label className='text-lg'>
            City
            <input type="text"
            name="city"
            value={formData.city}
            onChange={(e)=>{
                setformData({...formData,city:e.target.value});
            }}
            className='w-full p-2 mt-2 text-white bg-black border border-white rounded-md' placeholder='Enter your city' required />
          </label>
          <div className='flex justify-center text-xl font-semibold text-red-700 h-[20px] transition-all '>{message}</div>
          <button type="submit" className='w-[180px] ml-[270px]  p-3 bg-[#fff500] text-black font-bold rounded-md mt-1'>BOOK DEMO</button>
        </form>
      </div>
    )
}

export default BookDemoForm