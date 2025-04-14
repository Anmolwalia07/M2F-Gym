import React, { useState } from 'react';
import BookDemoForm from '../BookDemoForm/BookDemoForm';

function Cardio() {
  const [border, setborder] = useState("");
  const [border1, setborder1] = useState("border-white border-2");
  const [border2, setborder2] = useState("");
  const [url, seturl] = useState("https://static.toiimg.com/photo/104350083.cms");

  return (
    <div className='bg-black w-full h-auto  relative text-white mt-[100px]'>
      <div className='text-[40px] w-[300px] font-bold text-[#d7d4d4] ml-[65px] mt-[20px] capitalize border-b-2 '>CADIO CLASS</div>
      
      <div className='flex justify-center mt-[20px] gap-[50px]'>
        <div className='w-[600px] flex justify-center flex-col items-center h-[500px]'>
          <div><img src={`${url}`} className='w-[550px] h-[400px] rounded-lg' /></div>
          
          <div className='flex mt-[20px] gap-[45px]'>
            <div className={`${border} rounded-full p-2 cursor-pointer`} onClick={() => { setborder("border-white border-2"); setborder1(""); setborder2(""); seturl("https://www.bodybuilding.com/images/2016/july/10-best-and-worst-cardio-machines-v2-10-700xh.jpg"); }}>
              <div className='w-[20px] h-[20px] bg-[#fff500] rounded-full'></div>
            </div>

            <div className={`${border1} rounded-full p-2 cursor-pointer`} onClick={() => { setborder1("border-white border-2"); setborder(""); setborder2(""); seturl("https://static.toiimg.com/photo/104350083.cms"); }}>
              <div className='w-[20px] h-[20px] bg-[#fff500] rounded-full'></div>
            </div>

            <div className={`${border2} rounded-full p-2 cursor-pointer`} onClick={() => { setborder2("border-white border-2"); setborder("");     setborder1("");
               seturl("https://clubwoodside.com/wp-content/uploads/2023/03/YoungAthleticManRunningOnTreadmill.jpg"); }}>
              <div className='w-[20px] h-[20px] bg-[#fff500] rounded-full'></div>
            </div>
          </div>
        </div>

        <div className='w-[680px] pt-[30px] h-[500px] text-[22px] p-2 break-keep'>
        For members of M2F Gym, a personalized cardio program is designed to align with individual fitness goals, experience levels, and specific health assessments. Our trainers begin with an initial evaluation that measures each member's cardiovascular fitness, endurance levels, and any particular needs or health considerations.<br /><br />
        Based on this information, we create a cardio plan that incorporates a variety of exercises to maximize results.
        </div>
      </div>
      <BookDemoForm demoType={"Cardio"}/>
    </div>
  );
}

export default Cardio;
