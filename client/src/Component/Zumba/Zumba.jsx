import React, { useState } from 'react';
import BookDemoForm from '../BookDemoForm/BookDemoForm';

function Zumba() {
  const [border, setborder] = useState("");
  const [border1, setborder1] = useState("border-white border-2");
  const [border2, setborder2] = useState("");
  const [url, seturl] = useState("https://www.liveabout.com/thmb/ia9vTGzC4fnTxr09GLjurYFzIUM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dance-fitness-1067009516-5c81907946e0fb0001136604.jpg");

  return (
    <div className='bg-black w-full h-auto  relative text-white mt-[100px]'>
      <div className='text-[40px] w-[305px] font-bold text-[#d7d4d4] ml-[65px] mt-[20px] capitalize border-b-2 '>ZUMBA CLASS</div>
      
      <div className='flex justify-center mt-[20px] gap-[50px]'>
        <div className='w-[600px] flex justify-center flex-col items-center h-[500px]'>
          <div><img src={`${url}`} className='w-[550px] h-[400px] rounded-lg'  /></div>
          
          <div className='flex mt-[20px] gap-[45px]'>
            <div className={`${border} rounded-full p-2 cursor-pointer`} onClick={() => { setborder("border-white border-2"); setborder1(""); setborder2(""); seturl("https://starkfitnessstudio.co.in/uploads/62ef836eaecc3iStock-680886440.jpg"); }}>
              <div className='w-[20px] h-[20px] bg-[#fff500] rounded-full'></div>
            </div>

            <div className={`${border1} rounded-full p-2 cursor-pointer`} onClick={() => { setborder1("border-white border-2"); setborder(""); setborder2(""); seturl("https://www.liveabout.com/thmb/ia9vTGzC4fnTxr09GLjurYFzIUM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dance-fitness-1067009516-5c81907946e0fb0001136604.jpg"); }}>
              <div className='w-[20px] h-[20px] bg-[#fff500] rounded-full'></div>
            </div>

            <div className={`${border2} rounded-full p-2 cursor-pointer`} onClick={() => { setborder2("border-white border-2"); setborder("");     setborder1("");
               seturl("https://media.istockphoto.com/id/1097828268/photo/dance-fitness.jpg?s=612x612&w=0&k=20&c=oCn2Lqc1J-Aux1m7SHYS_3jVIiKz3DPh8dZVM2yw96U="); }}>
              <div className='w-[20px] h-[20px] bg-[#fff500] rounded-full'></div>
            </div>
          </div>
        </div>

        <div className='w-[680px] pt-[30px] h-[500px] text-[22px] p-2 break-keep'>
            For members of M2F Gym, a customized Zumba program offers an engaging way to meet individual fitness goals, whether the aim is weight loss, improved coordination, or simply having fun with dance. Zumba combines energetic dance routines with rhythmic music, making cardio enjoyable and accessible to all fitness levels.<br /><br />
            Our instructors conduct an initial assessment to understand each member’s experience, fitness level, and specific preferences to tailor their Zumba experience. Here’s what members can expect:</div>
      </div>
      <BookDemoForm demoType={"Zumba"}/>
    </div>
  );
}

export default Zumba;
