import React from 'react'
import { Routes,Route, Navigate, useNavigate } from 'react-router-dom'
import Whoweare from '../Who We Are/Whoweare'
function BookDemo() {
    const backgroundImage="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RyZW5ndGglMjB0cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
    const navigator=useNavigate();
  return (
    <div className=' bg-black w-full h-auto relative text-white pl-[110px] pb-[10px]'>
    <div className='text-[120px] font-black text-[#dedede8c] ml-[-120px] mt-[80px] flex justify-center uppercase'>DEMO CLasses</div>
    <div className='flex justify-center text-4xl absolute top-[190px] left-[630px] font-bold uppercase' >DEMO Classes</div>
        <div className='flex gap-[100px] mt-[10px] mb-[20px]'>
            <div onClick={()=>{navigator("/bookdemo/strength")}} className='relative cursor-pointer' style={{background: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '420px', 
                        width: '580px'}}>
                    <h2 className='text-2xl ml-5 absolute bottom-[80px] font-medium'>STRENGTH TRAINING CLASSES</h2>
                    <h2 onClick={()=>{navigator("/bookdemo/strength")}} className='bg-[#FFF500] w-[85px]   absolute bottom-5 left-6 text-black p-2 font-semibold uppercase tracking-wide py-4 px-4  h-auto hover:cursor-pointer'>Book</h2>
            </div>
            <div onClick={()=>{navigator("/bookdemo/crossfit")}} className='relative cursor-pointer' style={{background: `url("https://www.shutterstock.com/image-photo/battle-ropes-session-attractive-young-600nw-587832047.jpg")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '420px', 
                        width: '580px'}}>
                        <h2 className='text-2xl ml-5 absolute bottom-[80px] font-medium'>CROSSFIT - BEGINNERS CLASS</h2>
                        <h2 onClick={()=>{navigator("/bookdemo/crossfit")}} className='bg-[#FFF500] w-[85px]   absolute bottom-5 left-6 text-black p-2 font-semibold uppercase tracking-wide py-4 px-4  h-auto hover:cursor-pointer'>Book</h2>
            </div>
        </div>
        <div className='flex gap-[100px] mt-[50px] mb-[20px]'>
            <div className='relative cursor-pointer' onClick={()=>{navigator("/bookdemo/zumba")}} style={{background: `url("https://media.istockphoto.com/id/1067009516/photo/dance-fitness.jpg?s=612x612&w=0&k=20&c=vd_tUCLHzw_fP_mVLr60r778pR9E6rnkAvCcECHqfYg=")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '400px', 
                        width: '580px'}}>
                            <h2 className='text-2xl ml-5 absolute bottom-[80px] font-medium'>ZUMBA - BEGINNERS CLASS</h2>
                            <h2 onClick={()=>{navigator("/bookdemo/zumba")}} className='bg-[#FFF500] w-[85px]  absolute bottom-5 left-6 text-black p-2 font-semibold uppercase tracking-wide py-4 px-4  h-auto hover:cursor-pointer'>Book</h2>
            </div>
            <div className='relative cursor-pointer'onClick={()=>{navigator("/bookdemo/cardio")}} style={{background: `url("https://png.pngtree.com/background/20230618/original/pngtree-3d-rendered-running-machines-or-treadmills-in-a-fitness-gym-picture-image_3751131.jpg")`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'bottom',
                        height: '400px', 
                        width: '580px'}}>
                            <h2 className='text-2xl ml-5 absolute bottom-[80px] font-medium'>CARDIO - CLASSES</h2>
                            <h2 onClick={()=>{navigator("/bookdemo/cardio")}} className='bg-[#FFF500] w-[85px]   absolute bottom-5 left-6 text-black p-2 font-semibold uppercase tracking-wide py-4 px-4  h-auto hover:cursor-pointer'>Book</h2>
            </div>
        </div>
    </div>
  )
}

export default BookDemo