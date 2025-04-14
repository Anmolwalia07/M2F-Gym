import axios from 'axios';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

function DashHeader() {
    const [cookies, setCookie, removeCookie] = useCookies(['token']); // Add removeCookie function

    const clearCookies = async() => {
        // You can use removeCookie for a simpler approach
        removeCookie('token', { path: '/dashboard' });
        console.log('Cookies after logout:', cookies);
        await axios.post('http://localhost:3000/logout')
        .then((response)=>{
            alert(response.data.message)
        })


    };

    return (
        <div className='w-full bg-black h-[120px] flex justify-evenly items-center gap-[350px] z-[80] text-white fixed'>
            <h1 className='text-6xl ml-[0px] font-semibold'>M<span className='text-[#FFF500]'>2</span>F</h1>
            <div className='flex text-[20px] gap-10 items-center ml-30 '>
                <h2><Link to="/loginHome">HOME</Link></h2>
                <h2><Link to="/who">WHO ARE WE</Link></h2>
                <h2><Link to="/dashboard">DASHBOARD</Link></h2>
                <h2><Link to="/dashmembership">MEMBERSHIPS</Link></h2>
                <Link to="/">
                    <h2 onClick={clearCookies} className='bg-[#FFF500] text-black p-2 font-medium py-4 px-4'>
                        LOGOUT
                    </h2>
                </Link>
            </div>
        </div>
    );
}

export default DashHeader;
