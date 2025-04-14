import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IMage from "../../assets/aa.png"
import { MdInput } from "react-icons/md";
function Profile({user}) {
    const [userDetail, setuserDetail] = useState(null)
    const findUser=async()=>{
        try{
            const response=await axios.get(`http://localhost:3000/user/${user.username}`)
            setuserDetail(response.data.user);
        }
        catch(err){
            console.log(err)
        }
    }
    
    useEffect(() => {
        findUser();
    }, [])
    
  return (
    <>
    <div className='w-[960px] text-white  ml-[400px] rounded-2xl h-[320px] flex flex-col mt-[5px]  p-4 shadow-lg border-2 bg-[#1a1a1c91]'>
    <div className='flex items-center w-full p-2' >
      <div className='w-[9px] h-[35px] bg-yellow-400 rounded-2xl'></div>
      <h1 className='text-2xl capitalize ml-[10px]'>Detail {userDetail ?.role}</h1>
      <button className='p-2 text-black bg-yellow-400 ml-[590px] rounded-md'>Download info</button>
    </div>
    <div className='flex mt-[10px] ml-[10px]'>
      <img src={IMage} className='w-[120px] h-[120px] rounded-full ' />
      <div className='flex flex-col ml-[20px]  w-full px-2 gap-2'>
        <div className='text-2xl '>{userDetail ?.name}</div>
        <div className='flex w-full h-full px-3'>
          <div className='w-[220px] h-full  pt-3 flex flex-col gap-2'>
            <h1 className='text-gray-400'>Role</h1>
            <h1 className='text-xl capitalize'>{userDetail ?.role}</h1>
          </div>
          <div className='w-[220px] h-full  pt-3 flex flex-col gap-2'>
            <h1 className='text-gray-400'>Username</h1>
            <h1 className='text-xl capitalize'>{userDetail ?.username}</h1>
          </div>
          <div className='w-[250px] h-full pt-3 flex flex-col gap-2'>
            <h1 className='text-gray-400'>Email Address</h1>
            <h1 className='text-xl capitalize'>{userDetail ?.email}</h1>
          </div>
        </div>
      </div>
    </div>
    <div className='w-full h-full  mt-[15px] py-1 px-2  flex justify-evenly gap-2'>
      <div className='w-[210px] bg-[#2A2B2C] h-full rounded-2xl flex justify-center items-center gap-3'>
        <div className='bg-[#3F4041] w-[40px] h-[40px] rounded-full flex justify-center items-center'><MdInput  color="white" fontSize="25px"/>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-xl'>309</h1>
          <h1>Total Attendance</h1>
        </div>
      </div>
      <div className='w-[210px] bg-[#2A2B2C] h-full rounded-2xl flex justify-center items-center gap-3'>
        <div className='bg-[#3F4041] w-[40px] h-[40px] rounded-full flex justify-center items-center'><MdInput  color="white" fontSize="25px"/>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-xl'>Dec 22,2025</h1>
          <h1>Last Entry Date</h1>
        </div>
      </div>
      <div className='w-[230px] bg-[#2A2B2C] h-full rounded-2xl flex justify-center items-center gap-3'>
        <div className='bg-[#3F4041] w-[40px] h-[40px] rounded-full flex justify-center items-center'><MdInput  color="white" fontSize="25px"/>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-xl'>16-10-2025</h1>
          <h1>Membership Expire</h1>
        </div>
      </div>
      <div className='w-[210px] bg-[#2A2B2C] h-full rounded-2xl flex justify-center items-center gap-3'>
        <div className='bg-[#3F4041] w-[40px] h-[40px] rounded-full flex justify-center items-center'><MdInput  color="white" fontSize="25px"/>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-xl'>1 hr</h1>
          <h1>Avg Checkin time</h1>
        </div>
      </div>
    </div>
    </div>

    
    <div className='w-[950px] text-white  ml-[405px] rounded-2xl h-[420px] flex flex-col p-4 shadow-lg border-2 bg-[#1a1a1c91] mt-[50px] mb-[80px]'>
    <div className='flex items-center w-full p-2' >
      <div className='w-[9px] h-[35px] bg-yellow-400 rounded-2xl'></div>
      <h1 className='text-2xl capitalize ml-[10px]'>Attendance History</h1>
      <button className='px-3 py-2 text-black bg-yellow-400 ml-[450px] rounded-md text-lg'>Download History</button>
    </div>
    </div>
    
    </>
  );
}

export default Profile;
