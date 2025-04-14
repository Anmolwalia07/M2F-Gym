import React, { useState } from 'react';
import image from '../../assets/body.jpg';
import Memberships from '../MemberShip/Memberships';
import Whoweare from '../Who We Are/Whoweare';

function Body() {
    return (
        <div className='w-full min-h-screen mt-[100px] bg-black flex flex-col '>
            <div id='page1' className='pl-[150px] pt-[100px] w-full h-auto relative z-[80] mb-[100px] '>
                <p className='text-[70px] leading-[75px] font-bold text-start text-white uppercase w-[550px] mb-9 '>
                    The only <span className='text-[#FFF500]'> impossible journey</span> is the one you <span className='text-[#FFF500]'>never begin</span>.
                </p>
                <img className='absolute top-0 right-[180px] z-[-1]' src={image} alt="Body Background" />
                <a className='w-[100px] bg-[#FFF500] text-black px-4 py-4 font-semibold text-xl'>BEGIN YOUR JOURNEY</a>
            </div>
            <Whoweare/>
            <Memberships/>
        </div>
    );
}

export default Body;
