import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <div className='w-full z-[99] bg-[#FFF500] h-[180px] absolute text-black uppercase text-xl flex pl-10 items-center '>
        <div>
        <p>m2f@gamil.com</p>
        <p>99XXXXXXXX</p>
        </div>
        <div className=' absolute left-[700px] flex gap-8'>
        <FaFacebookSquare  fontSize={27} />
        <FaInstagram  fontSize={27}/>
        <FaXTwitter  fontSize={27}/>
        </div>
        <div className='absolute right-10'>
        <p>near huda market</p>
        <p>Pia road pundri</p>
        <p>Kaithal,Haryana</p>
        </div>
    </div>
  )
}

export default Footer