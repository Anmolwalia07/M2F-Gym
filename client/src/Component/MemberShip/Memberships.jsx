import React from 'react'

function Memberships() {
  return (
    <div id="page3" className=' bg-black w-full h-auto relative text-white pl-[100px] pb-[50px]'>
            <div className='text-[120px] font-black text-[#dedede8c] ml-[-120px] mt-[80px] flex justify-center'>MEMBERSHIPS</div>
            <div className='flex justify-center text-4xl absolute top-[190px] left-[630px] font-bold'>MEMBERSHIPS</div>
            <div className='flex justify-center items-center gap-[20px] mt-3'>
                <div className='w-[330px] h-[450px] ml-[-70px] bg-[#a2a2a2c1]  flex flex-col'>
                <h1 className='text-4xl font-semibold mr-[50px] flex justify-center mt-3'>GOLD</h1>
                <div className='w-full flex flex-col h-auto pt-8 justify-center pr-10 items-center leading-8 text-[19px] font-semibold text-black  uppercase'>
                        <p>All silver benifits</p>
                        <p>Nutrition Guidance</p>
                        <p>3 Steam bath session</p>
                        <p>Towel service</p>
                        <h1 className='font-bold flex justify-center text-3xl mt-[80px]'>6 months</h1>
                        <h1 className='font-black flex justify-center text-5xl mt-5 text-[#FFF500] '>7,200</h1>
                </div>
                </div>
                <div className='w-[320px] h-[500px] ml-[-70px] bg-[#FFF] z-10 text-black flex flex-col'>
                    <h1 className='flex justify-center mt-3 text-4xl font-semibold'>SILVER</h1>
                    <div className='w-full flex flex-col h-auto pt-10 justify-center items-center leading-8 text-[22px] font-medium uppercase'>
                        <p className=''>Access Gym Equipment</p>
                        <p>Nutrition Guidance</p>
                        <p>1 Steam bath session</p>
                        <p>Cross fit & Zumba</p>
                        <h1 className='font-bold flex justify-center text-4xl mt-[100px]'>3 months</h1>
                        <h1 className='font-black flex justify-center text-6xl mt-6 text-[#ef2a2a] '>4,500</h1>
                    </div>
                </div>
                <div className='w-[330px] h-[450px] ml-[-70px] bg-[#a2a2a2c1]'>
                <h1 className='text-4xl font-semibold  flex ml-[85px] mt-3'>PLATINIUM</h1>
                <div className='w-full flex flex-col h-auto pt-8 justify-center pl-9 items-center leading-8 text-[19px] font-semibold text-black f uppercase'>
                        <p>All Gold benifits</p>
                        <p>Workout chart</p>
                        <p>12 Steam bath session</p>
                        <p>Healthy diet chart</p>
                        <h1 className='font-bold flex justify-center text-3xl mt-[80px]'>12 months</h1>
                        <h1 className='font-black flex justify-center text-5xl mt-5 text-[#FFF500] '>12,000</h1>
                </div>
                </div>

            </div>
            </div>
  )
}

export default Memberships