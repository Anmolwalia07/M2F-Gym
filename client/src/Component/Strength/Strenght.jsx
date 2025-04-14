import React, { useState } from 'react';
import BookDemoForm from '../BookDemoForm/BookDemoForm';

function Strenght() {
  const [border, setborder] = useState("");
  const [border1, setborder1] = useState("border-white border-2");
  const [border2, setborder2] = useState("");
  const [url, seturl] = useState("https://hips.hearstapps.com/hmg-prod/images/man-training-hard-royalty-free-image-1718710028.jpg");

  return (
    <div className='bg-black w-full h-auto  relative text-white mt-[100px]'>
      <div className='text-[40px] w-[445px] font-bold text-[#d7d4d4] ml-[65px] mt-[20px] capitalize border-b-2 '>STRENGTH TRAINING</div>
      
      <div className='flex justify-center mt-[20px] gap-[50px]'>
        <div className='w-[600px] flex justify-center flex-col items-center h-[500px]'>
          <div><img src={`${url}`} className='w-[550px] h-[400px] rounded-lg' alt="Strength Training" /></div>
          
          <div className='flex mt-[20px] gap-[45px]'>
            <div className={`${border} rounded-full p-2 cursor-pointer`} onClick={() => { setborder("border-white border-2"); setborder1(""); setborder2(""); seturl("https://cdn.gymaholic.co/articles/best-workout-plans-for-women/woman.jpg"); }}>
              <div className='w-[20px] h-[20px] bg-[#fff500] rounded-full'></div>
            </div>

            <div className={`${border1} rounded-full p-2 cursor-pointer`} onClick={() => { setborder1("border-white border-2"); setborder(""); setborder2(""); seturl("https://hips.hearstapps.com/hmg-prod/images/man-training-hard-royalty-free-image-1718710028.jpg"); }}>
              <div className='w-[20px] h-[20px] bg-[#fff500] rounded-full'></div>
            </div>

            <div className={`${border2} rounded-full p-2 cursor-pointer`} onClick={() => { setborder2("border-white border-2"); setborder(""); setborder1(""); seturl("https://149874912.v2.pressablecdn.com/wp-content/uploads/2024/03/advanced-strength-training-techniques-scaled.jpg"); }}>
              <div className='w-[20px] h-[20px] bg-[#fff500] rounded-full'></div>
            </div>
          </div>
        </div>

        <div className='w-[680px] pt-[30px] h-[500px] text-[22px] p-2 break-keep'>
          For members of M2F Gym, a structured strength training program can be tailored to meet individual goals, experience levels, and unique fitness assessments. Our trainers conduct an initial assessment that evaluates each member's current strength, mobility, and any specific needs or limitations.<br /><br />
          Based on these insights, we create personalized programs that can include a mix of compound and isolation exercises, free weights, machines, and functional training to target the member's specific areas of improvement.
        </div>
      </div>
      <BookDemoForm demoType={"Strength training"}/>

    </div>
  );
}

export default Strenght;
