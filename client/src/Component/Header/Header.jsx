import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Link as ScrollLink} from 'react-scroll'
function Header() {
  const navigate=useNavigate();
  const handleclick=()=>{
    navigate("/bookdemo");
  }
  const handlehome=()=>{
    navigate("/");
  }
  const [color1, setcolor1] = useState("text-[#FFF500]")
  const [color2, setcolor2] = useState("")
  const [color3, setcolor3] = useState("")
  const [color4, setcolor4] = useState("")
  return (
    <div className='w-full bg-black h-[100px] flex justify-evenly items-center gap-[400px] z-[99] text-white fixed'>
        <h1 className='text-6xl ml-[-60px] font-semibold'>M<span className='text-[#FFF500]'>2</span>F</h1>
        <div className='flex text-[20px] gap-10 items-center ml-30 '>
            <h2 className={`${color1} hover:cursor-pointer`} onClick={()=>{
              setcolor1("text-[#FFF500]")
              setcolor2("")
              setcolor3("")
              setcolor4("")
              handlehome();
            }}>HOME</h2>
            <h2 className={`${color3} hover:cursor-pointer`}
            onClick={()=>{
              setcolor1("");
              setcolor2("")
              setcolor3("text-[#FFF500]")
              setcolor4("")
            }}
            ><Link to="/whoweare">WHO ARE WE</Link></h2>
            <h2 className={`${color2} hover:cursor-pointer`} onClick={()=>{
               setcolor2("text-[#FFF500]");
              setcolor1("") 
              setcolor3("")
              setcolor4("")
              handleclick();
            }}>BOOK DEMO</h2>
            <h2 className={`${color4} hover:cursor-pointer`} onClick={()=>{
               setcolor4("text-[#FFF500]");
              setcolor1("") 
              setcolor3("")
              setcolor2("")
            }}><Link to="/membership" >MEMBERSHIPS</Link></h2>
            <Link to="/login"><h2 onClick={()=>{
               setcolor4("");
              setcolor1("") 
              setcolor3("")
              setcolor2("")
            }} className='bg-[#FFF500] text-black p-2 font-medium py-4 px-4'>LOGIN</h2></Link>
        </div>
    </div>
  )
}

export default Header