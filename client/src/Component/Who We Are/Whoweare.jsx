import React, { useState } from 'react'
function Whoweare() {
    const [ImageSrc, setImageSrc] = useState("https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg");
    const [Border, setBorder] = useState("border-2 border-white p-2 rounded-full cursor-pointer")
    const [Border1, setBorder1] = useState("")
    const [Border2, setBorder2] = useState("")
    const changeImg = () => {
        setImageSrc("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww");
        console.log("Image source changed!");
    };
    const changeImg1 = () => {
        setImageSrc("https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg");
    };
    const changeImg2 = () => {
        setImageSrc("https://c4.wallpaperflare.com/wallpaper/916/717/109/blonde-pose-workout-fitness-wallpaper-preview.jpg");
    };
  return (
        <div id='page2' className='  bg-black w-full h-auto relative text-white pl-[150px] '>
                <div className='text-[120px] font-black text-[#dedede8c] ml-[-120px] mt-[80px] flex justify-center'>WHO WE ARE</div>
                <div className='flex justify-center text-4xl absolute top-[180px] left-[650px] font-bold'>WHO WE ARE</div>
                <div className='flex gap-[60px] mt-1'>
                    <img className='w-[480px] h-[400px]' src={ImageSrc} alt="Gym" />
                    <p className='text-[20px] w-[650px]'>
                        At M2F we believe Crossfitters come in all shapes and sizes, we are all on a journey towards our own personal best health and fitness levels. A journey that makes us better as athletes, friends, and people.
                        <br /><br />
                        Our facility is unlike any other gym you’ve been to before. We pride ourselves not only in providing world-class CrossFit training, but we also believe in creating a motivating and dynamic environment. We are the community dedicated to your human evolution, one workout at a time.
                        <br /><br />
                        Come in for a free trial class! Lose some body fat, gain some friends, and get fit for life!
                    </p>
                </div>
                <div className="flex mt-[15px] gap-8 w-[480px] justify-center p-5 items-center z-50">
                    <div onClick={()=>{
                        changeImg1();
                        setBorder1("")
                        setBorder2("")
                        setBorder("border-2 border-white p-2 rounded-full cursor-pointer");
                    }} className={`${Border} hover:cursor-pointer`}>
                        <div className="w-5 h-5 bg-[#FFF500] rounded-full"></div>
                    </div>
                    <div onClick={()=>{
                        changeImg();
                        setBorder("")
                        setBorder2("")
                        setBorder1("border-2 border-white p-2 rounded-full cursor-pointer")
                    }} className={`${Border1} hover:cursor-pointer`}>
                        <div className="w-5 h-5 bg-[#FFF500] rounded-full"></div>
                    </div>
                    <div  onClick={()=>{
                        changeImg2();
                        setBorder("")
                        setBorder1("")
                        setBorder2("border-2 border-white p-2 rounded-full cursor-pointer")
                    }}  className={`${Border2} hover:cursor-pointer`}>
                        <div className="w-5 h-5 bg-[#FFF500] rounded-full"></div>
                    </div>
                </div>
        </div>  
    )
}

export default Whoweare