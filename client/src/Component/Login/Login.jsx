import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import { useCookies } from 'react-cookie';
axios.defaults.withCredentials = true;
function Login() {
    const [details, setDetails] = useState({});
    const [color, setcolor] = useState("")
const [formData, setFormData] = useState({ username: '', password: '' });
const { user, message, token } = details; // Ensure 'token' is correctly fetched from 'details'
const [cookies, setCookie] = useCookies(); // Make sure to set cookies properly
const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Make the API call to login
    try {
        const response = await axios.post("http://localhost:3000/login", formData);
        setDetails(response.data); // Update details with response data
        
        if (response.data.token) { // Ensure you're checking response data for token
            console.log("Setting cookie...");
            setCookie('token', response.data.token,{ path: '/dashboard', expires: new Date(Date.now() + 60 * 60 * 1000)  }); // Set cookie path to '/' for broader access
        }
        
        if (response.data.user) {
            console.log("User found, navigating...");
            const dashboardResponse = await axios.get("http://localhost:3000/dashboard");
            navigate(dashboardResponse.data.redirect);
        }
        if(!response.data.message){
            setFormData({ username: '', password: '' })
        }
        // if(response.data.message==="Invaild Username"){
        //     setcolor("text-red-500");
        // }
    } catch (error) {
        console.error("Error during login:", error); 
    }
    
};

    
  return (
    <div className='w-full  bg-[#000] flex justify-center pt-[120px] pb-[50px]'>
        <div className='w-[1000px] h-[580px] text-white ' style={{
            backgroundImage: `url("https://e1.pxfuel.com/desktop-wallpaper/554/24/desktop-wallpaper-best-4-fitness-on-hip-gym-boy.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}>
                <div className='w-[400px] h-[500px] bg-transparent text-white ml-10 mt-10 border-2 px-6 py-8 rounded-md flex flex-col items-center border-white'>
                    <h1 className='text-4xl '>WELCOME BACK !</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col '>
                        <label className='mt-10 mb-2 text-xl'>Username</label>
                        <input type='text' className={`w-[350px] h-[50px] bg-transparent border-2 pl-5 ${color} border-white rounded-md`}
                        placeholder='Enter Your Username'
                        name='username'
                        value={formData.username}
                        onChange={(e)=>{
                            setFormData({...formData,username:e.target.value})
                        }}
                        />

                        <label className='mt-2 mb-2 text-xl'>Password</label>
                        <input type='password' className='w-[350px] h-[50px] bg-transparent border-2 pl-5 border-white rounded-md' 
                        placeholder='Enter Your Password'
                        name='password'
                        value={formData.password}
                        onChange={(e)=>
                            setFormData({...formData, password: e.target.value})
                        }/>

                        <button type='submit' className='bg-[#FFF500] text-black p-2  py-3 font-semibold mt-6 px-4 rounded-lg'>LOGIN</button>
                    </form>
                    {message && <span className='mt-4 text-red-700 text-md'>{message}</span> }
                    <h1 className='mt-4 text-md'>For <span className='text-blue-600'>Register</span> Contact Gym Authorities</h1>
                </div>
            </div>
    </div>
  )
}

export default Login