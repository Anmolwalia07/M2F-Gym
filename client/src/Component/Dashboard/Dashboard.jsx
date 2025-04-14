import React, { useEffect, useState } from 'react';
import DashHeader from '../DashHeader/DashHeader';
import { useCookies } from 'react-cookie';
import Sidebar from "../Sidebar/Sidebar";
import Profile from '../Profile/Profile'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Register from '../Register/Register';
import DashboardBar from '../DashboardLeftSidebar/DashboardBar';
import AllUser from '../AllUser/AllUser'
import Offers from '../Offers/Offers'
import CreateOffer from '../CreateOffer/CreateOffer';
import Supplements from '../Supplements/Supplements';
function Dashboard() {
  const [cookies] = useCookies(['token']); // Specify token to only retrieve this cookie
  const [users, setUsers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1);
  let user = null;
  if (cookies.token) {
    try {
      const decodedToken = jwtDecode(cookies.token);
      user = decodedToken;
    } catch (error) {
      console.error('Invalid token', error);
    }
  }

  const findAllUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getUsers");
      setUsers(response.data.user);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  useEffect(() => {
    findAllUser();
  }, []);

  return (
    <div className='w-full min-h-screen text-white bg-black fl z-[99]'>
      <DashHeader />
      <div className='flex items-center justify-start'><DashboardBar setActiveIndex={setActiveIndex} user={user}/>
      <div className='mt-[120px] bg-black '>
        {activeIndex==1 && <Profile user={user}/>}
        {activeIndex==2 && <Register/>}
        {activeIndex==3 && <AllUser users={users}/>}
        {activeIndex==4 && <Offers/>}
        {activeIndex==5 && <CreateOffer/>}
        {activeIndex==6 && <Supplements/>}
      </div>
      <Sidebar margin="mt-[-100px]" />
      </div>
    </div>
  );
}

export default Dashboard;
