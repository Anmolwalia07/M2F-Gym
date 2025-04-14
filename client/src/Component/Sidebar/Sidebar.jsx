import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


function Sidebar({margin}) {
  
  return (
    <div className={`w-[100px] mt-[100px] h-[620px] gap-2 z-[80] bg-black flex flex-col justify-center items-center fixed right-0 ${margin}`}> 
    <FaFacebookSquare color='white' fontSize={27} />
    <FaInstagram color='white' fontSize={27}/>
    <FaXTwitter color='white' fontSize={27}/>
    </div>
  )
}

export default Sidebar