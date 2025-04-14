import React from 'react';

const DashboardBar = ({user , setActiveIndex}) => {
  const buttonClass = "w-full px-4 py-3 text-left transition bg-gray-900 rounded hover:bg-yellow-500 hover:text-black";

  return (
    <div className="top-0 left-0 w-72 h-[600px] p-6 text-white bg-black border-2 border-white shadow-lg mt-[120px] rounded-lg fixed">
      <h2 className="mb-8 text-2xl font-semibold text-center capitalize">Hey {user.name}</h2>
      <ul className="space-y-4">
        <li>
            <button onClick={()=>{
              setActiveIndex(1)
            }} className={buttonClass}>My Profile</button>
        </li>
        {user.role==="admin"&&
        <>
        <li>
        <button onClick={()=>{
          setActiveIndex(2)
        }} className={buttonClass}>Register User</button>
        </li>
        <li>
        <button onClick={()=>{
          setActiveIndex(3)
        }} className={buttonClass}>Manage Users</button>
        </li>
        </>
        }
        <li>
            <button onClick={()=>{
              setActiveIndex(4)
            }} className={buttonClass}>Offers</button>
        </li>
        {user.role=="admin"
        &&<li>
        <button onClick={()=>{
          setActiveIndex(5)
        }} className={buttonClass}>Create Offers</button>
        </li>}
        <li>
        <button onClick={()=>{
          setActiveIndex(6)
        }} className={buttonClass}>Supplements</button>
        </li>
      </ul>
    </div>
  );
};

export default DashboardBar;
