import axios from 'axios';
import React, { memo, useState } from 'react'
axios.defaults.withCredentials = true;

function Register() {
    const [formData, setformData] = useState({name:'',email:'',username:'',password:'',role:''});
    const [details, setdetails] = useState({});
    const {message,user,redirect}=details;
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post("http://localhost:3000/register",formData);
            setdetails(response.data);
            if(response.data.message==="User Register successfully"){
                setformData({name:'',email:'',username:'',password:'',role:''})
                alert(response.data.message);
            }
        }
        catch(err){
            console.log(err)
        }
    } 
    console.log(formData)
  return (
    <div className='w-[550px] h-[590px] bg-transparent text-white  border-2 px-6 pt-4  rounded-md flex flex-col items-center border-white ml-[600px]'>
        <h1 className='text-2xl '>RESGISTER</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
            <div className='w-[480px] flex flex-col h-[490px] text-white flex-shrink-0 px-3 '>
                <label className='mt-2 text-xl'>Name</label>
                <input type='text' placeholder='Enter Your Name' name="name"
                 value={formData.name}
                 onChange={(e)=>{
                    setformData({...formData,name:e.target.value})
                 }}
                 className='bg-transparent border-2 mt-2  border-white h-[45px] rounded-lg text-xl pl-5 '/>
                 
                <label className='mt-3 text-xl'>Email</label>
                <input type='email' placeholder='Enter Your Email' name="email" 
                value={formData.email}
                onChange={(e)=>{
                    setformData({...formData,email:e.target.value})
                }}
                className='bg-transparent border-2 mt-2 border-white h-[45px] rounded-lg text-xl pl-5 '/>
                
                
                <label className='mt-3 text-xl'>Username</label>
                <input type='text' placeholder='Enter Your Username' name="username"
                value={formData.username}
                onChange={(e)=>{
                    setformData({...formData,username:e.target.value})
                }}
                 className='bg-transparent border-2 mt-2 border-white h-[45px] rounded-lg text-xl pl-5 '/>
                <label className='mt-3 text-xl'>Password</label>
                <input type='password' placeholder='Enter Your Password'name="password"
                value={formData.password}
                onChange={(e)=>{
                    setformData({...formData,password:e.target.value})
                }}
                 className='bg-transparent border-2 mt-2 border-white h-[45px] rounded-lg text-xl pl-5 '/>
                <label className='mt-3 text-xl'>Role</label>
                <select className='bg-transparent h-[40px] rounded-lg pl-3 w-[110px] text-xl border-2 border-white' name="role" 
                value={formData.role}
                onChange={(e)=>{
                    setformData({...formData,role:e.target.value})
                }} >
                    <option className='font-semibold text-black'>Select</option>
                    <option className='font-semibold text-black'>User</option>
                    <option className='font-semibold text-black'>Staff</option>
                </select>
                <span className=' w-[full] flex justify-center text-xl text-red-600 '>{message!="User created successfully" && message}</span>
            </div>
            <button 
            type='submit' 
            className='px-4 py-3 transition duration-200 ease-in-out bg-red-800 rounded-md w hover:bg-red-700 active:bg-red-900 w-[120px] mt-[-5px]'>
            ADD User
            </button>
        </form>
        
    </div>
  )
}

export default Register