import React from 'react'

function SearchProduct() {
  return (
    <div className='w-[600px] h-[45px] flex items-center  '>
        <input type='text' placeholder='Search by name' className='h-full p-3 ml-[20pxx] w-[400px] bg-transparent border-2 border-white rounded-md'/>
        <button className='p-2 px-4 text-xl text-black bg-yellow-400 ml-[30px] rounded-sm'>Search</button>
    </div>
  )
}

export default SearchProduct