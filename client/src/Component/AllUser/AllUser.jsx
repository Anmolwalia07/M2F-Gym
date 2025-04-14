import React from 'react'

function AllUser({users}) {
    let sr_No=1;

  return (
    <div className='w-[1000px] h-[500px] ml-[380px] bg-white text-black overflow-auto p-4 mt-[50px] '>
    {users.length > 1 ? (
      users.map((user, index) => {
        if(index >0){
            return(
                <div key={index} className='py-2 border-b border-gray-200'>
                {`${sr_No++}) Name: ${user.name}, Email: ${user.email}, Role: ${user.role}`}
                </div>
            )
        }
    }   )
    ) : (
      <span>No details available</span>
    )}
  </div>  )
}

export default AllUser