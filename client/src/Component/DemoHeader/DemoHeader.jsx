import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function DemoHeader() {
  const navigate=useNavigate();
  const [color1, setcolor1] = useState("text-[#FFF500]")
  const [color2, setcolor2] = useState("")
  const [color3, setcolor3] = useState("")
  const [color4, setcolor4] = useState("")
  return (
    <div className='w-full bg-black h-[100px] flex justify-evenly items-center gap-[400px] z-[99] text-white fixed'>
        <h1 className='text-6xl font-semibold'>M<span className='text-[#FFF500]'>2</span>F</h1>
        <div className='flex text-[20px] gap-10 items-center ml-30 '>
            <h2 className={` hover:cursor-pointer`} onClick={()=>{
              navigate("/bookdemo/strength")
            }}>STRENGTH TRAINING</h2>
            <h2 className={`${color3} hover:cursor-pointer`}
            onClick={()=>{
              navigate("/bookdemo/crossfit")
            }}
            >CROSSFIT</h2>
            <h2 className={`${color2} hover:cursor-pointer`} onClick={()=>{
              navigate("/bookdemo/zumba")
            }}>ZUMBA CLASSES</h2>
            <h2 className={`${color4} hover:cursor-pointer`} onClick={()=>{
               setcolor4("text-[#FFF500]");
              setcolor1("") 
              setcolor3("")
              setcolor2("")
              navigate("/bookdemo/cardio")
            }}>CARDIO</h2>
            <h2 onClick={()=>{
              navigate("/")
            }} className='bg-[#FFF500] text-black p-2 font-medium py-4 px-5 cursor-pointer'>BACK TO HOME</h2>
        </div>
    </div>
  )
}

export default DemoHeader
