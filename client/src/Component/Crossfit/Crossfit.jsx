import React, { useState } from 'react';
import BookDemoForm from '../BookDemoForm/BookDemoForm';

function Crossfit() {
  const [border, setborder] = useState("");
  const [border1, setborder1] = useState("border-white border-2");
  const [border2, setborder2] = useState("");
  const [url, seturl] = useState("https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Jvc3NmaXR8ZW58MHx8MHx8fDA%3D");

  return (
    <div className='bg-black w-full h-auto  relative text-white mt-[100px]'>
      <div className='text-[40px] w-[430px] font-bold text-[#d7d4d4] ml-[65px] mt-[20px] capitalize border-b-2 '>CROSSFIT TRAINING</div>
      
      <div className='flex justify-center mt-[20px] gap-[50px]'>
        <div className='w-[600px] flex justify-center flex-col items-center h-[500px]'>
          <div><img src={`${url}`} className='w-[550px] h-[400px] rounded-lg'  /></div>
          
          <div className='flex mt-[20px] gap-[45px]'>
            <div className={`${border} rounded-full p-2 cursor-pointer`} onClick={() => { setborder("border-white border-2"); setborder1(""); setborder2(""); seturl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KCEgPyxyh9m4Ij1THhvHWAJ-TNEkSlB2TnRN0ibNmFJbrY72WI-WCqB-u2mliLMAvMg&usqp=CAU"); }}>
              <div className='w-[20px] h-[20px] bg-[#fff500] rounded-full'></div>
            </div>

            <div className={`${border1} rounded-full p-2 cursor-pointer`} onClick={() => { setborder1("border-white border-2"); setborder(""); setborder2(""); seturl("https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Jvc3NmaXR8ZW58MHx8MHx8fDA%3D"); }}>
              <div className='w-[20px] h-[20px] bg-[#fff500] rounded-full'></div>
            </div>

            <div className={`${border2} rounded-full p-2 cursor-pointer`} onClick={() => { setborder2("border-white border-2"); setborder(""); setborder1(""); seturl("https://i.pinimg.com/736x/fb/a9/4f/fba94f73513625bbc4dc634d57c738dd.jpg"); }}>
              <div className='w-[20px] h-[20px] bg-[#fff500] rounded-full'></div>
            </div>
          </div>
        </div>

        <div className='w-[680px] pt-[30px] h-[500px] text-[22px] p-2 break-keep'>
        For members of M2F Gym, our CrossFit program provides a dynamic, high-intensity training experience designed to boost strength, endurance, and agility. CrossFit combines varied functional movements with intensity, making each workout unique and highly effective for reaching diverse fitness goals<br /><br />
        Our trainers assess each member’s strength, mobility, and fitness background to create a CrossFit plan that’s challenging yet accessible.
        </div>
      </div>
      <BookDemoForm demoType={"Crossfit training"}/>

    </div>
  );
}

export default Crossfit;
